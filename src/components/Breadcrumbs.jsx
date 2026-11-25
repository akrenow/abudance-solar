import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

// Visible breadcrumb trail. Items are [English label, path]; the last item is
// the current page. Pass the same items to <SEOHead breadcrumbs> so the
// structured data matches what visitors see.
const Breadcrumbs = ({ items, className = "mb-6" }) => {
  const { t, localizePath } = useLanguage();

  return (
    <nav aria-label={t("Breadcrumb")} className={`text-sm text-gray-500 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map(([label, href], index) => (
          <li key={href} className="flex items-center gap-1">
            {index > 0 && <ChevronRight size={14} aria-hidden="true" className="rtl:-scale-x-100" />}
            {index < items.length - 1 ? (
              <Link to={localizePath(href)} className="hover:text-primary transition-colors">
                {t(label)}
              </Link>
            ) : (
              <span aria-current="page" className="text-gray-800 font-medium">
                {t(label)}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  className: PropTypes.string,
};

export default Breadcrumbs;
