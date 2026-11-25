import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";
import SolarPanelImage from "../../assets/images/Solar.png";
import SolarInverter from "../../assets/images/Inverter.png";
import SolarEPC from "../../assets/images/epc.png";
import bipv from "../../assets/images/BIPV.png";
import SEOHead from "../SEOHead";
import Breadcrumbs from "../Breadcrumbs";
import { moduleEfficiencyRange } from "@/core/constants/products";
import { SITE_URL } from "@/i18n/routing";
import { categoryListNode } from "@/seo/structuredData";
import { useLanguage } from "@/i18n/useLanguage";

// Product range. Images are 3:2 (1536 x 1024 px) and fill the card frame.
// Products without a page yet are shown as "Coming Soon" and are not links.
const PRODUCT_RANGE = [
  {
    title: "High-Efficiency PV Modules",
    image: SolarPanelImage,
    path: "/products/solar-panels",
    description:
      "High-efficiency N-Type TOPCon solar modules with premium glass-glass design and 30-year warranty",
    features: [["{range}% Efficiency", { range: moduleEfficiencyRange }], ["Bifacial Technology"], ["Monofacial technology"]],
  },
  {
    title: "Building Integrated Photo-voltaic",
    image: bipv,
    path: "/products/bipv-products",
    description:
      "Innovative BIPV systems that integrate solar photovoltaic technology into building structures, enabling efficient power generation while maintaining architectural aesthetics",
    features: [
      ["Fully Customizable"],
      ["Ideal for windows, skylights, façades, cladding, roof tiles, and display/signboard BIPV applications."],
    ],
  },
  {
    title: "Solar Inverters",
    image: SolarInverter,
    comingSoon: true,
    description: "Advanced string inverters with maximum power point tracking and smart monitoring capabilities",
    features: [["99.5% Peak Efficiency"], ["Smart Monitoring"]],
  },
  {
    title: "EPC Solution",
    image: SolarEPC,
    comingSoon: true,
    description: "Complete Engineering, Procurement & Construction services for large-scale solar installations",
    features: [["Turnkey Solutions"], ["Project Management"]],
  },
];

const BREADCRUMBS = [
  ["Home", "/"],
  ["Products", "/products"],
];

const MainProductsPage = () => {
  const { t, localizePath } = useLanguage();
  const available = PRODUCT_RANGE.filter((product) => !product.comingSoon);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOHead
        title="Products | Bronze Solar - Solar Panels, Inverters & BIPV Solutions"
        description="Explore Bronze Solar's product range: High-efficiency PV modules (N-type TOPCon, HJT), Building Integrated Photovoltaic (BIPV), Solar Inverters, and EPC solutions."
        keywords="solar products, PV modules, solar inverters, BIPV products, solar solutions UAE, photovoltaic panels"
        ogImage="https://bronzesolar.com/Croppedlogo.png"
        pageType="CollectionPage"
        breadcrumbs={BREADCRUMBS}
        jsonLd={[
          categoryListNode({
            url: SITE_URL + localizePath("/products"),
            items: available.map((product) => [t(product.title), SITE_URL + localizePath(product.path)]),
          }),
        ]}
      />
      <Header page="products" />

      <main className="container mx-auto px-4 pt-10 pb-16">
        <Breadcrumbs items={BREADCRUMBS} />
        {/* Page title for search engines and screen readers; the breadcrumb is the visible header */}
        <h1 className="sr-only">{t("Products")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PRODUCT_RANGE.map((product, index) => {
            const content = (
              <>
                <div className="relative aspect-[3/2] shrink-0 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={t(product.title)}
                    width="1536"
                    height="1024"
                    loading={index < 2 ? "eager" : "lazy"}
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${
                      product.comingSoon ? "grayscale-[35%]" : "group-hover:scale-105"
                    }`}
                  />
                  <span
                    className={`absolute top-3 end-3 rounded-full px-2 py-1 text-xs font-semibold shadow-md ${
                      product.comingSoon ? "bg-white/90 text-gray-700" : "bg-primary text-white"
                    }`}
                  >
                    {product.comingSoon ? t("Coming Soon") : t("Premium")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h2
                    className={`mb-2 text-base font-bold transition-colors ${
                      product.comingSoon ? "text-gray-700" : "text-gray-800 group-hover:text-secondary"
                    }`}
                  >
                    {t(product.title)}
                  </h2>
                  <p className="mb-3 text-sm leading-relaxed text-gray-600">{t(product.description)}</p>
                  <ul className="mb-4 space-y-1.5">
                    {product.features.map(([text, vars]) => (
                      <li key={text} className="flex items-start gap-2 text-xs text-gray-700">
                        <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {t(text, vars)}
                      </li>
                    ))}
                  </ul>

                  {!product.comingSoon && (
                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
                      <span className="text-xs font-semibold text-secondary">{t("Explore Products")}</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-white transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                        <ArrowRight size={14} aria-hidden="true" className="rtl:-scale-x-100" />
                      </span>
                    </div>
                  )}
                </div>
              </>
            );

            const cardClass = "group flex flex-col overflow-hidden rounded-xl bg-white shadow-md";
            return product.comingSoon ? (
              <div key={product.title} className={cardClass}>
                {content}
              </div>
            ) : (
              <Link
                key={product.title}
                to={localizePath(product.path)}
                className={`${cardClass} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                {content}
              </Link>
            );
          })}
        </div>

        {/* Help choosing */}
        <section className="mt-8 rounded-xl bg-white p-6 text-center shadow-md">
          <h2 className="mb-2 text-lg font-bold text-gray-800">{t("Need Help Choosing the Right Solution?")}</h2>
          <p className="mx-auto mb-4 max-w-2xl text-sm text-gray-600">
            {t("Our expert team is here to help you find the perfect solar solution for your specific needs and requirements.")}
          </p>
          <Link
            to={localizePath("/contact")}
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary/90"
          >
            <MessageCircle size={16} aria-hidden="true" />
            {t("Contact Our Experts")}
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MainProductsPage;
