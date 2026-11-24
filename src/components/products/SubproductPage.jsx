import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Download, Info, Zap, Sun, Eye } from "lucide-react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";
import SEOHead from "../SEOHead";
import { SITE_URL } from "@/i18n/routing";
import { moduleFamilyNode } from "@/seo/structuredData";
import { useLanguage } from "@/i18n/useLanguage";

import { moduleFamilies } from "@/core/constants/products";

// Import local images for each product
import imgGlassGlassBifacial from "../../assets/pdf/1.Glass Glass Bifacial/image.png";
import imgGlassGlassAllBlack from "../../assets/pdf/2.Glass Glass, All black module/image.png";
import imgGlassTransparentBacksheet from "../../assets/pdf/3.Glass Transparent Backsheet/image.png";
import imgGlassWhiteBacksheet from "../../assets/pdf/4.Glass White Backsheet/image.png";
import imgGlassBlackBacksheet from "../../assets/pdf/5.Glass Black back sheet – all black Module/image.png";

const categories = {
  "N-type – Topcon": [
    {
      title: "Glass Glass Bifacial PV Module",
      category: "Bifacial",
      image: imgGlassGlassBifacial,
      path: "/products/solar-panels",
      wattage: `${moduleFamilies.glassGlassBifacial.wattageRange}W`,
      efficiency: `${moduleFamilies.glassGlassBifacial.efficiencyRange}%`,
      type: "Bifacial N-Type",
      description:
        "Premium dual-glass bifacial modules with N-Type TOPCon technology for maximum energy yield. Features superior low-light performance and excellent temperature coefficient.",
      features: [
        "Dual Glass Design for 30+ year lifespan",
        "Bifacial Output (5-30% extra energy)",
        "N-type TOPCon Cells (>23.5% efficiency)",
        "Excellent temperature performance",
        "Anti-PID technology",
        "Superior low-light performance",
      ],
      applications: ["Residential", "Commercial", "Off-Grid", ],
      models: moduleFamilies.glassGlassBifacial.models,
    },
    {
      title: "Glass Glass All Black PV Module",
      category: "Bifacial",
      image: imgGlassGlassAllBlack,
      path: "/products/solar-panels",
      wattage: `${moduleFamilies.glassGlassAllBlack.wattageRange}W`,
      efficiency: `${moduleFamilies.glassGlassAllBlack.efficiencyRange}%`,
      type: "Bifacial N-Type",
      description:
        "Aesthetically pleasing all-black design with dual glass construction. Perfect for residential and architectural applications where appearance matters.",
      features: [
        "Sleek all-black aesthetic",
        "Dual Glass Protection",
        "High efficiency in low light",
        "Perfect for residential rooftops",
        "Anti-reflective coating",
        "Enhanced durability",
      ],
      applications: ["Residential", "Commercial", "Off-Grid", ],
      models: moduleFamilies.glassGlassAllBlack.models,
    },
    {
      title: "Glass Transparent Backsheet PV Module",
      category: "Bifacial",
      image: imgGlassTransparentBacksheet,
      path: "/products/solar-panels",
      wattage: `${moduleFamilies.glassTransparentBacksheet.wattageRange}W`,
      efficiency: `${moduleFamilies.glassTransparentBacksheet.efficiencyRange}%`,
      type: "Bifacial N-Type",
      description:
        "Innovative transparent backsheet design allowing light penetration for unique architectural applications and enhanced bifacial gain.",
      features: [
        "Transparent backsheet design",
        "Enhanced bifacial gain",
        "Architectural integration",
        "Superior light transmission",
        "Weather resistant",
        "Long-term reliability",
      ],
      applications: ["Residential", "Commercial", "Off-Grid", ],
      models: moduleFamilies.glassTransparentBacksheet.models,
    },
    {
      title: "Glass White Back Sheet PV Module",
      category: "Monofacial",
      image: imgGlassWhiteBacksheet,
      path: "/products/solar-panels",
      wattage: `${moduleFamilies.glassWhiteBacksheet.wattageRange}W`,
      efficiency: `${moduleFamilies.glassWhiteBacksheet.efficiencyRange}%`,
      type: "Monofacial N-Type",
      description:
        "Cost-effective monofacial design with white backsheet for optimal heat dissipation and reliable performance in various climatic conditions.",
      features: [
        "Cost-effective solution",
        "White backsheet for heat dissipation",
        "Proven reliability",
        "Easy installation",
        "Standard grid connection",
        "Excellent price-performance ratio",
      ],
      applications: ["Residential", "Commercial", "Off-Grid", ],
      models: moduleFamilies.glassWhiteBacksheet.models,
    },
    {
      title: "Glass Black Back Sheet – All Black PV Module",
      category: "Monofacial",
      image: imgGlassBlackBacksheet,
      path: "/products/solar-panels",
      wattage: `${moduleFamilies.glassBlackBacksheet.wattageRange}W`,
      efficiency: `${moduleFamilies.glassBlackBacksheet.efficiencyRange}%`,
      type: "Monofacial N-Type",
      description:
        "Premium all-black monofacial design combining aesthetic appeal with high performance. Ideal for residential and commercial applications.",
      features: [
        "Premium all-black design",
        "High aesthetic appeal",
        "Reliable performance",
        "Easy maintenance",
        "Weather resistant frame",
        "25-year performance warranty",
      ],
      applications: ["Residential", "Commercial", "Off-Grid", ],
      models: moduleFamilies.glassBlackBacksheet.models,
    },
  ],
  "Heterojunction Technology": [
    // {
    //   title: "HJT Bifacial Solar Panel",
    //   category: "Bifacial",
    //   image:
    //     "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   path: "/products/solar-panels",
    //   wattage: "670-695W",
    //   efficiency: "23.5-24.2%",
    //   type: "Bifacial HJT",
    //   description:
    //     "Next-generation Heterojunction Technology combining silicon heterojunction cells with bifacial design for unprecedented efficiency and power output.",
    //   features: [
    //     "Industry-leading 24%+ efficiency",
    //     "Superior temperature coefficient",
    //     "Excellent low-light performance",
    //     "Reduced degradation rate",
    //     "Advanced cell architecture",
    //     "Premium build quality",
    //   ],
    //   applications: [
    //     "Premium residential",
    //     "High-efficiency commercial",
    //     "Space-constrained installations",
    //   ],
    //   certifications: ["IEC 61215", "IEC 61730", "CE", "TUV", "UL"],
    // },
    // {
    //   title: "HJT Glass-Glass Module",
    //   category: "Bifacial",
    //   image:
    //     "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   path: "/products/solar-panels",
    //   wattage: "650-675W",
    //   efficiency: "23.2-23.8%",
    //   type: "Bifacial HJT",
    //   description:
    //     "Dual-glass construction with heterojunction technology offering maximum durability and performance in harsh environmental conditions.",
    //   features: [
    //     "Dual-glass protection",
    //     "Fire-resistant design",
    //     "Zero-PID susceptibility",
    //     "35+ year lifespan",
    //     "Weather-resistant frame",
    //     "Enhanced bifacial gain",
    //   ],
    //   applications: [
    //     "Utility-scale projects",
    //     "Harsh environments",
    //     "Long-term installations",
    //   ],
    //   certifications: ["IEC 61215", "IEC 61730", "CE", "TUV", "UL"],
    // },
  ],
  "IBC Technology": [
    //   {
    //     title: "PERC Mono Half-Cut Panel",
    //     category: "Monofacial",
    //     image:
    //       "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //     path: "/products/solar-panels",
    //     wattage: "540-560W",
    //     efficiency: "20.8-21.5%",
    //     type: "Monofacial PERC",
    //     description:
    //       "Reliable and cost-effective PERC technology with half-cut cell design for improved power output and reduced hot-spot effects.",
    //     features: [
    //       "Half-cut cell technology",
    //       "Reduced hot-spot risk",
    //       "Cost-effective solution",
    //       "Proven reliability",
    //       "Standard installation",
    //       "Wide compatibility",
    //     ],
    //     applications: [
    //       "Budget-conscious projects",
    //       "Standard installations",
    //       "Commercial rooftops",
    //     ],
    //     certifications: ["IEC 61215", "IEC 61730", "CE", "TUV"],
    //   },
    //   {
    //     title: "PERC Bifacial Standard",
    //     category: "Bifacial",
    //     image:
    //       "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //     path: "/products/solar-panels",
    //     wattage: "545-565W",
    //     efficiency: "21.0-21.8%",
    //     type: "Bifacial PERC",
    //     description:
    //       "Entry-level bifacial design with PERC technology providing excellent value for money with reliable performance and moderate bifacial gain.",
    //     features: [
    //       "Affordable bifacial solution",
    //       "PERC cell technology",
    //       "Reliable performance",
    //       "Easy installation",
    //       "Standard warranty",
    //       "Market-proven design",
    //     ],
    //     applications: [
    //       "Ground-mount systems",
    //       "Large-scale installations",
    //       "Cost-sensitive projects",
    //     ],
    //     certifications: ["IEC 61215", "IEC 61730", "CE", "TUV"],
    //   },
    //   {
    //     title: "PERC All-Black Residential",
    //     category: "Monofacial",
    //     image:
    //       "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //     path: "/products/solar-panels",
    //     wattage: "535-555W",
    //     efficiency: "20.5-21.3%",
    //     type: "Monofacial PERC",
    //     description:
    //       "Aesthetic all-black design combining PERC efficiency with visual appeal, perfect for residential installations where appearance matters.",
    //     features: [
    //       "All-black aesthetic design",
    //       "Residential-focused",
    //       "PERC cell efficiency",
    //       "Sleek appearance",
    //       "Standard mounting",
    //       "Proven technology",
    //     ],
    //     applications: [
    //       "Residential rooftops",
    //       "Aesthetic installations",
    //       "Urban projects",
    //     ],
    //     certifications: ["IEC 61215", "IEC 61730", "CE", "TUV"],
    //   },
  ],
};

const SolarPanelsPage = () => {
  const { t, localizePath } = useLanguage();
  const [activeTab, setActiveTab] = useState("N-type – Topcon");
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
        title="Solar Panels | Bronze Solar - N-type TOPCon PV Modules"
        description="Bronze Solar N-type TOPCon solar PV modules made in Abu Dhabi, UAE: Glass/Glass bifacial, all-black, transparent, white and black backsheet modules. Specifications and datasheets for every model."
        keywords="N-type TOPCon solar panels, bifacial solar modules, glass glass solar panels, all black solar panels, PV module datasheets, solar panel manufacturer UAE"
        ogImage="https://bronzesolar.com/Croppedlogo.png"
        pageType="CollectionPage"
        breadcrumbs={[["Home", "/"], ["Products", "/products"], ["High-Efficiency PV Modules", "/products/solar-panels"]]}
        jsonLd={categories["N-type – Topcon"].map((product) =>
          moduleFamilyNode({ t, url: SITE_URL + localizePath("/products/solar-panels"), product })
        )}
      />
      {/* Header */}
      <Header page="products" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-20 ">
        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
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
              {t(cat)}
            </button>
          ))}
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
                <div className="absolute top-4 end-4 bg-gradient-to-r from-primary to-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {t(product.category)}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                {/* Type Badge */}
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary/10 to-primary/20 text-primary rounded-full text-xs font-semibold mb-3 border border-primary/30">
                  {t(product.type)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                  {t(product.title)}
                </h3>

                {/* Performance Chart */}
                <div className="mb-4">
                  <PerformanceChart
                    efficiency={product.efficiency?.split("-")[1] || "23%"}
                    wattage={product.wattage?.split("-")[1] || "600W"}
                  />
                </div>

                {/* Quick Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <Zap size={16} className="text-primary me-2" />
                    <span>{t("{value} Efficiency", { value: product.efficiency })}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Sun size={16} className="text-primary me-2" />
                    <span>{t("{value} Power Output", { value: product.wattage })}</span>
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
                  <p className="text-primary font-medium">
                    {t(selectedProduct.type)}
                  </p>
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
                      selectedProduct.efficiency?.split("-")[1] || "23%"
                    }
                    wattage={selectedProduct.wattage?.split("-")[1] || "600W"}
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
                              {model.efficiency}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                              {model.dimensions || "-"}
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

export default SolarPanelsPage;
