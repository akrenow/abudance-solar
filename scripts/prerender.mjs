// Build step (runs after the client and server builds, see package.json):
//   1. Pre-renders every page in every language to static HTML in dist/, so
//      search engines and AI crawlers (most don't run JavaScript) see the full
//      content, per-language <head> tags and JSON-LD.
//   2. Writes sitemap.xml (with hreflang alternates), llms.txt and llms-full.txt
//      from the same data the pages use (scripts/site-files.mjs; the dev server
//      serves the same files live, see vite.config.js).
// Fails the build if anything is missing, so a broken page never ships silently.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { buildSiteFiles } from "./site-files.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const server = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const { render, headToHtml, SITE_PAGES, LANGUAGES, localizePath } = server;

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

// ---------- 2. sitemap.xml, llms.txt, llms-full.txt ----------
const siteFiles = buildSiteFiles(server);
for (const [name, content] of Object.entries(siteFiles)) {
  if (!content.trim()) fail(`${name} is empty`);
  await fs.writeFile(path.join(dist, name), content);
}

await fs.rm(ssrDir, { recursive: true, force: true });
console.log(
  `[prerender] ${written.length} pages (${LANGUAGES.join(", ")}), sitemap.xml (${SITE_PAGES.length * LANGUAGES.length} URLs), llms.txt, llms-full.txt`
);
