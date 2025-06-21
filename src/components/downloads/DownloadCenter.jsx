import { useState } from "react";
import {
  X,
  Download,
  Eye,
  FileText,
  Shield,
  Settings,
  ChevronRight,
  Award,
} from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

// Import PDF files for datasheets
import WarrantyPDF from "../../assets/pdf/LIMITED AND LINEAR WARRANTY OF PV MODULES-ABUNDANCE.pdf";

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

const DownloadCenter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Datasheet collections with all model PDFs
  const datasheetCollections = {
    "Glass/Glass Bifacial Datasheet": {
      title: "Glass/Glass Bifacial PV Module Datasheets",
      description:
        "Complete collection of Glass/Glass bifacial solar panel datasheets with silver frame construction.",
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
    "Glass/Glass All Black Datasheet": {
      title: "Glass/Glass All Black PV Module Datasheets",
      description:
        "Complete collection of Glass/Glass all black solar panel datasheets with premium black frame design.",
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
    "Glass/Transparent Backsheet Datasheet": {
      title: "Glass/Transparent Backsheet PV Module Datasheets",
      description:
        "Complete collection of Glass/Transparent backsheet solar panel datasheets for architectural applications.",
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
    "Glass/White Backsheet Datasheet": {
      title: "Glass/White Backsheet PV Module Datasheets",
      description:
        "Complete collection of Glass/White backsheet solar panel datasheets for optimal heat dissipation.",
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
    "Glass/Black Backsheet Datasheet": {
      title: "Glass/Black Backsheet PV Module Datasheets",
      description:
        "Complete collection of Glass/Black backsheet solar panel datasheets combining performance with aesthetic appeal.",
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
  };

  const downloadCategories = [
    {
      id: "datasheets",
      name: "Product Datasheets",
      icon: FileText,
      description:
        "Comprehensive technical specifications for all solar panel models",
      color: "from-amber-500 to-orange-500",
      files: [
        { name: "Glass/Glass Bifacial Datasheet", hasPopup: true },
        { name: "Glass/Glass All Black Datasheet", hasPopup: true },
        { name: "Glass/Transparent Backsheet Datasheet", hasPopup: true },
        { name: "Glass/White Backsheet Datasheet", hasPopup: true },
        { name: "Glass/Black Backsheet Datasheet", hasPopup: true },
      ],
    },
    {
      id: "warranty",
      name: "Warranty Documents",
      icon: Shield,
      description: "Product warranties and claim procedures",
      color: "from-green-500 to-green-600",
      files: [
        {
          name: "Limited and Linear Warranty",
          file: WarrantyPDF,
          hasPopup: false,
        },
        {
          name: "Warranty Claim Form",
          url: "/downloads/warranty/claim-form.pdf",
          hasPopup: false,
        },
      ],
    },
    {
      id: "installation",
      name: "Installation Manuals",
      icon: Settings,
      description: "Installation guides and safety procedures",
      color: "from-slate-600 to-slate-700",
      files: [
        {
          name: "Solar PV Modules Installation Manual",
          url: "/src/assets/pdf/Abundance Installation instruction.pptx",
          hasPopup: false,
        },
        {
          name: "Safety Precautions",
          url: "/downloads/installation/safety.pdf",
          hasPopup: false,
        },
      ],
    },
    {
      id: "certificates",
      name: "Certificates",
      icon: Award,
      description: "Product certifications and compliance documents",
      color: "from-amber-500 to-orange-500",
      files: [
        {
          name: "IEC(TUV) ",
          url: "/downloads/installation/manual.pdf",
          hasPopup: false,
        },
        {
          name: "UL",
          url: "/downloads/installation/safety.pdf",
          hasPopup: false,
        },
      ],
    },
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
    } else if (file.url) {
      window.open(file.url, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header page="downloads" />

      {/* Main Content */}
      <div className="container mx-auto px-3 py-8 mt-20 relative z-20">
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
                      {category.name}
                    </h2>
                    <p className="text-white/90 text-xs leading-tight">
                      {category.description}
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
                          <div className="w-7 h-7 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center group-hover/item:from-amber-500 group-hover/item:to-orange-500 transition-all duration-300">
                            <FileText
                              size={14}
                              className="text-gray-600 group-hover/item:text-white transition-colors duration-300"
                            />
                          </div>
                          <div className="text-left">
                            <div className="font-medium text-xs text-gray-800 group-hover/item:text-amber-600 transition-colors duration-300">
                              {file.name}
                            </div>
                            {file.hasPopup && (
                              <div className="text-xs text-gray-500">
                                Click to view all models
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Download
                            size={14}
                            className="text-gray-400 group-hover/item:text-amber-500 transition-colors duration-300"
                          />

                          <ChevronRight
                            size={14}
                            className="text-gray-400 group-hover/item:text-amber-500 transition-colors duration-300"
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
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 rounded-t-2xl flex-shrink-0">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">
                    {selectedCategory.title}
                  </h2>
                  <p className="text-white/90 text-sm">
                    {selectedCategory.description}
                  </p>
                </div>
                <button
                  onClick={closePopup}
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
                        View Product
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-800">
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCategory.models.map((model, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-colors"
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
                            onClick={() => window.open(model.pdfFile, "_blank")}
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
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DownloadCenter;
