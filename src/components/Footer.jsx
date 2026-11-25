import {
  MapPin,
  Phone,
  Mail,
  Send,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
// Light version of the logo (white "BRONZE") for the dark footer
import logo from "../assets/images/logo-dark.webp";
import { useLanguage } from "@/i18n/useLanguage";

const Footer = () => {
  const { t, localizePath } = useLanguage();
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(27,42,79,0.1)_0%,transparent_50%)]"></div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold">                
                <img src={logo} alt={t("Bronze Solar")} width="600" height="200" loading="lazy" decoding="async" className="h-12 w-auto" />
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              {t(
                "Abundance Solar Panels Industries L.L.C, based in KEZAD, UAE, is a leading solar panel manufacturer with a 600MW annual capacity. Utilizing advanced European technology, we produce high-efficiency N-type TOPCon, HJT, and IBC photovoltaic modules, driving innovation and sustainability to make renewable energy accessible worldwide, supporting the UAE's vision for a green future."
              )}
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/company/abundance-solar-panels-industries-llc?originalSubdomain=ae"
                aria-label={`LinkedIn ${t("(opens in a new tab)")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors duration-300"
              >
                <FaLinkedinIn aria-hidden="true" className="w-5 h-5 text-white group-hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://x.com/webronzesolar"
                aria-label={`X ${t("(opens in a new tab)")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors duration-300"
              >
                <FaXTwitter aria-hidden="true" className="w-5 h-5 text-white group-hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/bronzesolar"
                aria-label={`Facebook ${t("(opens in a new tab)")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors duration-300"
              >
                <FaFacebookF aria-hidden="true" className="w-5 h-5 text-white group-hover:text-secondary transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/bronze.solar_?igsh=cHRyYmF3OTM1d2pn"
                aria-label={`Instagram ${t("(opens in a new tab)")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors duration-300"
              >
                <FaInstagram aria-hidden="true" className="w-5 h-5 text-white group-hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">{t("Quick Links")}</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to={localizePath("/")}
                  data-readdy="true"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 me-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t("Home")}
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath("/about")}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 me-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t("About Us")}
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath("/products")}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 me-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t("Products")}
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath("/downloads")}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 me-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t("Downloads")}
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath("/faq")}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 me-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t("FAQ")}
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath("/career")}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 me-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t("Career")}
                </Link>
              </li>
              <li>
                <Link
                  to={localizePath("/contact")}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <ExternalLink className="w-4 h-4 me-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t("Contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">{t("Contact Us")}</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <a
                  href="https://maps.app.goo.gl/xpKYsctNtk8WZ3Fu7"
                  target="_blank"
                  className="group w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center me-4 flex-shrink-0 transition-colors duration-300"
                >
                  <MapPin className="w-6 h-6 text-white group-hover:text-secondary transition-colors" />
                </a>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed w-full">
                  <div className="font-semibold text-white mb-1">
                    {t("Our Location")}
                  </div>
                  <div>ABUNDANCE SOLAR PANELS INDUSTRIES L.L.C</div>
                  <div>{t("Plot No. 7-8, KHIA5, KEZAD")}</div>
                  <div>{t("Abu Dhabi, United Arab Emirates")}</div>
                </div>
              </li>
              <li className="flex items-start">
                <a
                  href="tel:+971559501737"
                  className="group w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center me-4 flex-shrink-0 transition-colors duration-300"
                >
                  <Phone className="w-6 h-6 text-white group-hover:text-secondary transition-colors" />
                </a>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  <div className="font-semibold text-white mb-1">{t("Call Us")}</div>
                  <div dir="ltr">+971 55 950 1737</div>
                </div>
              </li>
              <li className="flex items-start">
                <a
                  href="mailto:info@bronzesolar.com"
                  className="group w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center me-4 flex-shrink-0 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6 text-white group-hover:text-secondary transition-colors" />
                </a>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  <div className="font-semibold text-white mb-1">{t("Email Us")}</div>
                  <div>info@bronzesolar.com</div>
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
                  <Send className="w-5 h-5 me-2" />
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
              &copy; 2025 {t("Bronze Solar. All rights reserved.")}
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
              >
                {t("Privacy Policy")}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
              >
                {t("Terms of Service")}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
              >
                {t("Cookie Policy")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
