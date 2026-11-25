// Generates sitemap.xml (with hreflang alternates), llms.txt and llms-full.txt
// (https://llmstxt.org) from the site's own data (src/site-data.js).
// Used by the build (scripts/prerender.mjs writes them to dist/) and by the
// dev server (vite.config.js serves them live), so both give the same content.

// Served path -> content type
export const SITE_FILE_TYPES = {
  "/sitemap.xml": "application/xml; charset=utf-8",
  "/llms.txt": "text/plain; charset=utf-8",
  "/llms-full.txt": "text/plain; charset=utf-8",
};

// The company's own description, as on the website
const SUMMARY =
  "Abundance Solar Panels Industries L.L.C, based in KEZAD, UAE, is a leading solar panel manufacturer with a 600MW annual capacity. Utilizing advanced European technology, we produce high-efficiency N-type TOPCon, HJT, and IBC photovoltaic modules, driving innovation and sustainability to make renewable energy accessible worldwide, supporting the UAE's vision for a green future.";

/**
 * @param data     the exports of src/site-data.js
 * @param siteUrl  origin for every link (the live site; the local server in development)
 * @param today    date stamp (YYYY-MM-DD)
 * @returns {{ "sitemap.xml": string, "llms.txt": string, "llms-full.txt": string }}
 */
export function buildSiteFiles(data, { siteUrl = data.SITE_URL, today = new Date().toISOString().slice(0, 10) } = {}) {
  const {
    SITE_PAGES,
    COMPANY,
    LANGUAGES,
    DEFAULT_LANGUAGE,
    localizePath,
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
  } = data;

  const abs = (pagePath, lang) => siteUrl + localizePath(pagePath, lang);
  // Asset paths can contain spaces in development (source folders) and may
  // arrive already encoded, so normalise to exactly one level of encoding
  const encodeOnce = (p) => {
    try {
      return encodeURI(decodeURI(p));
    } catch {
      return p;
    }
  };
  const url = (p) => siteUrl + encodeOnce(p);

  // ---------- sitemap.xml ----------
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

  // ---------- llms.txt / llms-full.txt ----------
  const arName = (text) => ar[text] || text;
  const families = Object.values(moduleFamilies);
  const range = (text) => text.replace(" to ", "–");
  const allModels = families.flatMap((f) => f.models);
  const bounds = (key) => allModels.flatMap((m) => m[key].split(" to ").map(Number));
  const minPower = Math.min(...bounds("wattage"));
  const maxPower = Math.max(...bounds("wattage"));
  const maxEfficiency = Math.max(...bounds("efficiency")).toFixed(2);

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
    SITE_PAGES.filter((page) => !isProductPage(page.path))
      .map((page) =>
        lang === "ar"
          ? `- [${arName(page.label)}](${abs(page.path, lang)})`
          : `- [${page.name}](${abs(page.path, lang)}): ${page.summary}`
      )
      .join("\n");

  const llms = `# ${COMPANY.brand}

> ${SUMMARY}

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

> ${SUMMARY}

Source: ${siteUrl} (also available in Arabic at ${abs("/", "ar")}). Generated from the website's own product data on ${today}.

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

  return { "sitemap.xml": sitemap, "llms.txt": llms, "llms-full.txt": llmsFull };
}
