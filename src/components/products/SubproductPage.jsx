import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Download, Info, Zap, Sun, Eye } from "lucide-react";
import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

// Import Glass Glass Bifacial PDFs
import ABS_144GGS_M10 from "../../assets/pdf/1.Glass Glass Bifacial/PDF/ABS-144GGS-M10-585-605.pdf";
import ABS_132GGS_M10 from "../../assets/pdf/1.Glass Glass Bifacial/PDF/ABS-132GGS-M10-535-555.pdf";
import ABS_120GGS_M10 from "../../assets/pdf/1.Glass Glass Bifacial/PDF/ABS-120GGS-M10-485-505.pdf";
import ABS_108GGS_M10 from "../../assets/pdf/1.Glass Glass Bifacial/PDF/ABS-108GGS-M10-435-455.pdf";
import ABS_132GGS_G12 from "../../assets/pdf/1.Glass Glass Bifacial/PDF/ABS-132GGS-G12-705-725.pdf";
import ABS_132GGS_G12R from "../../assets/pdf/1.Glass Glass Bifacial/PDF/ABS-132GGS-G12R-610-630.pdf";

// Import Glass Glass All Black PDFs
import ABS_144GGB_M10 from "../../assets/pdf/2.Glass Glass, All black module/PDF/ABS-144GGB-M10-585-605.pdf";
import ABS_132GGB_M10 from "../../assets/pdf/2.Glass Glass, All black module/PDF/ABS-132GGB-M10-535-555.pdf";
import ABS_120GGB_M10 from "../../assets/pdf/2.Glass Glass, All black module/PDF/ABS-120GGB-M10-485-505.pdf";
import ABS_108GGB_M10 from "../../assets/pdf/2.Glass Glass, All black module/PDF/ABS-108GGB-M10-435-455.pdf";
import ABS_132GGB_G12R from "../../assets/pdf/2.Glass Glass, All black module/PDF/ABS-132GGB-G12R-610-630.pdf";

// Import Glass Transparent Backsheet PDFs
import ABS_144GTS_M10 from "../../assets/pdf/3.Glass Transparent Backsheet/PDF/ABS-144GTS-M10-585-605.pdf";
import ABS_132GTS_M10 from "../../assets/pdf/3.Glass Transparent Backsheet/PDF/ABS-132GTS-M10-535-555.pdf";
import ABS_120GTS_M10 from "../../assets/pdf/3.Glass Transparent Backsheet/PDF/ABS-120GTS-M10-485-505.pdf";
import ABS_108GTS_M10 from "../../assets/pdf/3.Glass Transparent Backsheet/PDF/ABS-108GTS-M10-435-455.pdf";
import ABS_132GTS_G12R from "../../assets/pdf/3.Glass Transparent Backsheet/PDF/ABS-132GTS-G12R-610-630.pdf";

// Import Glass White Backsheet PDFs
import ABS_144GWS_M10 from "../../assets/pdf/4.Glass White Backsheet/PDF/ABS-144GWS-M10-585-605.pdf";
import ABS_132GWS_M10 from "../../assets/pdf/4.Glass White Backsheet/PDF/ABS-132GWS-M10-535-555.pdf";
import ABS_120GWS_M10 from "../../assets/pdf/4.Glass White Backsheet/PDF/ABS-120GWS-M10-485-505.pdf";
import ABS_108GWS_M10 from "../../assets/pdf/4.Glass White Backsheet/PDF/ABS-108GWS-M10-435-455.pdf";
import ABS_132GWS_G12 from "../../assets/pdf/4.Glass White Backsheet/PDF/ABS-132GWS-G12-705-725.pdf";
import ABS_132GWS_G12R from "../../assets/pdf/4.Glass White Backsheet/PDF/ABS-132GWS-G12R-610-630.pdf";

// Import Glass Black Backsheet PDFs
import ABS_144GBB_M10 from "../../assets/pdf/5.Glass Black back sheet – all black Module/PDF/ABS-144GBB-M10-585-605.pdf";
import ABS_132GBB_M10 from "../../assets/pdf/5.Glass Black back sheet – all black Module/PDF/ABS-132GBB-M10-535-555.pdf";
import ABS_120GBB_M10 from "../../assets/pdf/5.Glass Black back sheet – all black Module/PDF/ABS-120GBB-M10-485-505.pdf";
import ABS_108GBB_M10 from "../../assets/pdf/5.Glass Black back sheet – all black Module/PDF/ABS-108GBB-M10-435-455.pdf";
import ABS_132GBB_G12R from "../../assets/pdf/5.Glass Black back sheet – all black Module/PDF/ABS-132GBB-G12R-610-630.pdf";

const categories = {
  "N-type – Topcon": [
    {
      title: "Glass Glass Bifacial PV Module",
      category: "Bifacial",
      image:
        "https://www.pnsolarpv.com/storage/uploads/images/202308/11/1691747648_6YyCEdJdeI.webp",
      path: "/products/solar-panels",
      wattage: "435-725W",
      efficiency: "22.65-23.42%",
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
      applications: [
        "Residential rooftops",
        "Commercial installations",
        "Utility-scale projects",
      ],
      certifications: ["IEC 61215", "IEC 61730", "CE", "TUV"],
      models: [
        {
          name: "ABS-144GGS-M10",
          productType: "Glass/Glass-Silver Frame",
          wattage: "585 to 605",
          efficiency: "22.65 to 23.42",
          pdfFile: ABS_144GGS_M10,
        },
        {
          name: "ABS-132GGS-M10",
          productType: "Glass/Glass-Silver Frame",
          wattage: "535 to 555",
          efficiency: "22.58 to 23.43",
          pdfFile: ABS_132GGS_M10,
        },
        {
          name: "ABS-120GGS-M10",
          productType: "Glass/Glass-Silver Frame",
          wattage: "485 to 505",
          efficiency: "22.42 to 23.34",
          pdfFile: ABS_120GGS_M10,
        },
        {
          name: "ABS-108GGS-M10",
          productType: "Glass/Glass-Silver Frame",
          wattage: "435 to 455",
          efficiency: "22.28 to 23.30",
          pdfFile: ABS_108GGS_M10,
        },
        {
          name: "ABS-132GGS-G12",
          productType: "Glass/Glass-Silver Frame",
          wattage: "705 to 725",
          efficiency: "22.70 to 23.34",
          pdfFile: ABS_132GGS_G12,
        },
        {
          name: "ABS-132GGS-G12R",
          productType: "Glass/Glass-Silver Frame",
          wattage: "610 to 630",
          efficiency: "22.56 to 23.30",
          pdfFile: ABS_132GGS_G12R,
        },
      ],
    },
    {
      title: "Glass Glass All Black PV Module",
      category: "Bifacial",
      image:
        "https://greenmondi.de/media/64/54/39/1688712658/PV-Module-Mono-Halfcut-Full-Black-9.png?ts=1688712658",
      path: "/products/solar-panels",
      wattage: "485-630W",
      efficiency: "22.65-23.42%",
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
      applications: [
        "Residential rooftops",
        "Architectural projects",
        "Premium installations",
      ],
      certifications: ["IEC 61215", "IEC 61730", "CE", "TUV"],
      models: [
        {
          name: "ABS-144GGB-M10",
          productType: "Glass/Glass-Black Frame",
          wattage: "585 to 605",
          efficiency: "22.65 to 23.42",
          pdfFile: ABS_144GGB_M10,
        },
        {
          name: "ABS-132GGB-M10",
          productType: "Glass/Glass-Black Frame",
          wattage: "535 to 555",
          efficiency: "22.58 to 23.43",
          pdfFile: ABS_132GGB_M10,
        },
        {
          name: "ABS-120GGB-M10",
          productType: "Glass/Glass-Black Frame",
          wattage: "485 to 505",
          efficiency: "22.42 to 23.34",
          pdfFile: ABS_120GGB_M10,
        },
        {
          name: "ABS-108GGB-M10",
          productType: "Glass/Glass-Black Frame",
          wattage: "435 to 455",
          efficiency: "22.28 to 23.30",
          pdfFile: ABS_108GGB_M10,
        },
        {
          name: "ABS-132GGB-G12R",
          productType: "Glass/Glass-Black Frame",
          wattage: "610 to 630",
          efficiency: "22.56 to 23.30",
          pdfFile: ABS_132GGB_G12R,
        },
      ],
    },
    {
      title: "Glass Transparent Backsheet PV Module",
      category: "Bifacial",
      image:
        "https://s.alicdn.com/@sc04/kf/H3139fbc9b7ae43ebbf653873f6f1f039f.png_720x720q50.jpg",
      path: "/products/solar-panels",
      wattage: "485-630W",
      efficiency: "22.65-23.42%",
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
      applications: [
        "BIPV applications",
        "Canopies",
        "Agrivoltaics",
        "Architectural integration",
      ],
      certifications: ["IEC 61215", "IEC 61730", "CE", "TUV"],
      models: [
        {
          name: "ABS-144GTS-M10",
          productType: "Glass/Transparent Back sheet-Silver Frame",
          wattage: "585 to 605",
          efficiency: "22.65 to 23.42",
          pdfFile: ABS_144GTS_M10,
        },
        {
          name: "ABS-132GTS-M10",
          productType: "Glass/Transparent Back sheet-Silver Frame",
          wattage: "535 to 555",
          efficiency: "22.58 to 23.43",
          pdfFile: ABS_132GTS_M10,
        },
        {
          name: "ABS-120GTS-M10",
          productType: "Glass/Transparent Back sheet-Silver Frame",
          wattage: "485 to 505",
          efficiency: "22.42 to 23.34",
          pdfFile: ABS_120GTS_M10,
        },
        {
          name: "ABS-108GTS-M10",
          productType: "Glass/Transparent Back sheet-Silver Frame",
          wattage: "435 to 455",
          efficiency: "22.28 to 23.30",
          pdfFile: ABS_108GTS_M10,
        },
        {
          name: "ABS-132GTS-G12R",
          productType: "Glass/Transparent Back sheet-Silver Frame",
          wattage: "610 to 630",
          efficiency: "22.56 to 23.30",
          pdfFile: ABS_132GTS_G12R,
        },
      ],
    },
    {
      title: "Glass White Back Sheet PV Module",
      category: "Monofacial",
      image:
        "https://metsolar.eu/wp-content/uploads/2017/11/Glass-blacksheet-layers.png",
      path: "/products/solar-panels",
      wattage: "485-725W",
      efficiency: "22.65-23.42%",
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
      applications: [
        "Commercial rooftops",
        "Ground-mount systems",
        "Standard installations",
      ],
      certifications: ["IEC 61215", "IEC 61730", "CE", "TUV"],
      models: [
        {
          name: "ABS-144GWS-M10",
          productType: "Glass/White Back Sheet-Silver Frame",
          wattage: "585 to 605",
          efficiency: "22.65 to 23.42",
          pdfFile: ABS_144GWS_M10,
        },
        {
          name: "ABS-132GWS-M10",
          productType: "Glass/White Back Sheet-Silver Frame",
          wattage: "535 to 555",
          efficiency: "22.58 to 23.43",
          pdfFile: ABS_132GWS_M10,
        },
        {
          name: "ABS-120GWS-M10",
          productType: "Glass/White Back Sheet-Silver Frame",
          wattage: "485 to 505",
          efficiency: "22.42 to 23.34",
          pdfFile: ABS_120GWS_M10,
        },
        {
          name: "ABS-108GWS-M10",
          productType: "Glass/White Back Sheet-Silver Frame",
          wattage: "435 to 455",
          efficiency: "22.28 to 23.30",
          pdfFile: ABS_108GWS_M10,
        },
        {
          name: "ABS-132GWS-G12",
          productType: "Glass/White Back Sheet-Silver Frame",
          wattage: "705 to 725",
          efficiency: "22.70 to 23.34",
          pdfFile: ABS_132GWS_G12,
        },
        {
          name: "ABS-132GWS-G12R",
          productType: "Glass/White Back Sheet-Silver Frame",
          wattage: "610 to 630",
          efficiency: "22.56 to 23.30",
          pdfFile: ABS_132GWS_G12R,
        },
      ],
    },
    {
      title: "Glass Black Back Sheet – All Black PV Module",
      category: "Monofacial",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9nFoOyssxa3q14PjpIEgjsY9NXTTX9qRHA&s",
      path: "/products/solar-panels",
      wattage: "485-630W",
      efficiency: "22.65-23.42%",
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
      applications: [
        "Residential rooftops",
        "Commercial buildings",
        "Premium projects",
      ],
      certifications: ["IEC 61215", "IEC 61730", "CE", "TUV"],
      models: [
        {
          name: "ABS-144GBB-M10",
          productType: "Glass/Black Back Sheet-Silver Frame",
          wattage: "585 to 605",
          efficiency: "22.65 to 23.42",
          pdfFile: ABS_144GBB_M10,
        },
        {
          name: "ABS-132GBB-M10",
          productType: "Glass/Black Back Sheet-Silver Frame",
          wattage: "535 to 555",
          efficiency: "22.58 to 23.43",
          pdfFile: ABS_132GBB_M10,
        },
        {
          name: "ABS-120GBB-M10",
          productType: "Glass/Black Back Sheet-Silver Frame",
          wattage: "485 to 505",
          efficiency: "22.42 to 23.34",
          pdfFile: ABS_120GBB_M10,
        },
        {
          name: "ABS-108GBB-M10",
          productType: "Glass/Black Back Sheet-Silver Frame",
          wattage: "435 to 455",
          efficiency: "22.28 to 23.30",
          pdfFile: ABS_108GBB_M10,
        },
        {
          name: "ABS-132GBB-G12R",
          productType: "Glass/Black Back Sheet-Silver Frame",
          wattage: "610 to 630",
          efficiency: "22.56 to 23.30",
          pdfFile: ABS_132GBB_G12R,
        },
      ],
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
  "Proven ABC Technology": [
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
              Efficiency
            </div>
            <div
              className="h-6 sm:h-8 bg-gradient-to-t from-amber-500 to-orange-400 rounded-lg relative overflow-hidden transition-all duration-1000"
              style={{ width: `${parseFloat(efficiency) * 4}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30"></div>
            </div>
            <div className="text-sm sm:text-base font-bold text-gray-800">
              {efficiency}
            </div>
          </div>
          <div className="flex-1 space-y-1 sm:space-y-2 ml-4">
            <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              MAX POWER
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
      {/* Header */}
      <Header page="products" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 mt-20 relative z-20 ">
        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
              }`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
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
                  alt={product.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {product.category}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                {/* Type Badge */}
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-xs font-semibold mb-3 border border-amber-200">
                  {product.type}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                  {product.title}
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
                    <Zap size={16} className="text-amber-500 mr-2" />
                    <span>{product.efficiency} Efficiency</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Sun size={16} className="text-orange-500 mr-2" />
                    <span>{product.wattage} Power Output</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => openProductPopup(product)}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Info size={16} />
                    Details
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
                  Coming Soon
                </h3>
                <p className="text-gray-600">
                  Next-generation{" "}
                  <span className="font-semibold text-amber-600">
                    {activeTab}
                  </span>{" "}
                  modules are currently under development.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need Technical Specifications?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get detailed technical documentation and customized solutions for
            your specific project requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Contact Technical Team
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
                    {selectedProduct.title}
                  </h2>
                  <p className="text-amber-600 font-medium">
                    {selectedProduct.type}
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
                      alt={selectedProduct.title}
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
                      Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Applications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.applications.map((app, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certifications
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Award size={20} className="text-amber-500 mr-2" />
                      Certifications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Available Models Section */}
              {selectedProduct.models && selectedProduct.models.length > 0 && (
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Available Models
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-amber-50 to-orange-50">
                          <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-800">
                            Model Name
                          </th>
                          <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-800">
                            Product Type
                          </th>
                          <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-800">
                            Wattage (WP)
                          </th>
                          <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-800">
                            Efficiency (%)
                          </th>
                          <th className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-800">
                            View PDF
                          </th>
                          <th className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-800">
                            Download
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
                            <td className="border border-gray-200 px-4 py-3 text-center">
                              <button
                                onClick={() =>
                                  window.open(model.pdfFile, "_blank")
                                }
                                className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-200"
                                title={`View ${model.name} datasheet`}
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
                                title={`Download ${model.name} datasheet`}
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
