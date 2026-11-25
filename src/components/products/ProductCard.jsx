import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Info } from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

const BADGE = "rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-blue-200/70";

// The two headline figures side by side (used on the card and in the quick-view popup)
export const KeyFigures = ({ efficiency, maxPower, className = "" }) => {
  const { t } = useLanguage();
  return (
    <dl className={`grid grid-cols-2 rounded-2xl bg-gray-50 py-3 ${className}`}>
      <div className="px-5">
        <dt className="text-sm text-gray-500">{t("Efficiency")}</dt>
        <dd className="text-2xl font-bold text-gray-900">
          <bdi>{efficiency}</bdi>
        </dd>
      </div>
      <div className="border-s border-gray-200 px-5">
        <dt className="text-sm text-gray-500">{t("Max Power")}</dt>
        <dd className="text-2xl font-bold text-gray-900">
          <bdi>{maxPower}</bdi>
        </dd>
      </div>
    </dl>
  );
};

KeyFigures.propTypes = {
  efficiency: PropTypes.string.isRequired,
  maxPower: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// Product card for the Solar Panels and BIPV listings: product shot on a soft
// backdrop, type badges, the two key figures side by side, highlight lines,
// and two actions (quick-view popup, specification page).
const ProductCard = ({ image, title, categoryBadge, typeBadge, efficiency, maxPower, highlights, href, onDetails }) => {
  const { t } = useLanguage();

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/70 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product shot */}
      <div className="relative h-64 shrink-0 overflow-hidden bg-gradient-to-b from-slate-50 to-[#e7eef6]">
        <svg
          aria-hidden="true"
          viewBox="0 0 400 120"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-32 w-full"
        >
          <path d="M0 64 C 90 24 180 28 260 56 S 360 92 400 58 V120 H0 Z" fill="#fff" fillOpacity="0.45" />
          <path d="M0 96 C 120 62 230 112 400 82 V120 H0 Z" fill="#fff" fillOpacity="0.7" />
        </svg>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain p-6 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
        {categoryBadge && <span className={`absolute top-4 end-4 ${BADGE}`}>{categoryBadge}</span>}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {typeBadge && <span className={`mb-2 w-fit ${BADGE}`}>{typeBadge}</span>}
        <h3 className="mb-4 text-xl font-bold text-gray-900">{title}</h3>

        <KeyFigures efficiency={efficiency} maxPower={maxPower} className="mb-4" />

        <ul className="mb-6 space-y-2">
          {highlights.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 text-gray-700">
              <Icon size={18} aria-hidden="true" className="shrink-0 text-slate-600" />
              {text}
            </li>
          ))}
        </ul>

        {/* Actions: side by side, stacked full-width on the narrowest phones */}
        <div className="mt-auto flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onDetails}
            className="inline-flex grow items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-secondary/90"
          >
            <Info size={16} aria-hidden="true" />
            {t("Details")}
          </button>
          <Link
            to={href}
            className="inline-flex grow basis-[10.5rem] items-center justify-center rounded-xl border-2 border-secondary px-3 py-2 text-center text-[15px] font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white"
          >
            {t("View specifications")}
          </Link>
        </div>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categoryBadge: PropTypes.string,
  typeBadge: PropTypes.string,
  efficiency: PropTypes.string.isRequired,
  maxPower: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(
    PropTypes.shape({ icon: PropTypes.elementType.isRequired, text: PropTypes.string.isRequired })
  ).isRequired,
  href: PropTypes.string.isRequired,
  onDetails: PropTypes.func.isRequired,
};

export default ProductCard;
