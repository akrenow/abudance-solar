import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";

const NewsSection = ({
  title = "Latest News",
  description = "Stay updated with our latest developments, innovations, and industry news.",
  newsItems = [],
  viewAllButtonText = "View All News",
  primaryColor = "#1B2A4F",
  secondaryColor = "#DB8400",
  backgroundColor = "bg-gray-50",
}) => {
  return (
    <section className={`section-padding ${backgroundColor}`}>
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-block">
            <h1 className="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-600 to-orange-600 mb-8 leading-tight">
              {title}
            </h1>
            <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 sm:w-48 mx-auto" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed">
            {description}
          </p>
        </div>

        {newsItems.length > 0 ? (
          <>
            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {newsItems.map((news, index) => (
                <Card
                  key={index}
                  className="card-modern group overflow-hidden h-full hover:shadow-2xl"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold rounded-full shadow-lg">
                      {news.category || "Industry News"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Meta Information */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{news.readTime || "5 min read"}</span>
                      </div>
                    </div>

                    {/* Title and Excerpt */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-secondary transition-colors duration-300">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
                      {news.excerpt}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <Button
                        variant="link"
                        className="p-0 text-secondary hover:text-primary transition-colors duration-300 font-semibold group/btn"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </Button>

                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">Share</span>
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-secondary transition-colors cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No news items available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
