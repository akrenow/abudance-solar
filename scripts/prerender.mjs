// Build step (runs after the client and server builds, see package.json):
//   1. Pre-renders every page in every language to static HTML in dist/, so
//      search engines and AI crawlers (most don't run JavaScript) see the full
//      content, per-language <head> tags and JSON-LD.
//   2. Writes sitemap.xml (with hreflang alternates), llms.txt and llms-full.txt
//      from the same data the pages use.
// Fails the build if anything is missing, so a broken page never ships silently.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const server = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const {
  render,
  headToHtml,
  SITE_PAGES,
  COMPANY,
  SITE_URL,
  LANGUAGES,
  DEFAULT_LANGUAGE,
  localizePath,
  dirFor,
  moduleFamilies,
  bipvDownloads,
  documents,
  jobOpenings,
  ar,
  PV_PRODUCTS,
  BIPV_PRODUCTS,
  productPath,
  FAQ,
  FAQ_VALUES,
} = server;

const fail = (message) => {
  console.error(`\n[prerender] ${message}\n`);
  process.exit(1);
};

// ---------- 1. Pages ----------
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
for (const marker of ['<html lang="en">', "<!--seo-head-->", '<div id="root"></div>']) {
  if (!template.includes(marker)) fail(`index.html template is missing ${marker}`);
}

// "/" -> index.html, "/about" -> about.html, "/ar" -> ar.html, "/ar/about" -> ar/about.html
const fileFor = (url) => (url === "/" ? "index.html" : `${url.slice(1)}.html`);

const writePage = async (url, outFile) => {
  const { html, head } = render(url);
  if (!head) fail(`${url} rendered without <SEOHead>`);
  if (!html.trim()) fail(`${url} rendered empty`);
  const page = template
    .replace('<html lang="en">', `<html lang="${head.lang}" dir="${head.dir}">`)
    .replace(/<title>[\s\S]*?<\/title>\s*/, "")
    .replace("<!--seo-head-->", headToHtml(head))
    .replace('<div id="root"></div>', `<div id="root" data-prerendered="${url}">${html}</div>`);
  const target = path.join(dist, outFile);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, page);
  return head;
};

const written = [];
for (const lang of LANGUAGES) {
  for (const { path: pagePath } of SITE_PAGES) {
    const url = localizePath(pagePath, lang);
    const head = await writePage(url, fileFor(url));
    if (head.lang !== lang) fail(`${url} rendered in "${head.lang}" instead of "${lang}"`);
    written.push(fileFor(url));
  }
  // Not-found page per language (served with a 404 status by the host)
  const notFound = localizePath("/404", lang);
  await writePage(notFound, fileFor(notFound));
  written.push(fileFor(notFound));
}

// ---------- 2. sitemap.xml ----------
const today = new Date().toISOString().slice(0, 10);
const abs = (pagePath, lang) => SITE_URL + localizePath(pagePath, lang);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${SITE_PAGES.flatMap((page) =>
  LANGUAGES.map(
    (lang) => `  <url>
    <loc>${abs(page.path, lang)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
${[...LANGUAGES.map((l) => [l, l]), ["x-default", DEFAULT_LANGUAGE]]
  .map(([hreflang, l]) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${abs(page.path, l)}" />`)
  .join("\n")}
  </url>`
  )
).join("\n")}
</urlset>
`;
await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap);

// ---------- 3. llms.txt / llms-full.txt (https://llmstxt.org) ----------
const url = (p) => SITE_URL + p;
const arName = (text) => ar[text] || text;
const families = Object.values(moduleFamilies);
const range = (text) => text.replace(" to ", "–");
const allModels = families.flatMap((f) => f.models);
const bounds = (key) => allModels.flatMap((m) => m[key].split(" to ").map(Number));
const minPower = Math.min(...bounds("wattage"));
const maxPower = Math.max(...bounds("wattage"));
const maxEfficiency = Math.max(...bounds("efficiency")).toFixed(2);

// The company's own description, as on the website
const summary = "Abundance Solar Panels Industries L.L.C, based in KEZAD, UAE, is a leading solar panel manufacturer with a 600MW annual capacity. Utilizing advanced European technology, we produce high-efficiency N-type TOPCon, HJT, and IBC photovoltaic modules, driving innovation and sustainability to make renewable energy accessible worldwide, supporting the UAE's vision for a green future.";

const keyFacts = [
  `Address: ${COMPANY.address.streetAddress}, Abu Dhabi, United Arab Emirates`,
  `Phone: ${COMPANY.telephoneDisplay}`,
  `Email: ${COMPANY.email}`,
  "Cell technology in production: N-type TOPCon, half-cut cells with 16-busbar interconnection (M10 and G12R module series); HJT and IBC modules are listed as coming soon",
  `PV modules: ${allModels.length} models in ${families.length} families, ${minPower}–${maxPower} Wp, module efficiency up to ${maxEfficiency}%`,
  "Warranty (ABS-WAR-QA-001): 15-year limited product warranty; 30-year linear power output warranty guaranteeing at least 99.00% of rated power in year 1, declining by no more than 0.40 percentage points per year to 87.40% at the end of year 30",
  "Website languages: English and Arabic",
];

// Product pages are listed under "Products", not repeated under "Pages"
const isProductPage = (pagePath) => pagePath.split("/").length > 3;
const faqText = (text) => text.replace(/\{(\w+)\}/g, (match, key) => (key in FAQ_VALUES ? FAQ_VALUES[key] : match));

const pageLinks = (lang) =>
  SITE_PAGES.filter((page) => !isProductPage(page.path)).map(
    (page) =>
      lang === "ar"
        ? `- [${arName(page.label)}](${abs(page.path, lang)})`
        : `- [${page.name}](${abs(page.path, lang)}): ${page.summary}`
  ).join("\n");

const llms = `# ${COMPANY.brand}

> ${summary}

${keyFacts.map((fact) => `- ${fact}`).join("\n")}

## Pages

${pageLinks("en")}

## Products

${PV_PRODUCTS.map(
  (p) => `- [${p.title}](${abs(productPath(p), "en")}): N-type TOPCon, ${p.models[0].productType}, ${p.models.length} models, ${p.wattage}, ${p.efficiency} efficiency`
).join("\n")}
${BIPV_PRODUCTS.map(
  (p) => `- [${p.title}](${abs(productPath(p), "en")}): BIPV, ${p.wattage} power output, ${p.efficiency} module efficiency`
).join("\n")}

## Documents

- [Product catalogue (PDF)](${url(documents.productCatalogue)})
- [Limited and linear warranty (PDF)](${url(documents.warranty)})
- [Installation and safety precautions manual (PDF)](${url(documents.installationManual)})
- [Unpacking instructions (PDF)](${url(documents.unpackingInstructions)})
- [All datasheets](${abs("/downloads", "en")})

## Arabic (العربية)

${pageLinks("ar")}

## Optional

- [Full details: every model's specifications and datasheet link](${url("/llms-full.txt")})
`;

const modelTable = (f) =>
  [
    "| Model | Power (Wp) | Efficiency (%) | Dimensions | Datasheet |",
    "| --- | --- | --- | --- | --- |",
    ...f.models.map(
      (m) => `| ${m.name} | ${range(m.wattage)} | ${range(m.efficiency)} | ${m.dimensions} | [PDF](${url(m.pdfFile)}) |`
    ),
  ].join("\n");

const llmsFull = `# ${COMPANY.brand} — full company and product information

> ${summary}

Source: ${SITE_URL} (also available in Arabic at ${abs("/", "ar")}). Generated from the website's own product data on ${today}.

## Company

${keyFacts.map((fact) => `- ${fact}`).join("\n")}
- Location map: ${COMPANY.mapUrl}
- Social: ${COMPANY.sameAs.join(", ")}

## PV modules (N-type TOPCon)

Bifacial: Glass/Glass Bifacial, Glass/Glass All Black, Glass/Transparent Backsheet. Monofacial: Glass/White Backsheet, Glass/Black Backsheet (all black).

${PV_PRODUCTS.map(
  (p) =>
    `### ${p.title}\n\n${p.description}\n\nPage: ${abs(productPath(p), "en")}\n\nConstruction: ${p.models[0].productType}. Power ${p.wattage}, efficiency ${p.efficiency}.\n\n${modelTable(p)}`
).join("\n\n")}

## BIPV (building-integrated photovoltaics)

Size, colour and print can be customized. ${abs("/products/bipv-products", "en")}

${BIPV_PRODUCTS.map(
  (p) => `### ${p.title}\n\n${p.description} Typical power output: ${p.wattage}.\n\nPage: ${abs(productPath(p), "en")}`
).join("\n\n")}

### BIPV datasheets

| Product | Power (Wp) | Module efficiency (%) | Datasheet |
| --- | --- | --- | --- |
${bipvDownloads.models.map((m) => `| ${m.name} | ${range(m.wattage)} | ${range(m.efficiency)} | [PDF](${url(m.pdfFile)}) |`).join("\n")}

## Documents

- Product catalogue: ${url(documents.productCatalogue)}
- Limited and linear warranty (ABS-WAR-QA-001): ${url(documents.warranty)}
- Installation and safety precautions manual (ABS-IM-ENG-001): ${url(documents.installationManual)}
- Unpacking instructions (ABS-WI-ENG-010): ${url(documents.unpackingInstructions)}

## Frequently asked questions

${FAQ.map((item) => `### ${faqText(item.question)}\n\n${faqText(item.answer)}`).join("\n\n")}

More: ${abs("/faq", "en")}

## Careers

${jobOpenings.map((job) => `- ${job.title} (${job.department}, ${job.location}, ${job.type}, ${job.experience}): ${job.description}`).join("\n")}

Apply by email: ${COMPANY.email} — ${abs("/career", "en")}

## Contact

${COMPANY.addressDisplay}
Phone: ${COMPANY.telephoneDisplay} · Email: ${COMPANY.email} · ${abs("/contact", "en")}
`;

await fs.writeFile(path.join(dist, "llms.txt"), llms);
await fs.writeFile(path.join(dist, "llms-full.txt"), llmsFull);

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(
  `[prerender] ${written.length} pages (${LANGUAGES.join(", ")}), sitemap.xml (${SITE_PAGES.length * LANGUAGES.length} URLs), llms.txt, llms-full.txt`
);
