// Builds a page's <head> tags once, then either applies them to the live
// document (browser) or serializes them into pre-rendered HTML (build).
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  OG_LOCALES,
  SITE_URL,
  dirFor,
  localizePath,
  stripLangPrefix,
} from "@/i18n/routing";
import { COMPANY } from "./company";
import { pageGraph } from "./structuredData";

// Allow full snippets and large image previews in search and AI answers.
export const ROBOTS_INDEX =
  "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

export const buildHead = ({
  t,
  lang,
  pathname,
  title,
  description,
  keywords,
  ogImage = COMPANY.logo,
  ogType = "website",
  noindex = false,
  pageType = "WebPage",
  breadcrumbs = [],
  jsonLd = [],
}) => {
  const basePath = stripLangPrefix(pathname);
  const urlFor = (language) => SITE_URL + localizePath(basePath, language);
  const url = urlFor(lang);
  const pageTitle = t(title);
  const pageDescription = t(description);

  const metas = [
    ["name", "description", pageDescription],
    keywords && ["name", "keywords", t(keywords)],
    ["name", "author", COMPANY.brand],
    ["name", "robots", noindex ? "noindex, follow" : ROBOTS_INDEX],
    ["property", "og:title", pageTitle],
    ["property", "og:description", pageDescription],
    ["property", "og:type", ogType],
    ["property", "og:url", url],
    ["property", "og:image", ogImage],
    ["property", "og:locale", OG_LOCALES[lang]],
    ...LANGUAGES.filter((language) => language !== lang).map((language) => [
      "property",
      "og:locale:alternate",
      OG_LOCALES[language],
    ]),
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", pageTitle],
    ["name", "twitter:description", pageDescription],
    ["name", "twitter:image", ogImage],
  ].filter(Boolean);

  const links = noindex
    ? []
    : [
        { rel: "canonical", href: url },
        ...[...LANGUAGES, "x-default"].map((hreflang) => ({
          rel: "alternate",
          hreflang,
          href: urlFor(hreflang === "x-default" ? DEFAULT_LANGUAGE : hreflang),
        })),
      ];

  const structuredData = noindex
    ? null
    : pageGraph({
        t,
        lang,
        url,
        title: pageTitle,
        description: pageDescription,
        pageType,
        breadcrumbs: breadcrumbs.map(([label, path]) => [t(label), SITE_URL + localizePath(path, lang)]),
        nodes: jsonLd,
      });

  return { lang, dir: dirFor(lang), title: pageTitle, metas, links, structuredData };
};

// Tags this module owns; anything else in <head> is left alone.
const MANAGED_SELECTOR = [
  'meta[name="description"]',
  'meta[name="keywords"]',
  'meta[name="author"]',
  'meta[name="robots"]',
  'meta[property^="og:"]:not([property="og:site_name"])',
  'meta[name^="twitter:"]',
  'link[rel="canonical"]',
  'link[rel="alternate"][hreflang]',
  'script[type="application/ld+json"]',
].join(",");

export const applyHead = (head) => {
  const root = document.documentElement;
  root.lang = head.lang;
  root.dir = head.dir;
  document.title = head.title;
  document.head.querySelectorAll(MANAGED_SELECTOR).forEach((node) => node.remove());

  const fragment = document.createDocumentFragment();
  head.metas.forEach(([attr, key, content]) => {
    const meta = document.createElement("meta");
    meta.setAttribute(attr, key);
    meta.setAttribute("content", content);
    fragment.appendChild(meta);
  });
  head.links.forEach((attrs) => {
    const link = document.createElement("link");
    Object.entries(attrs).forEach(([name, value]) => link.setAttribute(name, value));
    fragment.appendChild(link);
  });
  if (head.structuredData) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(head.structuredData);
    fragment.appendChild(script);
  }
  document.head.appendChild(fragment);
};

const escapeAttr = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Same tags as HTML, for pre-rendered pages.
export const headToHtml = (head) =>
  [
    `<title>${escapeAttr(head.title)}</title>`,
    ...head.metas.map(([attr, key, content]) => `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`),
    ...head.links.map(
      (attrs) => `<link ${Object.entries(attrs).map(([k, v]) => `${k}="${escapeAttr(v)}"`).join(" ")} />`
    ),
    head.structuredData &&
      `<script type="application/ld+json">${JSON.stringify(head.structuredData).replace(/</g, "\\u003c")}</script>`,
  ]
    .filter(Boolean)
    .join("\n    ");
