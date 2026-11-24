import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PageHeading from "@/components/PageHeading";
import { useLanguage } from "@/i18n/useLanguage";
import { FAQ, FAQ_VALUES } from "@/seo/faq";
import { faqEntities } from "@/seo/structuredData";

// Questions and answers. Uses <details>, so every answer is in the HTML for
// search and AI crawlers even when collapsed.
const Faq = () => {
  const { t, localizePath } = useLanguage();
  const items = FAQ.map((item) => ({
    ...item,
    questionText: t(item.question, FAQ_VALUES),
    answerText: t(item.answer, FAQ_VALUES),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOHead
        title="FAQ | Bronze Solar - Solar Panels, BIPV and Warranty"
        description="Answers to common questions about Bronze Solar: the KEZAD factory in Abu Dhabi, N-type TOPCon solar panels and their efficiency, BIPV products, warranty, testing and datasheets."
        ogImage="https://bronzesolar.com/Croppedlogo.png"
        pageType="FAQPage"
        breadcrumbs={[["Home", "/"], ["FAQ", "/faq"]]}
        mainEntity={faqEntities(items.map((item) => ({ question: item.questionText, answer: item.answerText })))}
      />
      <Header page="faq" />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <PageHeading
          title={t("Frequently Asked Questions")}
          intro={t("Answers about Bronze Solar, our solar panels and BIPV products, the warranty and our factory in Abu Dhabi.")}
        />

        <div className="space-y-3">
          {items.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                <h2 className="text-base md:text-lg font-semibold text-gray-800">{item.questionText}</h2>
                <ChevronDown aria-hidden="true" className="w-5 h-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                <p>{item.answerText}</p>
                {item.link && (
                  <Link
                    to={localizePath(item.link.path)}
                    className="inline-flex items-center gap-1 mt-3 text-primary hover:text-secondary font-medium transition-colors"
                  >
                    {t(item.link.label)}
                    <ChevronRight aria-hidden="true" className="w-4 h-4 rtl:-scale-x-100" />
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Faq;
