import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const mainProducts = [
  {
    title: "Solar Panels",
    image:
      "https://silfabsolar.com/wp-content/uploads/2021/08/Panels_Commercial.png",
    path: "/products/solar-panels",
  },
  {
    title: "Solar Inverters",
    image:
      "https://blog.athom.com/wp-content/uploads/2024/12/goodwe-inverter.png",
    path: "/products/solar-inverters",
  },
  {
    title: "EPC Solution",
    image:
      "https://silfabsolar.com/wp-content/uploads/2021/07/Homepage_type_installer.jpg",
    path: "/products/epc-solution",
  },
];

const MainProductsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header - Using the main site header */}
      <Header page="products" />

      {/* Product Cards */}
      <div className="container mx-auto px-4 py-16 mt-20 relative  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {mainProducts.map((product, index) => (
            <Link
              key={index}
              to={product.path}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
            >
              {/* Product Image Container */}
              <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10"></div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                />
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Premium
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                  {product.title}
                </h2>

                {/* Product descriptions */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {index === 0 &&
                    "High-efficiency N-Type TOPCon solar modules with premium glass-glass design and 30-year warranty"}
                  {index === 1 &&
                    "Advanced string inverters with maximum power point tracking and smart monitoring capabilities"}
                  {index === 2 &&
                    "Complete Engineering, Procurement & Construction services for large-scale solar installations"}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6">
                  {index === 0 && (
                    <>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span>22.65-23.42% Efficiency</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span>Bifacial Technology</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span>Monofacial technology</span>
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span>99.5% Peak Efficiency</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span>Smart Monitoring</span>
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Turnkey Solutions</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Project Management</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Call to action */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-amber-600 group-hover:text-orange-600 transition-colors duration-300">
                    Explore Products
                  </span>
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need Help Choosing the Right Solution?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert team is here to help you find the perfect solar solution
            for your specific needs and requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact Our Experts
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainProductsPage;
