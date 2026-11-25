import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { buildSiteFiles, SITE_FILE_TYPES } from "./scripts/site-files.mjs";

// Development only: serve /llms.txt, /llms-full.txt and /sitemap.xml live from
// the current source data (the build writes the same files to dist/, see
// scripts/prerender.mjs). Links point at the local server so they can be clicked.
const siteFilesInDev = () => ({
  name: "site-files-in-dev",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const pathname = (req.url || "").split("?")[0];
      const type = SITE_FILE_TYPES[pathname];
      if (!type || req.method !== "GET") return next();
      try {
        const data = await server.ssrLoadModule("/src/site-data.js");
        const origin = `${server.config.server.https ? "https" : "http"}://${req.headers.host}`;
        res.setHeader("Content-Type", type);
        res.end(buildSiteFiles(data, { siteUrl: origin })[pathname.slice(1)]);
      } catch (error) {
        server.ssrFixStacktrace(error);
        next(error);
      }
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteFilesInDev()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
