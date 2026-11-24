import { useState } from "react";
import {
  X,
  Download,
  Eye,
  FileText,
  Shield,
  Settings,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";
import { useLanguage } from "@/i18n/useLanguage";
import SEOHead from "../SEOHead";
import PageHeading from "../PageHeading";
import {
  moduleFamilies,
  bipvDownloads,
  documents,
} from "@/core/constants/products";
import { SITE_URL } from "@/i18n/routing";
import { documentListNode } from "@/seo/structuredData";

// Popup collections, keyed by the file name shown on the Datasheets card
const datasheetCollections = Object.fromEntries(
  [...Object.values(moduleFamilies), bipvDownloads].map((collection) => [
    collection.downloadName,
    collection,
  ])
);

const downloadCategories = [
  {
    id: "datasheets",
    name: "Product Datasheets",
    icon: FileText,
    description:
      "Comprehensive technical specifications for all solar panel and BIPV models",
    color: "from-primary to-primary/90",
    files: Object.keys(datasheetCollections).map((name) => ({
      name,
      hasPopup: true,
    })),
  },
  {
    id: "warranty",
    name: "Warranty Documents",
    icon: Shield,
    description: "Product warranty terms and conditions",
    color: "from-secondary to-secondary/90",
    files: [
      {
        name: "Limited and Linear Warranty",
        file: documents.warranty,
        hasPopup: false,
      },
    ],
  },
  {
    id: "installation",
    name: "Installation Manuals",
    icon: Settings,
    description: "Installation, safety and unpacking instructions",
    color: "from-secondary to-secondary/90",
    files: [
      {
        name: "Solar PV Module Installation & Safety Precautions Manual",
        file: documents.installationManual,
        hasPopup: false,
      },
      {
        name: "Unpacking Instructions",
        file: documents.unpackingInstructions,
        hasPopup: false,
      },
    ],
  },
  {
    id: "catalogue",
    name: "Product Catalogue",
    icon: BookOpen,
    description: "Our complete range of PV modules and BIPV solutions",
    color: "from-primary to-primary/90",
    files: [
      {
        name: "Digital Product Catalogue",
        file: documents.productCatalogue,
        hasPopup: false,
      },
    ],
  },
];

const DownloadCenter = () => {
  const { t, localizePath } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const showProductType = selectedCategory?.models.some((m) => m.productType);

  // Every downloadable file, for structured data
  const allDocuments = [
    ...[...Object.values(moduleFamilies), bipvDownloads].flatMap((collection) =>
      collection.models.map((model) => ({
        name: t("{name} datasheet", { name: model.name }),
        url: model.pdfFile,
      }))
    ),
    ...downloadCategories
      .filter((category) => category.id !== "datasheets")
      .flatMap((category) => category.files.map((file) => ({ name: t(file.name), url: file.file }))),
  ];

  const openDatasheetPopup = (categoryName) => {
    setSelectedCategory(datasheetCollections[categoryName]);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedCategory(null);
  };

  const handleDownload = (file, fileName) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileClick = (file) => {
    if (file.hasPopup) {
      openDatasheetPopup(file.name);
    } else if (file.file) {
      handleDownload(file.file, `${file.name}.pdf`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOHead
        title="Downloads | Bronze Solar - Product Datasheets & Documentation"
        description="Download product datasheets, the product catalogue, installation manuals and warranty documents for Bronze Solar PV modules and BIPV solutions."
        keywords="solar datasheets, PV module specifications, BIPV datasheets, product catalogue, installation manuals, solar documentation, warranty documents"
        ogImage="https://bronzesolar.com/Croppedlogo.png"
        pageType="CollectionPage"
        breadcrumbs={[["Home", "/"], ["Downloads", "/downloads"]]}
        jsonLd={[
          documentListNode({ t, url: SITE_URL + localizePath("/downloads"), documents: allDocuments }),
        ]}
      />
      <Header page="downloads" />

      {/* Main Content */}
      <div className="container mx-auto px-3 py-8 mt-10 relative z-20">
        <PageHeading
          title={t("Downloads")}
          intro={t("Download product datasheets, the product catalogue, installation manuals and warranty documents for Bronze Solar PV modules and BIPV solutions.")}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {downloadCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Category Header */}
                <div
                  className={`bg-gradient-to-r ${category.color} p-3 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 rounded-full -translate-y-6 translate-x-6"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-white/10 rounded-full translate-y-4 -translate-x-4"></div>
                  <div className="relative z-10">
                    <IconComponent size={20} className="text-white mb-1" />
                    <h2 className="text-base font-bold text-white mb-1">
                      {t(category.name)}
                    </h2>
                    <p className="text-white/90 text-xs leading-tight">
                      {t(category.description)}
                    </p>
                  </div>
                </div>

                {/* Files List */}
                <div className="p-3">
                  <div className="space-y-1.5">
                    {category.files.map((file, index) => (
                      <button
                        key={index}
                        onClick={() => handleFileClick(file)}
                        className="w-full flex items-center justify-between p-2.5 bg-gray-50 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 rounded-lg transition-all duration-300 group/item border border-gray-200 hover:border-gray-300"
                      >
                        <div className="flex items-center space-x-2.5">
                          <div className="w-7 h-7 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center group-hover/item:from-primary group-hover/item:to-primary/90 transition-all duration-300">
                            <FileText
                              size={14}
                              className="text-gray-600 group-hover/item:text-white transition-colors duration-300"
                            />
                          </div>
                          <div className="text-start">
                            <div className="font-medium text-xs text-gray-800 group-hover/item:text-secondary transition-colors duration-300">
                              {t(file.name)}
                            </div>
                            {file.hasPopup && (
                              <div className="text-xs text-gray-500">
                                {t("Click to view all models")}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Download
                            size={14}
                            className="text-gray-400 group-hover/item:text-primary transition-colors duration-300"
                          />

                          <ChevronRight
                            size={14}
                            className="text-gray-400 group-hover/item:text-primary transition-colors duration-300 rtl:-scale-x-100"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Datasheet Popup */}
      {isPopupOpen && selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col">
            {/* Popup Header */}
            <div className="bg-gradient-to-r from-primary to-primary/90 p-4 rounded-t-2xl flex-shrink-0">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">
                    {t(selectedCategory.title)}
                  </h2>
                  <p className="text-white/90 text-sm">
                    {t(selectedCategory.description)}
                  </p>
                </div>
                <button
                  onClick={closePopup}
                  aria-label={t("Close")}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
            </div>

            {/* Popup Content - Scrollable */}
            <div className="p-6 overflow-y-auto flex-1">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary/10 to-primary/20">
                      <th className="border border-gray-200 px-4 py-3 text-start text-sm font-semibold text-gray-800">
                        {t("Model Name")}
                      </th>
                      {showProductType && (
                        <th className="border border-gray-200 px-4 py-3 text-start text-sm font-semibold text-gray-800">
                          {t("Product Type")}
                        </th>
                      )}
                      <th className="border border-gray-200 px-4 py-3 text-start text-sm font-semibold text-gray-800">
                        {t("Wattage (WP)")}
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-start text-sm font-semibold text-gray-800">
                        {t("Efficiency (%)")}
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
                    {selectedCategory.models.map((model, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-colors"
                      >
                        <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-800">
                          {model.name}
                        </td>
                        {showProductType && (
                          <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                            {model.productType}
                          </td>
                        )}
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                          {model.wattage}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">
                          {model.efficiency}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-center">
                          <button
                            onClick={() => window.open(model.pdfFile, "_blank")}
                            className="inline-flex items-center justify-center w-8 h-8 bg-secondary hover:bg-secondary/80 text-white rounded-full transition-colors duration-200"
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
                            className="inline-flex items-center justify-center w-8 h-8 bg-primary hover:bg-primary/80 text-white rounded-full transition-colors duration-200"
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
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DownloadCenter;
