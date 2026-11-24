import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Download, Info, Zap, Sun, Eye } from "lucide-react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
import SEOHead from "../SEOHead";
import { SITE_URL } from "@/i18n/routing";
import { bipvProductNode } from "@/seo/structuredData";
import { useLanguage } from "@/i18n/useLanguage";

import { bipvDatasheets } from "@/core/constants/products";

// Import local images for each product
import SemiTransparentBIPVGlassPanels from "../../assets/Bipvsubproducts/Picture1.png";
import ColoredBIPVPanel from "../../assets/Bipvsubproducts/Picture2.jpg";
import SolarRoofTiles  from "../../assets/Bipvsubproducts/Picture3.png";
import CustomPrintedFrontGlassBIPVPanels  from "../../assets/Bipvsubproducts/Picture3.jpg";


const categories = {
  "BIPV": [
    {
      title: "Semi-Transparent BIPV Glass Panels",
    //   category: "Bifacial",
      image: SemiTransparentBIPVGlassPanels,
      path: "/products/solar-panels",
      wattage: "100 to 300W",
      efficiency: "12.48%",
    //   type: "Bifacial N-Type",
      description:
        "Semi-transparent BIPV (Building-Integrated Photovoltaic) glass panels are advanced solar solutions that generate electricity while allowing natural light to pass through.",
      features: [
       "~50% visible light transparency (cells cover ~50% of area)",
       "Customized size options.",
       "Typical power output: 100–300 W/m²",
       "Ideal for: Windows, skylights, curtain walls, atriums — balances daylight and power generation.",

      ],
      applications: ["Residential", "Commercial", "Off-Grid", ],
      models: [
        {
          name: "ABS-Semi-Transparent BIPV Glass Panel",
          productType: "",
          wattage: "270W",
          efficiency: "Module Efficiency of 12.48 %",
          pdfFile: bipvDatasheets.semiTransparent,
          dimensions: "1908 mm x 1134 mm x 30 mm (Size can be Customized)",
        },
        
      ],
    },
     {
      title: "Colored BIPV Panels (Front Colored Glass)",
    //   category: "Bifacial",
      image: ColoredBIPVPanel,
      path: "/products/solar-panels",
      wattage: "Up to 520W",
      efficiency: "23.59%",
    //   type: "Bifacial N-Type",
      description:
        "Coloured BIPV (Building-Integrated Photovoltaic) panels with front coloured glass are aesthetically enhanced solar modules designed to blend seamlessly with modern architectural designs while generating clean electricity.",
      features: [
        "Customized colour and size options.",
        "Typical power output: Up to 520 W/m²",
        "Ideal for: facades, cladding, curtain walls, and decorative building elements.",
      ],
      applications: ["Residential", "Commercial", "Off-Grid", ],
      models: [
        {
          name: "ABS-Colored BIPV Panel (Option 1)",
          productType: "",
          wattage: "520W",
          efficiency: "Module Efficiency of 23.59 %",
          pdfFile: bipvDatasheets.colored,
          dimensions: "1954 mm x 1128 mm x 7.5 mm (Size can be Customized)",
        },
        {
          name: "ABS-Colored BIPV Panel (Option 2)",
          productType: "",
          wattage: "460W",
          efficiency: "Module Efficiency of 23.22 %",
          pdfFile: bipvDatasheets.colored,
          dimensions: "1756 mm x 1128 mm x 7.5 mm (Size can be Customized)",
        },
        
      ],
    },
     {
      title: "Solar Roof Tiles (BIPV Tiles)",
    //   category: "Bifacial",
      image: SolarRoofTiles,
      path: "/products/solar-panels",
      wattage: "70-150W",
      efficiency: "20.66%",
    //   type: "Bifacial N-Type",
      description:
"Solar roof tiles (BIPV tiles) are integrated photovoltaic roofing products that function as both durable roof coverings and solar power generators.",

      features: [
       "Customized colour and size options.",
       "Typical power output: 70 to 150 W/m²",
       "Ideal for: Residential homes, villas, heritage buildings, and premium architectural projects.",

      ],
      applications: ["Residential", "Commercial", "Off-Grid", ],
      models: [
        {
          name: "ABS-Solar Roof Tile",
          productType: "Anodized Aluminum Alloy 6005T6",
          wattage: "105W",
          efficiency: "Module Efficiency of 20.66 %",
          pdfFile: bipvDatasheets.roofTile,
          dimensions: "1210 mm x 420 mm x 7.5 mm (Size can be Customized)",
        },
        
      ],
    },
     {
      title: "Custom Printed Front-Glass BIPV Panels",
    //   category: "Bifacial",
      image:CustomPrintedFrontGlassBIPVPanels,
      path: "/products/solar-panels",
      wattage: "100 to 640W",
      efficiency: "23.88%",
    //   type: "Bifacial N-Type",
      description:
"Custom printed front-glass BIPV (Building-Integrated Photovoltaic) panels are innovative solar modules featuring digitally printed or patterned glass surfaces that combine renewable energy generation with unique architectural design.",
      features: [
      "Customized colour and size options.",
      "Typical power output: 100 to 640 W/m²",
      "Ideal for: facades, skylights, canopies, and decorative building applications.",

      ],
      applications: ["Residential", "Commercial", "Off-Grid", ],
      models: [
        {
          name: "ABS-Custom Printed Front-Glass BIPV Panel",
          productType: "",
          wattage: "640W",
          efficiency: "Module Efficiency of 23.88 %",
          pdfFile: bipvDatasheets.customPrinted,
          dimensions: "2376 mm x 1128 mm x 7.5 mm (Size can be Customized)",
        },
        
      ],
    },
    
  ],
  
};

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

  const PerformanceChart = ({ efficiency, wattage }) => (
    <div className="relative h-20 sm:h-24 w-full overflow-auto rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 px-2">
        <div className="flex justify-between items-end h-full">
          <div className="flex-1 space-y-1 sm:space-y-2">
            <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              {t("Efficiency")}
            </div>
            <div
              className="h-6 sm:h-8 bg-gradient-to-t from-primary to-primary/90 rounded-lg relative overflow-hidden transition-all duration-1000"
              style={{ width: `${parseFloat(efficiency) * 4}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30"></div>
            </div>
            <div className="text-sm sm:text-base font-bold text-gray-800">
              {efficiency}
            </div>
          </div>
          <div className="flex-1 space-y-1 sm:space-y-2 ms-4">
            <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              {t("MAX POWER")}
            </div>
            <div
              className="h-6 sm:h-8 bg-gradient-to-t from-slate-600 to-slate-500 rounded-lg relative overflow-hidden transition-all duration-1000"
              style={{ width: `${parseInt(wattage) / 10}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30"></div>
            </div>
            <div className="text-sm sm:text-base font-bold text-gray-800">
              {wattage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  PerformanceChart.propTypes = {
    efficiency: PropTypes.string.isRequired,
    wattage: PropTypes.string.isRequired,
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
          bipvProductNode({ t, url: SITE_URL + localizePath("/products/bipv-products"), product })
        )}
      />
      {/* Header */}
      <Header page="products" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-20 ">
        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {/* {Object.keys(categories).map((cat) => (
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
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[activeTab].map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={t(product.title)}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
                {/* Category Badge */}
                {/* <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {product.category}
                </div> */}
              </div>

              {/* Product Content */}
              <div className="p-6">
                {/* Type Badge */}
                {/* <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary/10 to-primary/20 text-primary rounded-full text-xs font-semibold mb-3 border border-primary/30">
                  {product.type}
                </div> */}

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                  {t(product.title)}
                </h3>

                {/* Performance Chart */}
                <div className="mb-4">
                  <PerformanceChart
                    efficiency={product.efficiency}
                    wattage={product.models[0].wattage}
                  />
                </div>

                {/* Quick Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <Zap size={16} className="text-primary me-2" />
                    <span>{t("Fully customizable upon request")}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Sun size={16} className="text-primary me-2" />
                    <span>{t("{value} Power Output", { value: t(product.wattage) })}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => openProductPopup(product)}
                    className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Info size={16} />
                    {t("Details")}
                  </button>
                </div>
              </div>
            </div>
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
            className="inline-flex items-center bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                  <PerformanceChart
                    efficiency={
                      selectedProduct.efficiency
                    }
                    wattage={selectedProduct.models[0].wattage}
                  />
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
