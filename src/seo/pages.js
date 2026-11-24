// Public pages, in English path form. Each one is pre-rendered in every
// language at build time and listed in sitemap.xml and llms.txt.
// When you add a route in App.jsx, add it here too.
// `label` is the navigation text, used to look up the Arabic name in ar.js.
export const SITE_PAGES = [
  {
    path: "/",
    name: "Home",
    label: "Home",
    summary: "Company overview, technology, vision and mission, product showcase and news.",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    path: "/about",
    name: "About Us",
    label: "About Us",
    summary: "Company profile, mission and vision, the KEZAD manufacturing facility and its 16-step production process, and sustainability.",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/products",
    name: "Products",
    label: "Products",
    summary: "Product range: high-efficiency PV modules, building-integrated photovoltaics (BIPV), solar inverters and EPC solutions.",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    path: "/products/solar-panels",
    name: "Solar Panels (PV Modules)",
    label: "High-Efficiency PV Modules",
    summary: "N-type TOPCon PV module families and every model's power, efficiency, dimensions and datasheet.",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    path: "/products/bipv-products",
    name: "BIPV Products",
    label: "Building Integrated Photo-voltaic",
    summary: "Semi-transparent glass panels, coloured panels, solar roof tiles and custom printed front-glass panels.",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/downloads",
    name: "Downloads",
    label: "Downloads",
    summary: "Datasheets for every model, the product catalogue, installation and safety manual, unpacking instructions and warranty.",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/contact",
    name: "Contact",
    label: "Contact Us",
    summary: "Address, phone, email, map and enquiry form.",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/career",
    name: "Careers",
    label: "Career",
    summary: "Open positions and how to apply.",
    changefreq: "weekly",
    priority: 0.6,
  },
];
