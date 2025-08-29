import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-10">
      <Header />

      <div className="container mx-auto px-4 py-20 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary opacity-20 select-none">
              404
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              It looks like the page you&apos;re looking for doesn&apos;t exist
              or has been moved. Don&apos;t worry, even the best solar panels
              sometimes need redirection!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/"
              className="group inline-flex items-center bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Home size={20} className="mr-3 group-hover:animate-pulse" />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <ArrowLeft
                size={20}
                className="mr-3 group-hover:-translate-x-1 transition-transform duration-300"
              />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <Search size={24} className="mr-3 text-primary" />
              Looking for something specific?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/products"
                className="group p-6 bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-xl border border-amber-200 hover:border-amber-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Products</h4>
                <p className="text-sm text-gray-600">
                  Browse our solar panels and solutions
                </p>
              </Link>

              <Link
                to="/about"
                className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">About Us</h4>
                <p className="text-sm text-gray-600">
                  Learn about our company and mission
                </p>
              </Link>

              <Link
                to="/contact"
                className="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
                <p className="text-sm text-gray-600">
                  Get in touch with our team
                </p>
              </Link>
            </div>
          </div>

          {/* Fun Solar Fact */}
          <div className="mt-12 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Did you know?</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Solar panels can still generate electricity on cloudy days,
              producing about 10-25% of their rated capacity. Just like how
              we&apos;re here to help even when things don&apos;t go as planned!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PageNotFound;
