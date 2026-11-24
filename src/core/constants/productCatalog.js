// Product catalogue shown on the Solar Panels and BIPV pages and on each
// product's own page (/products/solar-panels/<slug>, /products/bipv-products/<slug>).
// Text is English; Arabic comes from src/i18n/ar.js. Model specs come from
// ./products.js (the client's datasheet set).
import { moduleFamilies, bipvDatasheets } from "./products";

import imgGlassGlassBifacial from "../../assets/pdf/1.Glass Glass Bifacial/image.png";
import imgGlassGlassAllBlack from "../../assets/pdf/2.Glass Glass, All black module/image.png";
import imgGlassTransparentBacksheet from "../../assets/pdf/3.Glass Transparent Backsheet/image.png";
import imgGlassWhiteBacksheet from "../../assets/pdf/4.Glass White Backsheet/image.png";
import imgGlassBlackBacksheet from "../../assets/pdf/5.Glass Black back sheet – all black Module/image.png";
import SemiTransparentBIPVGlassPanels from "../../assets/Bipvsubproducts/Picture1.png";
import ColoredBIPVPanel from "../../assets/Bipvsubproducts/Picture2.jpg";
import SolarRoofTiles from "../../assets/Bipvsubproducts/Picture3.png";
import CustomPrintedFrontGlassBIPVPanels from "../../assets/Bipvsubproducts/Picture3.jpg";

export const PV_PRODUCTS_PATH = "/products/solar-panels";
export const BIPV_PRODUCTS_PATH = "/products/bipv-products";

// N-type TOPCon PV module families
export const PV_PRODUCTS = [
  {
    slug: "glass-glass-bifacial",
    title: "Glass Glass Bifacial PV Module",
    category: "Bifacial",
    image: imgGlassGlassBifacial,
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
    slug: "glass-glass-all-black",
    title: "Glass Glass All Black PV Module",
    category: "Bifacial",
    image: imgGlassGlassAllBlack,
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
    slug: "glass-transparent-backsheet",
    title: "Glass Transparent Backsheet PV Module",
    category: "Bifacial",
    image: imgGlassTransparentBacksheet,
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
    slug: "glass-white-backsheet",
    title: "Glass White Back Sheet PV Module",
    category: "Monofacial",
    image: imgGlassWhiteBacksheet,
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
    slug: "glass-black-backsheet",
    title: "Glass Black Back Sheet – All Black PV Module",
    category: "Monofacial",
    image: imgGlassBlackBacksheet,
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
      "30-year linear power warranty",
    ],
    applications: ["Residential", "Commercial", "Off-Grid", ],
    models: moduleFamilies.glassBlackBacksheet.models,
  },
];

// Building-integrated photovoltaic (BIPV) products
export const BIPV_PRODUCTS = [
  {
    slug: "semi-transparent-glass-panels",
    title: "Semi-Transparent BIPV Glass Panels",
  //   category: "Bifacial",
    image: SemiTransparentBIPVGlassPanels,
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
    slug: "colored-panels",
    title: "Colored BIPV Panels (Front Colored Glass)",
  //   category: "Bifacial",
    image: ColoredBIPVPanel,
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
    slug: "solar-roof-tiles",
    title: "Solar Roof Tiles (BIPV Tiles)",
  //   category: "Bifacial",
    image: SolarRoofTiles,
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
    slug: "custom-printed-front-glass-panels",
    title: "Custom Printed Front-Glass BIPV Panels",
  //   category: "Bifacial",
    image:CustomPrintedFrontGlassBIPVPanels,
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
  
];

export const productPath = (product) =>
  `${PV_PRODUCTS.includes(product) ? PV_PRODUCTS_PATH : BIPV_PRODUCTS_PATH}/${product.slug}`;
