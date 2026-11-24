import { useEffect, useLayoutEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import i18n from "./index";
import { dirFor } from "./routing";

// useLayoutEffect warns during server rendering; it only matters in the browser.
const useBrowserLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

// Wraps every page of one language: keeps i18next and <html lang/dir> in step
// with the URL before the browser paints.
export const LocaleLayout = ({ lang }) => {
  useBrowserLayoutEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dirFor(lang);
    if (i18n.resolvedLanguage !== lang) i18n.changeLanguage(lang);
  }, [lang]);

  return <Outlet />;
};

LocaleLayout.propTypes = {
  lang: PropTypes.string.isRequired,
};

// English has no prefix: send /en/... to the canonical unprefixed URL.
export const DefaultLanguageRedirect = () => {
  const { pathname, search, hash } = useLocation();
  const target = (pathname.replace(/^\/en(?=\/|$)/, "") || "/") + search + hash;
  return <Navigate to={target} replace />;
};
