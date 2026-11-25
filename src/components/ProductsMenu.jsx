import { useEffect, useId, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";
import { moduleFamilies } from "@/core/constants/products";
import { BIPV_PRODUCTS, PV_PRODUCTS, productPath } from "@/core/constants/productCatalog";

// Headline PV figures, from the datasheet data
const pvModels = Object.values(moduleFamilies).flatMap((family) => family.models);
const pvNumbers = (key) => pvModels.flatMap((model) => model[key].split(" to ").map(Number));
const PV_FIGURES = {
  min: Math.min(...pvNumbers("wattage")),
  max: Math.max(...pvNumbers("wattage")),
  efficiency: Math.max(...pvNumbers("efficiency")).toFixed(2),
};

// Product lines (left column). Lines without a page yet are shown as "Coming Soon".
const LINES = [
  {
    title: "High-Efficiency PV Modules",
    path: "/products/solar-panels",
    description: ["N-type TOPCon modules, {min}–{max} Wp, up to {efficiency}% efficiency", PV_FIGURES],
  },
  {
    title: "Building Integrated Photo-voltaic",
    path: "/products/bipv-products",
    description: ["Semi-transparent glass, coloured panels, solar roof tiles and custom printed glass"],
  },
  { title: "Solar Inverters", description: ["String inverters with smart monitoring"] },
  { title: "EPC Solution", description: ["Engineering, procurement and construction for solar projects"] },
];

// Featured products (right column): a flagship PV module and a BIPV panel
const toRange = (value) => value.replace("-", "–");
const FEATURED = [
  { product: PV_PRODUCTS[0], label: (t, p) => t(p.type), figures: (t, p) => [toRange(p.wattage), toRange(p.efficiency)] },
  { product: BIPV_PRODUCTS[1], label: () => "BIPV", figures: (t, p) => [t(p.wattage), p.efficiency] },
];

// Desktop "Products" nav item with a mega menu: opens on hover (mouse), on the
// chevron button (keyboard / touch), and closes on Escape, outside click,
// leaving it, or navigating. "Products" itself stays a normal link.
const ProductsMenu = ({ linkClassName }) => {
  const { t, localizePath } = useLanguage();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const closeTimer = useRef(undefined);
  const panelId = useId();

  const cancelClose = () => clearTimeout(closeTimer.current);
  // Short delay so moving the pointer from "Products" down into the panel doesn't close it
  const closeSoon = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => cancelClose, []);
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      wrapperRef.current?.querySelector("button")?.focus();
    };
    const onPointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="flex items-center gap-1"
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse") return;
        cancelClose();
        setOpen(true);
      }}
      onPointerLeave={(event) => event.pointerType === "mouse" && closeSoon()}
      onBlur={(event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <Link to={localizePath("/products")} className={linkClassName}>
        {t("Products")}
      </Link>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={t("Show products menu")}
        onClick={() => setOpen((value) => !value)}
        className={`${linkClassName} rounded p-0.5`}
      >
        <ChevronDown size={16} aria-hidden="true" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <MotionConfig reducedMotion="user">
        <AnimatePresence>
          {open && (
            <motion.div
              id={panelId}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-x-0 top-full border-t border-gray-100 bg-white shadow-lg"
              onClick={(event) => event.target.closest("a") && setOpen(false)}
            >
              <div className="container mx-auto grid gap-10 px-4 py-8 md:px-6 lg:grid-cols-2">
                {/* Product lines */}
                <div>
                  <p className="mb-4 text-xs font-medium text-gray-500">{t("Products")}</p>
                  <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                    {LINES.map(({ title, path, description: [text, vars] }) => (
                      <li key={title}>
                        {path ? (
                          <Link to={localizePath(path)} className="group block rounded-xl p-3 transition-colors hover:bg-gray-50">
                            <span className="block text-base font-semibold text-gray-900 transition-colors group-hover:text-secondary">{t(title)}</span>
                            <span className="mt-1 block text-sm text-gray-500">{t(text, vars)}</span>
                          </Link>
                        ) : (
                          <div className="p-3">
                            <span className="flex items-center gap-2 text-base font-semibold text-gray-500">
                              {t(title)}
                              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-600">{t("Coming Soon")}</span>
                            </span>
                            <span className="mt-1 block text-sm text-gray-400">{t(text, vars)}</span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={localizePath("/products")}
                    className="group mt-4 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 transition-colors hover:border-secondary/40 hover:text-secondary"
                  >
                    {t("View all products")}
                    <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </Link>
                </div>

                {/* Featured products */}
                <div className="hidden border-gray-100 lg:block lg:border-s lg:ps-10">
                  <p className="mb-4 text-xs font-medium text-gray-500">{t("Featured")}</p>
                  <ul className="grid grid-cols-2 gap-6">
                    {FEATURED.map(({ product, label, figures }) => (
                      <li key={product.slug}>
                        <Link to={localizePath(productPath(product))} className="group block">
                          <span className="relative block aspect-[3/2] overflow-hidden rounded-xl bg-gradient-to-b from-slate-50 to-[#e7eef6] ring-1 ring-slate-100">
                            <img
                              src={product.image}
                              alt=""
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                            />
                          </span>
                          <span className="mt-3 block text-xs text-gray-500">{label(t, product)}</span>
                          <span className="mt-0.5 block text-base font-semibold text-gray-900 transition-colors group-hover:text-secondary">
                            {t(product.title)}
                          </span>
                          <span className="mt-1 flex gap-2 text-sm text-gray-500">
                            {figures(t, product).map((figure, index) => (
                              <span key={figure} className="flex gap-2">
                                {index > 0 && <span aria-hidden="true">·</span>}
                                <bdi>{figure}</bdi>
                              </span>
                            ))}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
};

ProductsMenu.propTypes = {
  linkClassName: PropTypes.string.isRequired,
};

export default ProductsMenu;
