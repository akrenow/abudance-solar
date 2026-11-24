import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { ChevronRight, Download, Eye } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";
import SEOHead from "../SEOHead";
import PageNotFound from "../PageNotFound";
import { useLanguage } from "@/i18n/useLanguage";
import { SITE_URL } from "@/i18n/routing";
import { formatDimensions, formatRange } from "@/core/constants/products";
import {
  BIPV_PRODUCTS,
  BIPV_PRODUCTS_PATH,
  PV_PRODUCTS,
  PV_PRODUCTS_PATH,
  productPath,
} from "@/core/constants/productCatalog";
import { bipvProductNode, moduleFamilyNode } from "@/seo/structuredData";

const RANGES = {
  pv: { products: PV_PRODUCTS, path: PV_PRODUCTS_PATH, label: "High-Efficiency PV Modules", cellTechnology: "N-type TOPCon" },
  bipv: { products: BIPV_PRODUCTS, path: BIPV_PRODUCTS_PATH, label: "Building Integrated Photo-voltaic", cellTechnology: "TOPCon" },
};

// One product (a PV module family or a BIPV product) with its full
// specifications, so every model is visible as text to search and AI crawlers.
const ProductDetailPage = ({ kind }) => {
  const { slug } = useParams();
  const { t, localizePath } = useLanguage();
  const range = RANGES[kind];
  const product = range.products.find((item) => item.slug === slug);
  if (!product) return <PageNotFound />;

  const path = productPath(product);
  const isPv = kind === "pv";
  const showProductType = product.models.some((model) => model.productType);
  const others = range.products.filter((item) => item !== product);
  const breadcrumbs = [
    ["Home", "/"],
    ["Products", "/products"],
    [range.label, range.path],
    [product.title, path],
  ];
  const facts = [
    [t("Rated power"), isPv ? product.wattage : t(product.wattage)],
    [t("Module efficiency"), product.efficiency],
    [t("Cell technology"), range.cellTechnology],
    [t("Available Models"), String(product.models.length)],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOHead
        title="{product} | Bronze Solar"
        titleVars={{ product: t(product.title) }}
        description={product.description}
        ogImage="https://bronzesolar.com/Croppedlogo.png"
        pageType="ItemPage"
        breadcrumbs={breadcrumbs}
        jsonLd={[
          (isPv ? moduleFamilyNode : bipvProductNode)({ t, url: SITE_URL + localizePath(path), product }),
        ]}
      />
      <Header page="products" />

      <main className="container mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav aria-label={t("Breadcrumb")} className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-1">
            {breadcrumbs.map(([label, href], index) => (
              <li key={href} className="flex items-center gap-1">
                {index > 0 && <ChevronRight size={14} aria-hidden="true" className="rtl:-scale-x-100" />}
                {index < breadcrumbs.length - 1 ? (
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

        {/* Overview */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 grid md:grid-cols-2 gap-10 mb-10">
          <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center">
            <img src={product.image} alt={t(product.title)} className="w-full max-h-96 object-contain" />
          </div>
          <div>
            {isPv && (
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/30">
                  {t(product.type)}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                  {t(product.category)}
                </span>
              </div>
            )}
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{t(product.title)}</h1>
            <p className="text-gray-600 leading-relaxed mb-6">{t(product.description)}</p>

            <dl className="grid grid-cols-2 gap-3 mb-6">
              {facts.map(([label, value]) => (
                <div key={label} className="bg-gray-50 rounded-xl p-3">
                  <dt className="text-xs text-gray-500">{label}</dt>
                  <dd className="text-base font-bold text-gray-800">
                    <bdi>{value}</bdi>
                  </dd>
                </div>
              ))}
            </dl>

            <h2 className="text-lg font-semibold text-gray-800 mb-3">{t("Key Features")}</h2>
            <ul className="space-y-2 mb-6">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start text-sm text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full me-3 mt-1.5 shrink-0" />
                  {t(feature)}
                </li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold text-gray-800 mb-3">{t("Applications")}</h2>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((application) => (
                <span key={application} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {t(application)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Specifications */}
        <section className="bg-white rounded-3xl shadow-lg p-6 md:p-10 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t("Specifications")}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-amber-50 to-orange-50">
                  <th className="border border-gray-200 px-4 py-3 text-start font-semibold text-gray-800">{t("Model Name")}</th>
                  {showProductType && (
                    <th className="border border-gray-200 px-4 py-3 text-start font-semibold text-gray-800">{t("Product Type")}</th>
                  )}
                  <th className="border border-gray-200 px-4 py-3 text-start font-semibold text-gray-800">{t("Wattage (WP)")}</th>
                  <th className="border border-gray-200 px-4 py-3 text-start font-semibold text-gray-800">{t("Efficiency (%)")}</th>
                  <th className="border border-gray-200 px-4 py-3 text-start font-semibold text-gray-800">{t("Dimensions")}</th>
                  <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-800">{t("Datasheet")}</th>
                </tr>
              </thead>
              <tbody>
                {product.models.map((model) => (
                  <tr key={model.name} className="hover:bg-gray-50 transition-colors">
                    <th scope="row" className="border border-gray-200 px-4 py-3 text-start font-medium text-gray-800">
                      {model.name}
                    </th>
                    {showProductType && (
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">{model.productType}</td>
                    )}
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">
                      {isPv ? formatRange(model.wattage) : model.wattage}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">
                      {isPv ? formatRange(model.efficiency) : t(model.efficiency)}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-600">
                      {formatDimensions(t, model.dimensions)}
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <a
                          href={model.pdfFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-xs font-medium hover:brightness-110"
                          style={{ backgroundColor: "#4B2354" }}
                          title={t("View {name} datasheet", { name: model.name })}
                        >
                          <Eye size={14} aria-hidden="true" />
                          {t("View")}
                        </a>
                        <a
                          href={model.pdfFile}
                          download={`${model.name}-datasheet.pdf`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium"
                          title={t("Download {name} datasheet", { name: model.name })}
                        >
                          <Download size={14} aria-hidden="true" />
                          {t("Download")}
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center bg-white rounded-3xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{t("Need Technical Specifications?")}</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t("Get detailed technical documentation and customized solutions for your specific project requirements.")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to={localizePath("/contact")}
              className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-2xl font-semibold transition-colors"
            >
              {t("Contact Technical Team")}
            </Link>
            <Link
              to={localizePath("/downloads")}
              className="inline-flex items-center border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-2xl font-semibold transition-colors"
            >
              {t("Downloads")}
            </Link>
          </div>
        </section>

        {/* Other products in the same range */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{t("Other products in this range")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {others.map((item) => (
              <Link
                key={item.slug}
                to={localizePath(productPath(item))}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4"
              >
                <div className="h-36 bg-gray-50 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                  <img src={item.image} alt={t(item.title)} className="h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">{t(item.title)}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  <bdi>{isPv ? item.wattage : t(item.wattage)}</bdi> · <bdi>{item.efficiency}</bdi>
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

ProductDetailPage.propTypes = {
  kind: PropTypes.oneOf(["pv", "bipv"]).isRequired,
};

export default ProductDetailPage;
