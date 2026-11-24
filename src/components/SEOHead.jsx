import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/useLanguage";
import { HeadContext } from "@/seo/HeadContext";
import { applyHead, buildHead } from "@/seo/head";

// Title, description, social tags, canonical URL, hreflang alternates and
// JSON-LD for the current page, in the page's language.
//
//   breadcrumbs: [["Home", "/"], ["Products", "/products"]]  (English labels, translated here)
//   jsonLd:      extra schema.org nodes for this page (see src/seo/structuredData.js)
const SEOHead = (props) => {
  const { t, lang } = useLanguage();
  const { pathname } = useLocation();
  const collector = useContext(HeadContext);

  const head = buildHead({ ...props, t, lang, pathname });
  if (collector) collector.head = head; // pre-rendering at build time

  const serialized = JSON.stringify(head);
  useEffect(() => {
    applyHead(JSON.parse(serialized));
  }, [serialized]);

  return null;
};

SEOHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  noindex: PropTypes.bool,
  pageType: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  jsonLd: PropTypes.arrayOf(PropTypes.object),
};

export default SEOHead;
