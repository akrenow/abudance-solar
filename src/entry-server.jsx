/* eslint-disable react-refresh/only-export-components -- build-time server entry, never hot-reloaded */
// Server entry used only at build time (scripts/prerender.mjs) to render each
// page to static HTML, so search engines and AI crawlers that don't run
// JavaScript still get the full content, head tags and structured data.
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import "./i18n";
import { AppRoutes } from "./App";
import { HeadContext } from "./seo/HeadContext";

export const render = (url) => {
  const collector = { head: null };
  const html = renderToString(
    <StrictMode>
      <HeadContext.Provider value={collector}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HeadContext.Provider>
    </StrictMode>
  );
  return { html, head: collector.head };
};

// Shared with the build script (sitemap.xml, llms.txt) so they use the same
// data and the same built asset URLs as the pages.
export { headToHtml } from "./seo/head";
export { SITE_PAGES } from "./seo/pages";
export { COMPANY } from "./seo/company";
export { SITE_URL, LANGUAGES, DEFAULT_LANGUAGE, localizePath, dirFor } from "./i18n/routing";
export { moduleFamilies, bipvDownloads, documents } from "./core/constants/products";
export { jobOpenings } from "./core/constants/jobOpenings";
export { default as ar } from "./i18n/ar";
