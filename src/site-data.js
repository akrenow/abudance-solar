// The site's own data, as one module, for the files generated from it
// (sitemap.xml, llms.txt, llms-full.txt; see scripts/site-files.mjs).
// Loaded by the build through src/entry-server.jsx and by the dev server
// through vite.config.js. Data only: no React components.
export { SITE_PAGES } from "./seo/pages";
export { COMPANY } from "./seo/company";
export { SITE_URL, LANGUAGES, DEFAULT_LANGUAGE, localizePath, dirFor } from "./i18n/routing";
export { moduleFamilies, bipvDownloads, documents } from "./core/constants/products";
export { jobOpenings } from "./core/constants/jobOpenings";
export { PV_PRODUCTS, BIPV_PRODUCTS, productPath } from "./core/constants/productCatalog";
export { FAQ, FAQ_VALUES } from "./seo/faq";
export { default as ar } from "./i18n/ar";
