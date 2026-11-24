// Company facts used by structured data (JSON-LD), llms.txt and the sitemap.
// Keep these in line with what the site itself says.
import { SITE_URL } from "@/i18n/routing";

export const COMPANY = {
  brand: "Bronze Solar",
  legalName: "Abundance Solar Panels Industries L.L.C",
  url: SITE_URL,
  logo: `${SITE_URL}/Croppedlogo.png`,
  email: "info@bronzesolar.com",
  telephone: "+971559501737",
  telephoneDisplay: "+971 55 950 1737",
  address: {
    streetAddress: "Plot No. 7-8, KHIA5, KEZAD",
    addressLocality: "Abu Dhabi",
    addressRegion: "Abu Dhabi",
    addressCountry: "AE",
  },
  addressDisplay:
    "ABUNDANCE SOLAR PANELS INDUSTRIES L.L.C, Plot No. 7-8, KHIA5, KEZAD, Abu Dhabi, United Arab Emirates",
  geo: { latitude: 24.7299, longitude: 54.7477 },
  mapUrl: "https://maps.app.goo.gl/xpKYsctNtk8WZ3Fu7",
  openingHours: "Mo-Fr 08:00-18:00",
  sameAs: [
    "https://www.linkedin.com/company/abundance-solar-panels-industries-llc?originalSubdomain=ae",
    "https://x.com/webronzesolar",
    "https://www.facebook.com/bronzesolar",
    "https://www.instagram.com/bronze.solar_?igsh=cHRyYmF3OTM1d2pn",
  ],
  knowsAbout: [
    "Solar PV module manufacturing",
    "N-type TOPCon solar modules",
    "Bifacial solar modules",
    "Building-integrated photovoltaics (BIPV)",
    "Heterojunction (HJT) solar technology",
    "Interdigitated back contact (IBC) solar technology",
  ],
};

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FACTORY_ID = `${SITE_URL}/#factory`;
