// Frequently asked questions: shown on /faq, published as FAQPage structured
// data and listed in llms.txt. Answers state only facts from the website, the
// datasheets, the warranty document (ABS-WAR-QA-001) and the product
// catalogue (Rev05). Numbers in {braces}
// are computed from the product data, so they stay correct when it changes.
// Arabic versions live in src/i18n/ar.js under the same English text.
import { moduleFamilies } from "@/core/constants/products";
import { COMPANY } from "./company";

const models = Object.values(moduleFamilies).flatMap((family) => family.models);
const numbers = (key) => models.flatMap((model) => model[key].split(" to ").map(Number));
const topEfficiency = Math.max(...numbers("efficiency"));

export const FAQ_VALUES = {
  models: models.length,
  families: Object.keys(moduleFamilies).length,
  minPower: Math.min(...numbers("wattage")),
  maxPower: Math.max(...numbers("wattage")),
  minEfficiency: Math.min(...numbers("efficiency")).toFixed(2),
  maxEfficiency: topEfficiency.toFixed(2),
  topModels: models
    .filter((model) => Number(model.efficiency.split(" to ")[1]) === topEfficiency)
    .map((model) => model.name)
    .join(" / "),
  phone: COMPANY.telephoneDisplay,
  email: COMPANY.email,
};

export const FAQ = [
  {
    question: "Where is the Bronze Solar factory?",
    answer:
      "The factory is at Plot No. 7-8, KHIA5, KEZAD (Khalifa Economic Zones Abu Dhabi), Abu Dhabi, United Arab Emirates, on an industrial plot of 301,389 square feet.",
    link: { label: "Contact Us", path: "/contact" },
  },
  {
    question: "Which solar cell technology does Bronze Solar use?",
    answer:
      "Bronze Solar modules use N-type TOPCon cells: half-cut cells with 16-busbar interconnection. Heterojunction (HJT) and interdigitated back contact (IBC) modules are coming soon.",
  },
  {
    question: "Which solar panels does Bronze Solar make?",
    answer:
      "Bronze Solar makes {models} N-type TOPCon module models in {families} families: Glass/Glass Bifacial, Glass/Glass All Black and Glass/Transparent Backsheet (bifacial), and Glass/White Backsheet and Glass/Black Backsheet – all black (monofacial). Power ratings range from {minPower} to {maxPower} Wp.",
    link: { label: "High-Efficiency PV Modules", path: "/products/solar-panels" },
  },
  {
    question: "How efficient are Bronze Solar panels?",
    answer:
      "Module efficiency ranges from {minEfficiency}% to {maxEfficiency}%. The most efficient models, {topModels}, reach {maxEfficiency}%.",
    link: { label: "High-Efficiency PV Modules", path: "/products/solar-panels" },
  },
  {
    question: "What is the difference between bifacial and monofacial modules?",
    answer:
      "Bifacial modules also generate power from light reaching the rear side, so rear irradiance can increase output; each bifacial datasheet shows illustrative power at different levels of bifacial gain. Monofacial modules generate power from the front only and have a white or black backsheet.",
  },
  {
    question: "What warranty do Bronze Solar modules have?",
    answer:
      "Bronze Solar PV modules have a 15-year limited product warranty and a 30-year linear power output warranty: at least 99.00% of rated power in the first year, then a decline of no more than 0.40 percentage points per year, to 87.40% at the end of year 30.",
    link: { label: "Downloads", path: "/downloads" },
  },
  {
    question: "Does Bronze Solar make BIPV products?",
    answer:
      "Yes. Bronze Solar makes semi-transparent BIPV glass panels, coloured BIPV panels with front coloured glass, solar roof tiles and custom printed front-glass BIPV panels. Size, colour and print can be customized.",
    link: { label: "Building Integrated Photo-voltaic", path: "/products/bipv-products" },
  },
  {
    question: "How are Bronze Solar modules tested?",
    answer:
      "The production process has inspection gates between stages, including electroluminescence (EL) inspection before lamination and again after the flash test, a flash test (sun simulation) under Standard Test Conditions (STC), high-voltage insulation (Hi-pot) testing and visual inspection, supported by an in-house quality control and testing laboratory.",
    link: { label: "About Us", path: "/about" },
  },
  {
    question: "Where can I download datasheets and manuals?",
    answer:
      "The Downloads page has a datasheet for every module model and BIPV product, the product catalogue, the installation and safety precautions manual, the unpacking instructions and the limited and linear warranty.",
    link: { label: "Downloads", path: "/downloads" },
  },
  {
    question: "How can I contact Bronze Solar?",
    answer:
      "Call {phone}, email {email}, or use the enquiry form on the Contact page. The factory is at Plot No. 7-8, KHIA5, KEZAD, Abu Dhabi, United Arab Emirates.",
    link: { label: "Contact Us", path: "/contact" },
  },
  {
    question: "Is the Bronze Solar website available in Arabic?",
    answer: "Yes. Every page is available in English and in Arabic; the Arabic pages are under bronzesolar.com/ar.",
  },
];
