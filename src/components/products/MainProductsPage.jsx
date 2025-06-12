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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-10">
      {/* Header - Using the main site header */}
      <Header page="products" />

      {/* Product Cards */}
      <div className="container mx-auto px-4 py-12 mt-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {mainProducts.map((product, index) => (
            <Link
              key={index}
              to={product.path}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-400 transform hover:-translate-y-1 hover:scale-102"
            >
              {/* Product Image Container */}
              <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10"></div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                  Premium
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-slate-700 transition-colors duration-300">
                  {product.title}
                </h2>

                {/* Product descriptions */}
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {index === 0 &&
                    "High-efficiency N-Type TOPCon solar modules with premium glass-glass design and 30-year warranty"}
                  {index === 1 &&
                    "Advanced string inverters with maximum power point tracking and smart monitoring capabilities"}
                  {index === 2 &&
                    "Complete Engineering, Procurement & Construction services for large-scale solar installations"}
                </p>

                {/* Features list */}
                <div className="space-y-1.5 mb-4">
                  {index === 0 && (
                    <>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        <span>22.65-23.42% Efficiency</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        <span>Bifacial Technology</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        <span>Monofacial technology</span>
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        <span>99.5% Peak Efficiency</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        <span>Smart Monitoring</span>
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        <span>Turnkey Solutions</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        <span>Project Management</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Call to action */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-amber-600 group-hover:text-orange-600 transition-colors duration-300">
                    Explore Products
                  </span>
                  <div className="w-7 h-7 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300 group-hover:scale-105">
                    <svg
                      className="w-3 h-3 text-white transform group-hover:translate-x-0.5 transition-transform duration-300"
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
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"></div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Need Help Choosing the Right Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm">
            Our expert team is here to help you find the perfect solar solution
            for your specific needs and requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
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
