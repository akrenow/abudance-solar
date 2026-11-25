import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";
import SectionHeading from "@/components/SectionHeading";

const NewsSection = ({
  title = "Latest News",
  description = "Stay updated with our latest developments, innovations, and industry news.",
  newsItems = [],
  backgroundColor = "bg-gray-50",
}) => {
  const { t, localizePath } = useLanguage();
  return (
    <section className={`section-padding ${backgroundColor}`}>
      <div className="container mx-auto container-padding">
        <SectionHeading title={t(title)} subtitle={t(description)} />

        {newsItems.length > 0 ? (
          <>
            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {newsItems.map((news, index) => (
                <Card
                  key={index}
                  className="card-modern group overflow-hidden h-full hover:shadow-2xl cursor-pointer relative transform transition-all duration-300 hover:scale-[1.02] hover:border-primary"
                  onClick={() => {
                    // Handle both absolute and relative URLs
                    const link = news.readMoreLink || "#";
                    if (link.startsWith("http")) {
                      // External link - open in new tab
                      window.open(link, "_blank");
                    } else {
                      // Internal link - use window.location.href for navigation
                      window.location.href = localizePath(link);
                    }
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={t(news.title)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 start-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold rounded-full shadow-lg">
                      {t(news.category || "Industry News")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Meta Information */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 me-1" />
                        <span dir="ltr">{news.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 me-1" />
                        <span>{t(news.readTime || "5 min read")}</span>
                      </div>
                    </div>

                    {/* Title and Excerpt */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-secondary transition-colors duration-300">
                      {t(news.title)}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
                      {t(news.excerpt)}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center justify-center pt-4 border-t border-gray-100">
                      <Button
                        variant="default"
                        className="bg-primary hover:bg-secondary text-white transition-colors duration-300 font-semibold group/btn flex items-center w-full justify-center py-2"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click event from firing
                          // Handle both absolute and relative URLs
                          const link = news.readMoreLink || "#";
                          if (link.startsWith("http")) {
                            // External link - open in new tab
                            window.open(link, "_blank");
                          } else {
                            // Internal link - use window.location.href for navigation
                            window.location.href = localizePath(link);
                          }
                        }}
                      >
                        {t("Read More")}
                        <ArrowRight className="w-4 h-4 ms-2 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 rtl:-scale-x-100 transition-transform duration-200" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">
              {t("No news items available at the moment.")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
