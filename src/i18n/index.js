// i18next setup for the English / Arabic site.
//
// The URL decides the language (see ./routing.js): pages under /ar are Arabic,
// everything else is English. Keys are the English text itself
// (t("Contact Us")), so English needs no dictionary and any text without an
// Arabic entry falls back to English. Arabic lives in ./ar.js.
// Placeholders use single braces: t("{value} Efficiency", { value }).
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./ar";
import { DEFAULT_LANGUAGE, LANGUAGES, langFromPath } from "./routing";

i18n.use(initReactI18next).init({
  resources: { en: { translation: {} }, ar: { translation: ar } },
  // The URL decides; on the server (pre-rendering) each page passes its own language.
  lng: typeof window === "undefined" ? DEFAULT_LANGUAGE : langFromPath(window.location.pathname),
  supportedLngs: LANGUAGES,
  fallbackLng: DEFAULT_LANGUAGE,
  // English sentences contain "." and ":", so they must not split keys.
  keySeparator: false,
  nsSeparator: false,
  returnNull: false,
  returnEmptyString: false,
  interpolation: { escapeValue: false, prefix: "{", suffix: "}" },
  react: { useSuspense: false },
  // In development, log Arabic text that has no translation yet.
  saveMissing: import.meta.env.DEV,
  saveMissingTo: "current",
  missingKeyHandler: (languages, _namespace, key) => {
    if (languages.includes("ar") && /[A-Za-z]/.test(key)) {
      console.warn(`[i18n] Missing Arabic translation for: ${key}`);
    }
  },
});

export default i18n;
