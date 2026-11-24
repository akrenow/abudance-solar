// Single source of truth for PV module specs and downloadable documents.
// The Solar Panels page, the homepage product showcase and the Downloads page
// all read from here, so a new datasheet only needs updating in this file.
//
// Module specs follow the client's "Type of Modules" sheet (datasheets Rev-00,
// dated 31.10.2026). Each datasheet lives at
//   src/assets/pdf/<family folder>/PDF/<model>-<min W>-<max W>.pdf

import bipvSemiTransparent from "@/assets/pdf/BIPV/ABS-BIPV-Semi-Transparent-Glass-Panel.pdf";
import bipvColored from "@/assets/pdf/BIPV/ABS-BIPV-Colored-Panel.pdf";
import bipvRoofTile from "@/assets/pdf/BIPV/ABS-BIPV-Solar-Roof-Tile.pdf";
import bipvCustomPrinted from "@/assets/pdf/BIPV/ABS-BIPV-Custom-Printed-Front-Glass-Panel.pdf";

import warrantyPdf from "@/assets/pdf/documents/ABS-WAR-QA-001_Limited-and-Linear-Warranty_Rev01.pdf";
import installationManualPdf from "@/assets/pdf/documents/ABS-IM-ENG-001_Installation-and-Safety-Precautions-Manual_Rev01.pdf";
import unpackingInstructionsPdf from "@/assets/pdf/documents/ABS-WI-ENG-010_Unpacking-Instructions_Rev01.pdf";
import productCataloguePdf from "@/assets/pdf/documents/Bronze-Solar-Product-Catalogue_Rev05.pdf";

const moduleDatasheets = import.meta.glob("../../assets/pdf/*/PDF/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

const datasheetFor = (folder, name, wattage) => {
  const [min, max] = wattage.split(" to ");
  const path = `../../assets/pdf/${folder}/PDF/${name}-${min}-${max}.pdf`;
  const url = moduleDatasheets[path];
  if (!url) throw new Error(`Missing datasheet: ${path}`);
  return url;
};

// Display form of a datasheet range: "595 to 615" -> "595–615" (reads the same in English and Arabic)
export const formatRange = (value) => String(value).replace(" to ", "–");

// Display form of module dimensions in the page's language:
// "2278 mm x 1134 mm x 30 mm" -> "2278 × 1134 × 30 mm" (Arabic: "… مم")
export const formatDimensions = (t, dimensions) => {
  const match = String(dimensions).match(/^([\d.]+) mm x ([\d.]+) mm x ([\d.]+) mm$/);
  return match
    ? t("{length} × {width} × {depth} mm", { length: match[1], width: match[2], depth: match[3] })
    : t(dimensions);
};

// "a to b" values across models -> "min-max" (keeps the source's decimals)
const rangeOf = (values) => {
  const nums = values.flatMap((v) => v.split(" to "));
  const sorted = [...nums].sort((a, b) => parseFloat(a) - parseFloat(b));
  return `${sorted[0]}-${sorted[sorted.length - 1]}`;
};

const family = ({ folder, productType, models }) => {
  const built = models.map(([name, size, wattage, efficiency]) => ({
    name,
    productType,
    wattage,
    efficiency,
    dimensions: size.replace(/x/g, " mm x ") + " mm",
    pdfFile: datasheetFor(folder, name, wattage),
  }));
  return {
    productType,
    models: built,
    wattageRange: rangeOf(built.map((m) => m.wattage)),
    efficiencyRange: rangeOf(built.map((m) => m.efficiency)),
  };
};

export const moduleFamilies = {
  glassGlassBifacial: {
    downloadName: "Glass/Glass Bifacial Datasheet",
    title: "Glass/Glass Bifacial PV Module Datasheets",
    description:
      "Complete collection of Glass/Glass bifacial solar panel datasheets with silver frame construction.",
    ...family({
      folder: "1.Glass Glass Bifacial",
      productType: "Glass/Glass-Silver Frame",
      models: [
        ["ABS-144GGS-M10", "2278x1134x30", "595 to 615", "23.03 to 23.81"],
        ["ABS-132GGS-M10", "2089x1134x30", "540 to 560", "22.80 to 23.64"],
        ["ABS-120GGS-M10", "1908x1134x30", "490 to 510", "22.65 to 23.57"],
        ["ABS-108GGS-M10", "1722x1134x30", "440 to 460", "22.53 to 23.56"],
        ["ABS-132GGS-G12R", "2382x1134x30", "630 to 650", "23.32 to 24.06"],
        ["ABS-120GGS-G12R", "2172x1134x30", "570 to 590", "23.14 to 23.95"],
        ["ABS-108GGS-G12R", "1960x1134x30", "510 to 530", "22.95 to 23.85"],
        ["ABS-096GGS-G12R", "1762x1134x30", "450 to 470", "22.52 to 23.52"],
      ],
    }),
  },
  glassGlassAllBlack: {
    downloadName: "Glass/Glass All Black Datasheet",
    title: "Glass/Glass All Black PV Module Datasheets",
    description:
      "Complete collection of Glass/Glass all black solar panel datasheets with premium black frame design.",
    ...family({
      folder: "2.Glass Glass, All black module",
      productType: "Glass/Glass-Black Frame",
      models: [
        ["ABS-144GGB-M10", "2278x1134x30", "595 to 615", "23.03 to 23.81"],
        ["ABS-132GGB-M10", "2089x1134x30", "540 to 560", "22.80 to 23.64"],
        ["ABS-120GGB-M10", "1908x1134x30", "490 to 510", "22.65 to 23.57"],
        ["ABS-108GGB-M10", "1722x1134x30", "440 to 460", "22.53 to 23.56"],
        ["ABS-132GGB-G12R", "2382x1134x30", "630 to 650", "23.32 to 24.06"],
        ["ABS-120GGB-G12R", "2172x1134x30", "570 to 590", "23.14 to 23.95"],
        ["ABS-108GGB-G12R", "1960x1134x30", "510 to 530", "22.95 to 23.85"],
        ["ABS-096GGB-G12R", "1762x1134x30", "450 to 470", "22.52 to 23.52"],
      ],
    }),
  },
  glassTransparentBacksheet: {
    downloadName: "Glass/Transparent Backsheet Datasheet",
    title: "Glass/Transparent Backsheet PV Module Datasheets",
    description:
      "Complete collection of Glass/Transparent backsheet solar panel datasheets for architectural applications.",
    ...family({
      folder: "3.Glass Transparent Backsheet",
      productType: "Glass/Transparent Back sheet-Silver Frame",
      models: [
        ["ABS-144GTS-M10", "2278x1134x30", "595 to 615", "23.03 to 23.81"],
        ["ABS-132GTS-M10", "2089x1134x30", "540 to 560", "22.80 to 23.64"],
        ["ABS-120GTS-M10", "1908x1134x30", "490 to 510", "22.65 to 23.57"],
        ["ABS-108GTS-M10", "1722x1134x30", "440 to 460", "22.53 to 23.56"],
        ["ABS-132GTS-G12R", "2382x1134x30", "620 to 640", "22.95 to 23.69"],
        ["ABS-120GTS-G12R", "2172x1134x30", "560 to 580", "22.74 to 23.55"],
        ["ABS-108GTS-G12R", "1960x1134x30", "500 to 520", "22.50 to 23.40"],
        ["ABS-096GTS-G12R", "1762x1134x30", "445 to 465", "22.27 to 23.27"],
      ],
    }),
  },
  glassWhiteBacksheet: {
    downloadName: "Glass/White Backsheet Datasheet",
    title: "Glass/White Backsheet PV Module Datasheets",
    description:
      "Complete collection of Glass/White backsheet solar panel datasheets for optimal heat dissipation.",
    ...family({
      folder: "4.Glass White Backsheet",
      productType: "Glass/White Back Sheet-Silver Frame",
      models: [
        ["ABS-144GWS-M10", "2278x1134x30", "595 to 615", "23.03 to 23.81"],
        ["ABS-132GWS-M10", "2089x1134x30", "540 to 560", "22.80 to 23.64"],
        ["ABS-120GWS-M10", "1908x1134x30", "490 to 510", "22.65 to 23.57"],
        ["ABS-108GWS-M10", "1722x1134x30", "440 to 460", "22.53 to 23.56"],
        ["ABS-132GWS-G12R", "2382x1134x30", "610 to 630", "22.58 to 23.32"],
        ["ABS-120GWS-G12R", "2172x1134x30", "550 to 570", "22.33 to 23.14"],
        ["ABS-108GWS-G12R", "1960x1134x30", "495 to 515", "22.27 to 23.17"],
        ["ABS-096GWS-G12R", "1762x1134x30", "435 to 455", "21.77 to 22.77"],
      ],
    }),
  },
  glassBlackBacksheet: {
    downloadName: "Glass/Black Backsheet Datasheet",
    title: "Glass/Black Backsheet PV Module Datasheets",
    description:
      "Complete collection of Glass/Black backsheet solar panel datasheets combining performance with aesthetic appeal.",
    ...family({
      folder: "5.Glass Black back sheet – all black Module",
      productType: "Glass/Black Back Sheet-Black Frame",
      models: [
        ["ABS-144GBB-M10", "2278x1134x30", "595 to 615", "23.03 to 23.81"],
        ["ABS-132GBB-M10", "2089x1134x30", "540 to 560", "22.80 to 23.64"],
        ["ABS-120GBB-M10", "1908x1134x30", "490 to 510", "22.65 to 23.57"],
        ["ABS-108GBB-M10", "1722x1134x30", "440 to 460", "22.53 to 23.56"],
        ["ABS-132GBB-G12R", "2382x1134x30", "610 to 630", "22.58 to 23.32"],
        ["ABS-120GBB-G12R", "2172x1134x30", "550 to 570", "22.33 to 23.14"],
        ["ABS-108GBB-G12R", "1960x1134x30", "495 to 515", "22.27 to 23.17"],
        ["ABS-096GBB-G12R", "1762x1134x30", "435 to 455", "21.77 to 22.77"],
      ],
    }),
  },
};

// Efficiency range across every module family, e.g. for product overviews.
export const moduleEfficiencyRange = rangeOf(
  Object.values(moduleFamilies).flatMap((f) => f.models.map((m) => m.efficiency))
);

// One datasheet per BIPV product, as supplied by the client.
export const bipvDatasheets = {
  semiTransparent: bipvSemiTransparent,
  colored: bipvColored,
  roofTile: bipvRoofTile,
  customPrinted: bipvCustomPrinted,
};

export const bipvDownloads = {
  downloadName: "BIPV Datasheets",
  title: "BIPV Product Datasheets",
  description:
    "Building-Integrated Photovoltaic product datasheets. Sizes, colours and prints can be customized.",
  models: [
    {
      name: "ABS-Semi-Transparent BIPV Glass Panel",
      wattage: "270",
      efficiency: "12.48",
      pdfFile: bipvSemiTransparent,
    },
    {
      name: "ABS-Colored BIPV Panel",
      wattage: "460 to 520",
      efficiency: "23.22 to 23.59",
      pdfFile: bipvColored,
    },
    {
      name: "ABS-Solar Roof Tile",
      wattage: "105",
      efficiency: "20.66",
      pdfFile: bipvRoofTile,
    },
    {
      name: "ABS-Custom Printed Front-Glass BIPV Panel",
      wattage: "640",
      efficiency: "23.88",
      pdfFile: bipvCustomPrinted,
    },
  ],
};

export const documents = {
  warranty: warrantyPdf,
  installationManual: installationManualPdf,
  unpackingInstructions: unpackingInstructionsPdf,
  productCatalogue: productCataloguePdf,
};
