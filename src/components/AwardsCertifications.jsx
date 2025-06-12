import React, { useRef, useState, useEffect } from "react";
import { Award, Calendar, Star } from "lucide-react";

const AwardsCertifications = () => {
  const awards = [
    {
      title: "Solar Innovation Award 2025",
      description:
        "Recognized for breakthrough in recyclable solar panel technology",
      year: "2025",
      category: "Innovation",
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    },
    {
      title: "UAE Green Manufacturer Award",
      description: "Honored for sustainable manufacturing practices",
      year: "2024",
      category: "Sustainability",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    },
    {
      title: "KEZAD Excellence in Industry",
      description:
        "Awarded for outstanding contribution to industrial development",
      year: "2023",
      category: "Excellence",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    },
    {
      title: "Best Solar Technology 2024",
      description: "Awarded for innovative N-Type TopCon technology",
      year: "2024",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % awards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [awards.length]);

  const getCategoryColor = (category) => {
    const colors = {
      Innovation: "from-purple-500 to-purple-600",
      Sustainability: "from-green-500 to-green-600",
      Excellence: "from-blue-500 to-blue-600",
      Technology: "from-orange-500 to-orange-600",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + awards.length) % awards.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Awards */}
        <div className="mb-16">
          <div className="text-center mb-12 relative">
            <div className="inline-block">
              <h1 className="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-600 to-orange-600 mb-8 leading-tight">
                Awards & Recognitions
              </h1>
              <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 sm:w-48 mx-auto" />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
              Our commitment to excellence has been recognized by industry
              leaders and organizations worldwide
            </p>
          </div>

          {/* Custom Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / Math.min(3, awards.length))
                  }%)`,
                }}
              >
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden h-full">
                      {/* Image Container */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                        {/* Category Badge */}
                        <div
                          className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getCategoryColor(
                            award.category
                          )} text-white text-sm font-semibold rounded-full shadow-lg`}
                        >
                          {award.category}
                        </div>

                        {/* Year Badge */}
                        <div className="absolute top-4 right-4 flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                          <Calendar className="w-4 h-4 mr-1 text-gray-600" />
                          <span className="text-sm font-semibold text-gray-800">
                            {award.year}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                              {award.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4">
                          {award.description}
                        </p>

                        {/* Excellence Indicator */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-amber-400 mr-1" />
                            <span className="text-sm font-medium text-gray-700">
                              Excellence Award
                            </span>
                          </div>
                          <div className="text-sm text-gray-500">
                            Industry Recognition
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {awards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-orange-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsCertifications;
