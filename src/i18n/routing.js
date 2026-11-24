// Language is part of the URL:
//   English (default)  /            /about        /products/solar-panels
//   Arabic             /ar          /ar/about     /ar/products/solar-panels
// No trailing slashes: the hosting config redirects /about/ to /about.
// English keeps the original, already-indexed URLs; Arabic lives under /ar.

export const SITE_URL = "https://bronzesolar.com";
export const DEFAULT_LANGUAGE = "en";
export const LANGUAGES = ["en", "ar"];
export const RTL_LANGUAGES = ["ar"];

// Shown in the language selector, each in its own language
export const LANGUAGE_NAMES = { en: "English", ar: "العربية" };

// Open Graph locale for each language
export const OG_LOCALES = { en: "en_US", ar: "ar_AE" };

const AR_PREFIX = /^\/ar(?=\/|$)/;

export const langFromPath = (pathname = "/") =>
  AR_PREFIX.test(pathname) ? "ar" : DEFAULT_LANGUAGE;

export const dirFor = (lang) => (RTL_LANGUAGES.includes(lang) ? "rtl" : "ltr");

// "/ar/about" -> "/about", "/ar" -> "/"
export const stripLangPrefix = (pathname = "/") =>
  pathname.replace(AR_PREFIX, "") || "/";

// Path for the same page in `lang`. Leaves external links, mailto:, tel:
// and #anchors untouched. Query strings and hashes are kept.
export const localizePath = (path, lang) => {
  if (typeof path !== "string" || !path.startsWith("/") || path.startsWith("//")) {
    return path;
  }
  const [, pathname, rest = ""] = path.match(/^([^?#]*)(.*)$/);
  const base = stripLangPrefix(pathname);
  if (lang === DEFAULT_LANGUAGE) return base + rest;
  return (base === "/" ? `/${lang}` : `/${lang}${base}`) + rest;
};
