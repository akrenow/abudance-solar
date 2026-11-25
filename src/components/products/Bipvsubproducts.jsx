import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Download, Zap, Sun, Eye } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";
import SEOHead from "../SEOHead";
import { SITE_URL } from "@/i18n/routing";
import { categoryListNode } from "@/seo/structuredData";
import Breadcrumbs from "../Breadcrumbs";
import ProductCard, { KeyFigures } from "./ProductCard";
import { useLanguage } from "@/i18n/useLanguage";

import { BIPV_PRODUCTS, productPath } from "@/core/constants/productCatalog";
const categories = {
  BIPV: BIPV_PRODUCTS,
  
};

// Highest rated power among the product's models, e.g. "520W"
const maxPowerOf = (product) => `${Math.max(...product.models.map((model) => parseFloat(model.wattage)))}W`;

const Bipvpage = () => {
  const { t, localizePath } = useLanguage();
  const [activeTab, setActiveTab] = useState("BIPV");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openProductPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };

  const handleDownload = (file, fileName) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOHead
        title="BIPV Products | Bronze Solar - Building-Integrated Photovoltaics"
        description="Bronze Solar BIPV products: semi-transparent glass panels, coloured front-glass panels, solar roof tiles and custom printed front-glass panels, customizable in size and colour. Specifications and datasheets."
        keywords="BIPV, building integrated photovoltaics, solar glass, semi-transparent solar panels, coloured solar panels, solar roof tiles, solar facade UAE"
        ogImage="https://bronzesolar.com/Croppedlogo.png"
        pageType="CollectionPage"
        breadcrumbs={[["Home", "/"], ["Products", "/products"], ["Building Integrated Photo-voltaic", "/products/bipv-products"]]}
        jsonLd={categories.BIPV.map((product) =>
          categoryListNode({ url: SITE_URL + localizePath("/products/bipv-products"), items: [[t(product.title), SITE_URL + localizePath(productPath(product))]] })
        )}
      />
      {/* Header */}
      <Header page="products" />

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-10 pb-16 relative z-20">
        <Breadcrumbs items={[["Home", "/"], ["Products", "/products"], ["Building Integrated Photo-voltaic", "/products/bipv-products"]]} />
        {/* Page title for search engines and screen readers; the breadcrumb is the visible header */}
        <h1 className="sr-only">{t("Building Integrated Photo-voltaic")}</h1>
        {/* Technology Tabs (single category for now)
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
              }`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))} */}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories[activeTab].map((product) => (
            <ProductCard
              key={product.slug}
              image={product.image}
              title={t(product.title)}
              efficiency={product.efficiency}
              maxPower={maxPowerOf(product)}
              highlights={[
                { icon: Zap, text: t("Fully customizable upon request") },
                { icon: Sun, text: t("{value} Power Output", { value: t(product.wattage) }) },
              ]}
              href={localizePath(productPath(product))}
              onDetails={() => openProductPopup(product)}
            />
          ))}

          {/* Coming Soon Message */}
          {categories[activeTab].length === 0 && (
            <div className="col-span-full text-center py-16">
              <div className="bg-white rounded-3xl p-12 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {t("Coming Soon")}
                </h3>
                <p className="text-gray-600">
                  {t("Next-generation")}{" "}
                  <span className="font-semibold text-primary">
                    {t(activeTab)}
                  </span>{" "}
                  {t("modules are currently under development.")}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {t("Need Technical Specifications?")}
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("Get detailed technical documentation and customized solutions for your specific project requirements.")}
          </p>
          <Link
            to={localizePath("/contact")}
            className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-2xl font-semibold transition-colors duration-300"
          >
            {t("Contact Technical Team")}
          </Link>
        </div>
      </div>

      {/* Product Detail Popup */}
      {isPopupOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Popup Header */}
            <div className="bg-white border-b border-gray-200 p-6 rounded-t-3xl flex-shrink-0">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {t(selectedProduct.title)}
                  </h2>
                  {/* <p className="text-primary font-medium">
                    {selectedProduct.type}
                  </p> */}
                </div>
                <button
                  onClick={closePopup}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Popup Content - Scrollable */}
            <div className="p-6 overflow-y-auto flex-1">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Image and Performance */}
                <div>
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <img
                      src={selectedProduct.image}
                      alt={t(selectedProduct.title)}
                      className="w-full h-64 object-contain"
                    />
                  </div>
                  <KeyFigures efficiency={selectedProduct.efficiency} maxPower={maxPowerOf(selectedProduct)} />
                </div>

                {/* Right Column - Details */}
                <div>
                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {t("Description")}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(selectedProduct.description)}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {t("Key Features")}
                    </h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full me-3"></div>
                          {t(feature)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {t("Applications")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.applications.map((app, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {t(app)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Available Models Section */}
              {selectedProduct.models && selectedProduct.models.length > 0 && (
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {t("Available Models")}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-amber-50 to-orange-50">
                          <th className="border border-gray-200 px-4 py-3 text-start text-sm font-semibold text-gray-800">
                            {t("Model Name")}
                          </th>
                          <th className="border border-gray-200 px-4 py-3 text-start text-sm font-semibold text-gray-800">
                            {t("Product Type")}
                          </th>
                          <th className="border border-gray-200 px-4 py-3 text-start text-sm font-semibold text-gray-800">
                            {t("Wattage (WP)")}
                          </th>
                          <th className="border border-gray-200 px-4 py-3 text-start text-sm font-semibold text-gray-800">
                            {t("Efficiency (%)")}
                          </th>
                          <th className="border border-gray-200 px-4 py-3 text-start text-sm font-semibold text-gray-800">
                            {t("Dimensions")}
                          </th>
                          <th className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-800">
                            {t("View Product")}
                          </th>
                          <th className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-800">
                            {t("Download")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProduct.models.map((model, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-800">
                              {model.name}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                              {model.productType}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                              {model.wattage}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                              {t(model.efficiency)}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                              {t(model.dimensions) || "-"}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center">
                              <button
                                onClick={() =>
                                  window.open(model.pdfFile, "_blank")
                                }
                                className="inline-flex items-center justify-center w-8 h-8 text-white rounded-full transition-colors duration-200 hover:brightness-110"
                                style={{ backgroundColor: '#4B2354' }}
                                title={t("View {name} datasheet", { name: model.name })}
                              >
                                <Eye size={16} />
                              </button>
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center">
                              <button
                                onClick={() =>
                                  handleDownload(
                                    model.pdfFile,
                                    `${model.name}-datasheet.pdf`
                                  )
                                }
                                className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors duration-200"
                                title={t("Download {name} datasheet", { name: model.name })}
                              >
                                <Download size={16} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Bipvpage;
