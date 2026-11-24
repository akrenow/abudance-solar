import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";
import { LANGUAGES, LANGUAGE_NAMES, localizePath } from "@/i18n/routing";
import { LANGUAGE_FLAGS } from "@/i18n/languageFlags";

// Language dropdown: shows the current language and its flag; each option opens the same
// page in that language. Options are real links, so crawlers can follow them.
const LanguageSwitcher = ({ buttonClassName = "", align = "end" }) => {
  const { lang, t } = useLanguage();
  const { pathname, search, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const menuId = useId();
  const CurrentFlag = LANGUAGE_FLAGS[lang];

  // Close on a click outside or on Escape
  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${t("Select language")}: ${LANGUAGE_NAMES[lang]}`}
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap ${buttonClassName}`}
      >
        <CurrentFlag aria-hidden="true" className="h-[14px] w-[21px] shrink-0 rounded-[2px] ring-1 ring-black/10" />
        <span>{LANGUAGE_NAMES[lang]}</span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <ul
        id={menuId}
        className={`${open ? "block" : "hidden"} absolute ${
          align === "end" ? "end-0" : "start-0"
        } top-full mt-2 min-w-[10rem] rounded-xl bg-white py-1 shadow-lg ring-1 ring-black/5 z-50`}
      >
        {LANGUAGES.map((code) => {
          const Flag = LANGUAGE_FLAGS[code];
          return (
          <li key={code}>
            <Link
              to={localizePath(pathname + search + hash, code)}
              hrefLang={code}
              lang={code}
              aria-current={code === lang ? "true" : undefined}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between gap-4 px-4 py-2 text-sm transition-colors duration-150 hover:bg-gray-50 ${
                code === lang ? "font-semibold text-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Flag aria-hidden="true" className="h-[14px] w-[21px] shrink-0 rounded-[2px] ring-1 ring-black/10" />
                <span>{LANGUAGE_NAMES[code]}</span>
              </span>
              {code === lang && <Check size={16} aria-hidden="true" />}
            </Link>
          </li>
          );
        })}
      </ul>
    </div>
  );
};

LanguageSwitcher.propTypes = {
  buttonClassName: PropTypes.string,
  align: PropTypes.oneOf(["start", "end"]),
};

export default LanguageSwitcher;
