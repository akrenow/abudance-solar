import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgGlassGlassBifacial from "../../assets/pdf/1.Glass Glass Bifacial/image.png";
import imgGlassGlassAllBlack from "../../assets/pdf/2.Glass Glass, All black module/image.png";
import imgGlassTransparentBacksheet from "../../assets/pdf/3.Glass Transparent Backsheet/image.png";
import imgGlassWhiteBacksheet from "../../assets/pdf/4.Glass White Backsheet/image.png";
import imgGlassBlackBacksheet from "../../assets/pdf/5.Glass Black back sheet – all black Module/image.png";

const ProductShowcase = () => {
  const navigate = useNavigate();
  const [activeSeries, setActiveSeries] = useState("N-type TOPCon");
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredVariant, setHoveredVariant] = useState(null);

  const productSeries = {
    "N-type TOPCon": {
      description:
        "High-efficiency N-type TOPCon technology with 30-year linear performance warranty",
      color: "#F3B700",
      gradient: "from-amber-600 to-orange-600",
      lightGradient: "from-amber-50 to-orange-50",
      products: [
        {
          name: "Glass Glass Bifacial PV Module",
          type: "Glass/Glass Bifacial",
          wattage: "435-725W",
          efficiency: "22.65-23.42%",
          image: imgGlassGlassBifacial,
          variants: [
            {
              name: "ABS-144GGS-M10",
              wattage: "585-605W",
              efficiency: "22.65-23.42%",
              dimensions: "2278 mm x 1134 mm x 30mm",
            },
            {
              name: "ABS-132GGS-M10",
              wattage: "535-555W",
              efficiency: "22.58-23.43%",
              dimensions: "2089mm x 1134 mm x 30mm",
            },
            {
              name: "ABS-120GGS-M10",
              wattage: "485-505W",
              efficiency: "22.42-23.34%",
              dimensions: "1908mm x 1134 mm x 30mm",
            },
            {
              name: "ABS-108GGS-M10",
              wattage: "435-455W",
              efficiency: "22.28-23.30%",
              dimensions: "1722mm x 1134 mm x 30mm",
            },
            {
              name: "ABS-132GGS-G12",
              wattage: "705-725W",
              efficiency: "22.70-23.34%",
              dimensions: "2384mm x 1303mm x 30mm",
            },
            {
              name: "ABS-132GGS-G12R",
              wattage: "610-630W",
              efficiency: "22.56-23.30%",
              dimensions: "2384mm x 1134mm x 30mm",
            },
          ],
          features: [
            "Dual Glass Design for 30+ year lifespan",
            "Bifacial Output (5-30% extra energy)",
            "N-type TOPCon Cells (>23.5% efficiency)",
            "Excellent temperature performance",
            "Anti-PID technology",
            "Superior low-light performance",
          ],
          applications: ["Residential", "Commercial", "Off-Grid", "Utility"],
        },
        {
          name: "Glass Glass All Black PV Module",
          type: "Glass/Glass All Black",
          wattage: "485-630W",
          efficiency: "22.65-23.42%",
          image: imgGlassGlassAllBlack,
          variants: [
            {
              name: "ABS-144GGB-M10",
              wattage: "585-605W",
              efficiency: "22.65-23.42%",
              dimensions: "2278 mm x 1134 mm x 30mm",
            },
            {
              name: "ABS-132GGB-M10",
              wattage: "535-555W",
              efficiency: "22.58-23.43%",
              dimensions: "2089mm x 1134 mm x 30mm",
            },
            {
              name: "ABS-120GGB-M10",
              wattage: "485-505W",
              efficiency: "22.42-23.34%",
              dimensions: "1908mm x 1134 mm x 30mm",
            },
            {
              name: "ABS-108GGB-M10",
              wattage: "435-455W",
              efficiency: "22.28-23.30%",
              dimensions: "1722mm x 1134 mm x 30mm",
            },
            {
              name: "ABS-132GGB-G12R",
              wattage: "610-630W",
              efficiency: "22.56-23.30%",
              dimensions: "2384mm x 1134mm x 30mm",
            },
          ],
          features: [
            "Sleek all-black aesthetic",
            "Dual Glass Protection",
            "High efficiency in low light",
            "Perfect for residential rooftops",
            "Anti-reflective coating",
            "Enhanced durability",
          ],
          applications: ["Residential", "Commercial", "Off-Grid", "Utility"],
        },
        {
          name: "Glass Transparent Backsheet PV Module",
          type: "Glass/Transparent Backsheet",
          wattage: "485-630W",
          efficiency: "22.65-23.42%",
          image: imgGlassTransparentBacksheet,
          variants: [
            {
              name: "ABS-144GTS-M10",
              wattage: "585-605W",
              efficiency: "22.65-23.42%",
              dimensions: "2278mm x 1134mm x 30mm",
            },
            {
              name: "ABS-132GTS-M10",
              wattage: "535-555W",
              efficiency: "22.58-23.43%",
              dimensions: "2089mm x 1134mm x 30mm",
            },
            {
              name: "ABS-120GTS-M10",
              wattage: "485-505W",
              efficiency: "22.42-23.34%",
              dimensions: "1908mm x 1134mm x 30mm",
            },
            {
              name: "ABS-108GTS-M10",
              wattage: "435-455W",
              efficiency: "22.28-23.30%",
              dimensions: "1722mm x 1134mm x 30mm",
            },
            {
              name: "ABS-132GTS-G12R",
              wattage: "610-630W",
              efficiency: "22.56-23.30%",
              dimensions: "2384mm x 1134mm x 30mm",
            },
          ],
          features: [
            "Transparent backsheet design",
            "Enhanced bifacial gain",
            "Architectural integration",
            "Superior light transmission",
            "Weather resistant",
            "Long-term reliability",
          ],
          applications: ["Residential", "Commercial", "Off-Grid", "Utility"],
        },
        {
          name: "Glass White Back Sheet PV Module",
          type: "Glass/White Back Sheet",
          wattage: "485-725W",
          efficiency: "22.65-23.42%",
          image: imgGlassWhiteBacksheet,
          variants: [
            {
              name: "ABS-144GWS-M10",
              wattage: "585-605W",
              efficiency: "22.65-23.42%",
              dimensions: "2278mm x 1134mm x 30mm",
            },
            {
              name: "ABS-132GWS-M10",
              wattage: "535-555W",
              efficiency: "22.58-23.43%",
              dimensions: "2089mm x 1134mm x 30mm",
            },
            {
              name: "ABS-120GWS-M10",
              wattage: "485-505W",
              efficiency: "22.42-23.34%",
              dimensions: "1908mm x 1134mm x 30mm",
            },
            {
              name: "ABS-108GWS-M10",
              wattage: "435-455W",
              efficiency: "22.28-23.30%",
              dimensions: "1722mm x 1134mm x 30mm",
            },
            {
              name: "ABS-132GWS-G12",
              wattage: "705-725W",
              efficiency: "22.70-23.34%",
              dimensions: "2384mm x 1303mm x 30mm",
            },
            {
              name: "ABS-132GWS-G12R",
              wattage: "610-630W",
              efficiency: "22.56-23.30%",
              dimensions: "2384mm x 1134mm x 30mm",
            },
          ],
          features: [
            "Cost-effective solution",
            "White backsheet for heat dissipation",
            "Proven reliability",
            "Easy installation",
            "Standard grid connection",
            "Excellent price-performance ratio",
          ],
          applications: ["Residential", "Commercial", "Off-Grid", "Utility"],
        },
        {
          name: "Glass Black Back Sheet – All Black PV Module",
          type: "Glass/Black Back Sheet",
          wattage: "485-630W",
          efficiency: "22.65-23.42%",
          image: imgGlassBlackBacksheet,
          variants: [
            {
              name: "ABS-144GBB-M10",
              wattage: "585-605W",
              efficiency: "22.65-23.42%",
              dimensions: "2278mm x 1134mm x 30mm",
            },
            {
              name: "ABS-132GBB-M10",
              wattage: "535-555W",
              efficiency: "22.58-23.43%",
              dimensions: "2089mm x 1134mm x 30mm",
            },
            {
              name: "ABS-120GBB-M10",
              wattage: "485-505W",
              efficiency: "22.42-23.34%",
              dimensions: "1908mm x 1134mm x 30mm",
            },
            {
              name: "ABS-108GBB-M10",
              wattage: "435-455W",
              efficiency: "22.28-23.30%",
              dimensions: "1722mm x 1134mm x 30mm",
            },
            {
              name: "ABS-132GBB-G12R",
              wattage: "610-630W",
              efficiency: "22.56-23.30%",
              dimensions: "2384mm x 1134mm x 30mm",
            },
          ],
          features: [
            "Premium all-black design",
            "High aesthetic appeal",
            "Reliable performance",
            "Easy maintenance",
            "Weather resistant frame",
            "25-year performance warranty",
          ],
          applications: ["Residential", "Commercial", "Off-Grid", "Utility"],
        },
      ],
    },
    HJT: {
      description: "Coming soon - Next-generation Heterojunction Technology",
      color: "#4B2354",
      gradient: "from-slate-700 to-slate-800",
      lightGradient: "from-slate-50 to-gray-50",
      comingSoon: true,
    },
    IBC: {
      description: "Coming soon - IBC technology with enhanced performance",
      color: "#F3B700",
      gradient: "from-amber-600 to-orange-600",
      lightGradient: "from-amber-50 to-orange-50",
      comingSoon: true,
    },
  };
  const currentProduct =
    productSeries[activeSeries]?.products?.[currentProductIndex];

  const handleSeriesChange = async (series) => {
    if (series === activeSeries) return;
    setIsAnimating(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setActiveSeries(series);
    setCurrentProductIndex(0);
    await new Promise((resolve) => setTimeout(resolve, 100));
    setIsAnimating(false);
  };

  const handleProductChange = async (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    await new Promise((resolve) => setTimeout(resolve, 200));

    if (direction === "next") {
      setCurrentProductIndex(
        (prev) => (prev + 1) % productSeries[activeSeries].products.length
      );
    } else {
      setCurrentProductIndex(
        (prev) =>
          (prev - 1 + productSeries[activeSeries].products.length) %
          productSeries[activeSeries].products.length
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
    setIsAnimating(false);
  };

  const PerformanceChart = ({ efficiency, wattage }) => (
    <div className="relative h-14 sm:h-16 w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 px-2">
        <div className="flex justify-between items-end h-full">
          <div className="flex-1 space-y-1">
            <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              Efficiency
            </div>
            <div
              className="h-4 sm:h-5 bg-gradient-to-t from-amber-500 to-orange-400 rounded-md relative overflow-hidden transition-all duration-1000"
              style={{ width: `${parseFloat(efficiency) * 4}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30"></div>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-800">
              {efficiency}
            </div>
          </div>
          <div className="flex-1 space-y-1 ml-3">
            <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              Max Power
            </div>
            <div
              className="h-4 sm:h-5 bg-gradient-to-t from-slate-600 to-slate-500 rounded-md relative overflow-hidden transition-all duration-1000"
              style={{ width: `${parseInt(wattage) / 10}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30"></div>
            </div>
            <div className="text-xs sm:text-sm font-bold text-gray-800">
              {wattage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative bg-white overflow-hidden py-8 lg:py-10">
      {/* Dynamic Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${productSeries[activeSeries].lightGradient} opacity-5 transition-all duration-1000`}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Compact Header */}
        <div className="text-center mb-8 lg:mb-10 relative">
          <div className="inline-block">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-600 to-orange-600 mb-6 leading-tight">
              Solar Innovation
            </h1>
            <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 sm:w-48 mx-auto" />
          </div>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
            Engineering tomorrow&apos;s energy solutions with cutting-edge
            photovoltaic technology
          </p>
        </div>
        {/* Compact Series Navigation */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-1">
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
              {Object.entries(productSeries).map(([series, data]) => (
                <button
                  key={series}
                  onClick={() => handleSeriesChange(series)}
                  className={`relative px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs uppercase tracking-wider transition-all duration-500 ${activeSeries === series
                      ? `bg-gradient-to-r ${data.gradient} text-white`
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                >
                  <span className="relative z-10">{series}</span>
                  {data.comingSoon && (
                    <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        {!productSeries[activeSeries].comingSoon ? (
          <div
            className={`transition-all duration-500 ${isAnimating
                ? "opacity-0 transform scale-95"
                : "opacity-100 transform scale-100"
              }`}
          >
            {/* Product Display */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start mb-8 sm:mb-10">
              {/* Left: Product Visualization */}
              <div className="space-y-3 sm:space-y-4">
                <div className="relative group">
                  <div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <div
                      onClick={() => navigate("/products")}
                      className="aspect-[4/3] relative overflow-hidden"
                    >
                      <img
                        src={currentProduct?.image}
                        alt={currentProduct?.name}
                        className="w-full h-full  transition-transform duration-700 object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                    <div className="p-3 sm:p-4">
                      <PerformanceChart
                        efficiency={
                          currentProduct?.efficiency?.split("-")[1] || "23%"
                        }
                        wattage={
                          currentProduct?.wattage?.split("-")[1] || "600W"
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                {productSeries[activeSeries].products?.length > 1 && (
                  <div className="flex justify-center space-x-3">
                    <button
                      onClick={() => handleProductChange("prev")}
                      className="group w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-gray-200 hover:border-amber-300 transition-all duration-300 flex items-center justify-center hover:bg-amber-50"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 group-hover:text-amber-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleProductChange("next")}
                      className="group w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-gray-200 hover:border-amber-300 transition-all duration-300 flex items-center justify-center hover:bg-amber-50"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 group-hover:text-amber-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Right: Product Information */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="inline-block px-2 sm:px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-xs font-semibold mb-2 sm:mb-3 border border-amber-200">
                    {currentProduct?.type}
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-gray-800 mb-2 leading-tight">
                    {currentProduct?.name}
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {productSeries[activeSeries].description}
                  </p>
                </div>

                {/* Variants */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
                    Available Configurations
                  </h3>
                  <div className="space-y-2">
                    {currentProduct?.variants.map((variant, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => setHoveredVariant(index)}
                        onMouseLeave={() => setHoveredVariant(null)}
                        className={`p-2 sm:p-3 rounded-lg border-2 transition-all duration-300 cursor-pointer ${hoveredVariant === index
                            ? "border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50 transform scale-105"
                            : "border-gray-200 bg-white hover:border-gray-300"
                          }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-bold text-gray-800 text-xs sm:text-sm">
                              {variant.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-0.5">
                              Efficiency: {variant.efficiency}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg sm:text-xl font-black text-amber-600">
                              {variant.wattage}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
                    Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProduct?.applications.map((app, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1  text-secondary bg-primary/20 rounded-full text-xs font-semibold hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform hover:scale-105"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 sm:py-10">
            <div className="inline-block p-6 sm:p-8 bg-white border border-gray-200 rounded-xl">
              <p className="text-gray-600 mb-4 sm:mb-6 max-w-md text-xs sm:text-sm leading-relaxed">
                {productSeries[activeSeries].description}
              </p>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-10">
          <button
            onClick={() => navigate("/products")}
            className="group relative px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-black text-xs sm:text-sm md:text-base rounded-xl transition-all duration-500 transform hover:scale-105 hover:from-slate-700 hover:to-slate-800"
          >
            <span className="relative z-10 flex items-center">
              view all products
              <svg
                className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
