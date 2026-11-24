import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { dirFor, langFromPath, localizePath as localize } from "./routing";

// const { t, lang, dir, localizePath } = useLanguage();
//
// The language comes from the current URL, so every component on a page
// agrees with the address bar.
//   t("English text")            -> translated text for the page's language
//   t("{value} Efficiency", {...}) placeholders
//   localizePath("/contact")      -> "/contact" or "/ar/contact"
export const useLanguage = () => {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  const { t: translate } = useTranslation("translation", { lng: lang });

  // Pass non-text values (undefined, numbers) straight through.
  const t = useCallback(
    (text, vars) => (typeof text === "string" ? translate(text, vars) : text),
    [translate]
  );
  const localizePath = useCallback((path) => localize(path, lang), [lang]);

  return { t, lang, dir: dirFor(lang), localizePath };
};
