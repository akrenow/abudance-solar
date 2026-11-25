import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Mail, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = ({ page, enableGlassEffect = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, localizePath } = useLanguage();

  // Pages that should not have glass effect by default
  const noGlassPages = ["about", "products", "downloads", "contact", "career"];

  // Determine if glass effect should be shown
  const shouldShowGlass = enableGlassEffect && !noGlassPages.includes(page);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > 10 ||
        page === "about" ||
        page === "products" ||
        page === "downloads" ||
        page === "contact" ||
        page === "career"
      ) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <>
      {/* Fixed Header Container - Contains both announcement bar and main header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Announcement Bar */}
        <div className="bg-secondary text-primary text-xs sm:text-sm font-medium">
          <div className="container mx-auto px-4">
            {/* Desktop view */}
            <div className="hidden md:flex items-center justify-center space-x-6 py-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span dir="ltr">+971 55 950 1737</span>
              </div>
              <div className="h-4 w-[2px] bg-primary/80"></div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@bronzesolar.com</span>
              </div>
            </div>

            {/* Mobile view - stacked layout */}
            <div className="md:hidden flex flex-col items-center space-y-1 py-2">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span dir="ltr">+971 55 950 1737</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@bronzesolar.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-white shadow-sm"
              : shouldShowGlass
              ? "bg-transparent"
              : "bg-white shadow-sm"
          }`}
        >
          <div
            className={`container mx-auto px-4 md:px-6 flex items-center justify-between h-20 ${
              !isScrolled && shouldShowGlass ? "backdrop-blur-md" : ""
            }`}
          >
            {/* Logo with glass effect when not scrolled */}
            <div
              className={`flex-shrink-0 ${
                !isScrolled && shouldShowGlass
                  ? "bg-secondary/10 backdrop-blur-md rounded-lg px-3 py-1"
                  : ""
              }`}
            >
              <Link to={localizePath("/")} className="flex items-center">
                <img src={Logo} alt={t("Bronze Solar")} className="h-12 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation with glassmorphism and primary/secondary colors */}
            <nav
              className={`hidden md:flex items-center space-x-8 ${
                !isScrolled && shouldShowGlass
                  ? "bg-secondary/30 backdrop-blur-md rounded-full px-6 py-2"
                  : ""
              }`}
            >
              <Link
                to={localizePath("/")}
                data-readdy="true"
                className={`${
                  isScrolled || !shouldShowGlass
                    ? "text-secondary hover:text-primary"
                    : "text-white hover:text-primary"
                } font-medium transition-colors duration-200`}
              >
                {t("Home")}
              </Link>
              <Link
                to={localizePath("/about")}
                className={`${
                  isScrolled || !shouldShowGlass
                    ? "text-secondary hover:text-primary"
                    : "text-white hover:text-primary"
                } font-medium transition-colors duration-200`}
              >
                {t("About Us")}
              </Link>
              <Link
                to={localizePath("/products")}
                className={`${
                  isScrolled || !shouldShowGlass
                    ? "text-secondary hover:text-primary"
                    : "text-white hover:text-primary"
                } font-medium transition-colors duration-200`}
              >
                {t("Products")}
              </Link>
              <Link
                to={localizePath("/downloads")}
                className={`${
                  isScrolled || !shouldShowGlass
                    ? "text-secondary hover:text-primary"
                    : "text-white hover:text-primary"
                } font-medium transition-colors duration-200`}
              >
                {t("Downloads")}
              </Link>
              <Link
                to={localizePath("/contact")}
                className={`${
                  isScrolled || !shouldShowGlass
                    ? "text-secondary hover:text-primary"
                    : "text-white hover:text-primary"
                } font-medium transition-colors duration-200`}
              >
                {t("Contact")}
              </Link>
              <Link
                to={localizePath("/career")}
                className={`${
                  isScrolled || !shouldShowGlass
                    ? "text-secondary hover:text-primary"
                    : "text-white hover:text-primary"
                } font-medium transition-colors duration-200`}
              >
                {t("Career")}
              </Link>
            </nav>

            {/* Right side elements with glass effect when not scrolled */}
            <div
              className={`hidden md:flex items-center space-x-4 ${
                !isScrolled && shouldShowGlass
                  ? "bg-secondary/20 backdrop-blur-md rounded-full px-4 py-2"
                  : ""
              }`}
            >
              <LanguageSwitcher
                align="end"
                buttonClassName={`${
                  isScrolled || !shouldShowGlass
                    ? "text-secondary border-secondary/50 hover:text-primary hover:border-primary"
                    : "text-white border-white/40 hover:text-primary hover:border-primary"
                } border rounded-full px-3 py-1`}
              />
              <button
                className={`${
                  isScrolled || !shouldShowGlass
                    ? "text-secondary hover:text-primary"
                    : "text-white hover:text-primary"
                } transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button`}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${
                  isScrolled || !shouldShowGlass
                    ? "text-secondary hover:text-primary"
                    : "text-white hover:text-primary"
                } transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg border-t py-4">
              <div className="container mx-auto px-4">
                <nav
                  className="flex flex-col space-y-4"
                  onClick={(e) => e.target.closest("a") && setIsMenuOpen(false)}
                >
                  <Link
                    to={localizePath("/")}
                    data-readdy="true"
                    className="text-secondary hover:text-primary font-medium transition-colors duration-200 py-2"
                  >
                    {t("Home")}
                  </Link>
                  <Link
                    to={localizePath("/about")}
                    className="text-secondary hover:text-primary font-medium transition-colors duration-200 py-2"
                  >
                    {t("About Us")}
                  </Link>
                  <Link
                    to={localizePath("/products")}
                    className="text-secondary hover:text-primary font-medium transition-colors duration-200 py-2"
                  >
                    {t("Products")}
                  </Link>
                  <Link
                    to={localizePath("/downloads")}
                    className="text-secondary hover:text-primary font-medium transition-colors duration-200 py-2"
                  >
                    {t("Downloads")}
                  </Link>
                  <Link
                    to={localizePath("/contact")}
                    className="text-secondary hover:text-primary font-medium transition-colors duration-200 py-2"
                  >
                    {t("Contact")}
                  </Link>
                  <Link
                    to={localizePath("/career")}
                    className="text-secondary hover:text-primary font-medium transition-colors duration-200 py-2"
                  >
                    {t("Career")}
                  </Link>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <LanguageSwitcher
                      align="start"
                      buttonClassName="text-secondary border border-secondary/50 hover:text-primary hover:border-primary rounded-full px-3 py-1"
                    />
                    <button className="text-secondary hover:text-primary transition-colors duration-200">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Spacer div to push content below the fixed header */}
      <div className="h-[108px] md:h-[100px]"></div>
    </>
  );
};

export default Header;
