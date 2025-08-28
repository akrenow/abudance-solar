import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ExternalLink,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(219,132,10,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(27,42,79,0.1)_0%,transparent_50%)]"></div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold">BRONZE SOLAR</h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              BRONZE SOLAR Panels Industries LLC, based in KEZAD, UAE, is a
              leading solar panel manufacturer with a 600MW annual capacity.
              Utilizing advanced European technology, we produce high-efficiency
              N-type TOPCon, HJT, and IBC photovoltaic modules, driving
              innovation and sustainability to make renewable energy accessible
              worldwide, supporting the UAE&apos;s vision for a green future.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/abundance-solar-b6973a370/"
                target="_blank"
                className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <LinkedinIcon className="w-6 h-6 text-white group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com/abundance_solar"
                target="_blank"
                className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <TwitterIcon className="w-6 h-6 text-white group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/people/Abundance-Solar/pfbid035WNvbTiNfc2Lq7C5yjW6A9QDBAYn4Hseca878xxf7n3GsPzSr9WA9FPBaXHnoSw8l/?mibextid=ZbWKwL"
                target="_blank"
                className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FacebookIcon className="w-6 h-6 text-white group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/abundance.solar/"
                target="_blank"
                className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <InstagramIcon className="w-6 h-6 text-white group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  data-readdy="true"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Career
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <a
                  href="https://maps.app.goo.gl/KCWrsf6z5MedCScr5"
                  target="_blank"
                  className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-xl flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <MapPin className="w-6 h-6 text-white group-hover:text-white transition-colors" />
                </a>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed w-full">
                  <div className="font-semibold text-white mb-1">
                    Our Location
                  </div>
                  <div className="whitespace-nowrap">
                    BRONZE SOLAR Panels Industries LLC
                  </div>
                  <div>Plot No. 7-8, KHIA5 KEZAD</div>
                  <div>Abu Dhabi, United Arab Emirates</div>
                </div>
              </li>
              <li className="flex items-start">
                <a
                  href="tel:+971559501737"
                  className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-xl flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Phone className="w-6 h-6 text-white group-hover:text-white transition-colors" />
                </a>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  <div className="font-semibold text-white mb-1">Call Us</div>
                  <div>+971 55 950 1737</div>
                </div>
              </li>
              <li className="flex items-start">
                <a
                  href="mailto:purchase@bronze-solar.com"
                  className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-xl flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Mail className="w-6 h-6 text-white group-hover:text-white transition-colors" />
                </a>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  <div className="font-semibold text-white mb-1">Email Us</div>
                  <div>purchase@bronze-solar.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-gray-700/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Stay Updated
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Subscribe to our newsletter for the latest updates, industry
                insights, and exclusive offers on our solar solutions.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-gray-800/50 text-white border border-gray-600 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="btn-secondary flex items-center justify-center min-w-[140px]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              &copy; 2025 BRONZE SOLAR. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
