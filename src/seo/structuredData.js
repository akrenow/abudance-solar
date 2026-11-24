// schema.org JSON-LD builders. Each page publishes one @graph containing the
// organization, the website, the page itself and its own items (products,
// documents, jobs), so every URL is self-describing for search and AI crawlers.
import { SITE_URL } from "@/i18n/routing";
import { COMPANY, FACTORY_ID, ORGANIZATION_ID, WEBSITE_ID } from "./company";

export const absoluteUrl = (url) =>
  !url ? undefined : /^https?:\/\//.test(url) ? url : SITE_URL + url;

const slug = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const postalAddress = { "@type": "PostalAddress", ...COMPANY.address };
const brand = { "@type": "Brand", name: COMPANY.brand, logo: COMPANY.logo };
const organizationRef = { "@id": ORGANIZATION_ID };

const property = (name, value) => ({ "@type": "PropertyValue", name, value });

// "595 to 615" -> { minValue: 595, maxValue: 615 }
const rangeProperty = (name, range, unitText) => {
  const [min, max] = String(range).split(" to ").map(Number);
  return {
    "@type": "PropertyValue",
    name,
    minValue: min,
    maxValue: Number.isFinite(max) ? max : min,
    unitText,
  };
};

const datasheet = (t, name, url) => ({
  "@type": "DigitalDocument",
  name: t("{name} datasheet", { name }),
  url: absoluteUrl(url),
  encodingFormat: "application/pdf",
  inLanguage: "en",
  publisher: organizationRef,
});

// Organization, factory and website: the same on every page.
export const siteNodes = (t) => [
  {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: COMPANY.brand,
    legalName: COMPANY.legalName,
    alternateName: "Bronze Solar Panel Industries",
    url: COMPANY.url,
    logo: { "@type": "ImageObject", url: COMPANY.logo },
    description: t(
      "Abundance Solar Panels Industries L.L.C, based in KEZAD, UAE, is a leading solar panel manufacturer with a 600MW annual capacity. Utilizing advanced European technology, we produce high-efficiency N-type TOPCon, HJT, and IBC photovoltaic modules, driving innovation and sustainability to make renewable energy accessible worldwide, supporting the UAE's vision for a green future."
    ),
    email: COMPANY.email,
    telephone: COMPANY.telephone,
    address: postalAddress,
    location: { "@id": FACTORY_ID },
    brand,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: COMPANY.telephone,
      email: COMPANY.email,
      availableLanguage: ["English", "Arabic"],
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    knowsAbout: COMPANY.knowsAbout,
    industry: "Solar energy manufacturing",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50, maxValue: 100 },
    sameAs: COMPANY.sameAs,
  },
  {
    "@type": "LocalBusiness",
    "@id": FACTORY_ID,
    name: t("Bronze Solar Manufacturing Facility"),
    parentOrganization: organizationRef,
    url: COMPANY.url,
    image: COMPANY.logo,
    telephone: COMPANY.telephone,
    email: COMPANY.email,
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", ...COMPANY.geo },
    hasMap: COMPANY.mapUrl,
    openingHours: COMPANY.openingHours,
  },
  {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: COMPANY.brand,
    inLanguage: ["en", "ar"],
    publisher: organizationRef,
  },
];

// Full JSON-LD document for one page.
export const pageGraph = ({ t, lang, url, title, description, pageType, breadcrumbs, nodes = [] }) => {
  const page = {
    "@type": pageType,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: lang,
    isPartOf: { "@id": WEBSITE_ID },
    about: organizationRef,
    publisher: organizationRef,
  };
  const graph = [...siteNodes(t), page];
  if (breadcrumbs?.length > 1) {
    page.breadcrumb = { "@id": `${url}#breadcrumb` };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map(([name, item], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        item,
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": [...graph, ...nodes] };
};

// One PV module family (e.g. Glass/Glass Bifacial) with every model as a variant.
export const moduleFamilyNode = ({ t, url, product }) => ({
  "@type": "ProductGroup",
  "@id": `${url}#${slug(product.title)}`,
  productGroupID: slug(product.title),
  name: t(product.title),
  description: t(product.description),
  url,
  image: absoluteUrl(product.image),
  brand,
  manufacturer: organizationRef,
  category: t(product.type),
  additionalProperty: [
    property(t("Cell technology"), "N-type TOPCon"),
    property(t("Rated power"), product.wattage),
    property(t("Module efficiency"), product.efficiency),
  ],
  hasVariant: product.models.map((model) => ({
    "@type": "Product",
    name: model.name,
    model: model.name,
    sku: model.name,
    brand,
    manufacturer: organizationRef,
    category: model.productType,
    additionalProperty: [
      rangeProperty(t("Rated power"), model.wattage, "W"),
      rangeProperty(t("Module efficiency"), model.efficiency, "%"),
      property(t("Dimensions"), model.dimensions),
      property(t("Product Type"), model.productType),
    ],
    subjectOf: datasheet(t, model.name, model.pdfFile),
  })),
});

// One BIPV product with its size/power options as variants.
export const bipvProductNode = ({ t, url, product }) => ({
  "@type": "ProductGroup",
  "@id": `${url}#${slug(product.title)}`,
  productGroupID: slug(product.title),
  name: t(product.title),
  description: t(product.description),
  url,
  image: absoluteUrl(product.image),
  brand,
  manufacturer: organizationRef,
  category: t("Building Integrated Photo-voltaic"),
  additionalProperty: [
    property(t("Rated power"), t(product.wattage)),
    property(t("Module efficiency"), product.efficiency),
    ...product.features.map((feature) => property(t("Key Features"), t(feature))),
  ],
  hasVariant: product.models.map((model) => ({
    "@type": "Product",
    name: model.name,
    model: model.name,
    brand,
    manufacturer: organizationRef,
    additionalProperty: [
      property(t("Rated power"), model.wattage),
      property(t("Module efficiency"), t(model.efficiency)),
      property(t("Dimensions"), t(model.dimensions)),
    ],
    subjectOf: datasheet(t, model.name, model.pdfFile),
  })),
});

// Downloadable documents (datasheets, manuals, warranty, catalogue).
export const documentListNode = ({ t, url, documents }) => ({
  "@type": "ItemList",
  "@id": `${url}#documents`,
  name: t("Downloads"),
  numberOfItems: documents.length,
  itemListElement: documents.map((doc, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "DigitalDocument",
      name: doc.name,
      url: absoluteUrl(doc.url),
      encodingFormat: "application/pdf",
      inLanguage: "en",
      publisher: organizationRef,
    },
  })),
});

// Links to the product category pages.
export const categoryListNode = ({ url, items }) => ({
  "@type": "ItemList",
  "@id": `${url}#categories`,
  itemListElement: items.map(([name, href], index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    url: href,
  })),
});

// "5+ years" -> 60 months
const monthsOfExperience = (text) => {
  const years = parseInt(text, 10);
  return Number.isFinite(years) ? years * 12 : undefined;
};

export const jobPostingNode = ({ t, url, job }) => ({
  "@type": "JobPosting",
  "@id": `${url}#job-${job.id}`,
  title: t(job.title),
  description:
    `<p>${escapeHtml(t(job.description))}</p>` +
    `<ul>${job.requirements.map((req) => `<li>${escapeHtml(t(req))}</li>`).join("")}</ul>`,
  datePosted: job.postedDate,
  employmentType: job.type === "Full-time" ? "FULL_TIME" : undefined,
  occupationalCategory: t(job.department),
  experienceRequirements: {
    "@type": "OccupationalExperienceRequirements",
    monthsOfExperience: monthsOfExperience(job.experience),
  },
  hiringOrganization: {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: COMPANY.brand,
    sameAs: COMPANY.url,
    logo: COMPANY.logo,
  },
  jobLocation: { "@type": "Place", address: postalAddress },
  directApply: false,
  url,
});
