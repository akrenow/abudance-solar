import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import vedio1 from "@/assets/videos/video_1.mp4";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("lg");
  const swiperRef = useRef(null);

  // Screen size detection
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 480) setScreenSize("xs");
      else if (width < 768) setScreenSize("sm");
      else if (width < 1024) setScreenSize("md");
      else if (width < 1280) setScreenSize("lg");
      else setScreenSize("xl");
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const slides = [
    {
      id: 1,
      imageUrl: vedio1,
      title: "Solar Manufacturing Excellence",
      highlight: "Abundance Solar",
      description:
        "Pioneering the future of sustainable energy with cutting-edge solar technology from our state-of-the-art UAE facility.",
      stats: [
        { value: "28,000 m²", label: "Industrial Plot" },
        { value: "600MW+", label: "Annual Capacity by 2026" },
        { value: "KEZAD", label: "Abu Dhabi" },
      ],
      cta: {
        text: "Explore Our Products",
        link: "/products",
      },
      secondaryAction: {
        text: "",
        icon: "",
      },
      styles: {
        container:
          "bg-white/50 shadow-xl ring-1 ring-white/40 backdrop-blur-lg",
        title: "text-gray-900",
        highlight: "text-secondary",
        description: "text-gray-700",
        statsContainer: "bg-white/20 border-secondary/20",
        statsValue: "text-secondary",
        statsLabel: "text-gray-700",
        primaryButton: "bg-secondary hover:bg-secondary/90 text-white",
        secondaryButton:
          "bg-transparent text-secondary border-secondary/30 hover:border-secondary",
      },
    },
    {
      id: 2,
      imageUrl: image2,
      title: "Global Renewable",
      highlight: "Leadership",
      description:
        "Driving the worldwide transition to clean energy with UAE manufacturing excellence and innovation.",
      stats: [
        { value: "2024", label: "Established" },
        { value: "50+", label: "Expert Team" },
        { value: "24/7", label: "Operations" },
      ],
      cta: {
        text: "Contact Us",
        link: "/contact",
      },
      secondaryAction: {
        text: "",
        icon: "",
      },
      styles: {
        container:
          "bg-white/50 shadow-xl ring-1 ring-white/40 backdrop-blur-lg",
        title: "text-gray-900",
        highlight: "text-secondary",
        description: "text-gray-700",
        statsContainer: "bg-white/20 border-secondary/20",
        statsValue: "text-secondary",
        statsLabel: "text-gray-700",
        primaryButton: "bg-secondary hover:bg-secondary/90 text-white",
        secondaryButton:
          "bg-transparent text-secondary border-secondary/30 hover:border-secondary",
      },
    },
    {
      id: 3,
      imageUrl: image1,
      title: "Innovation for Tomorrow",
      highlight: "Sustainable Future",
      description:
        "Highly automated European manufacturing technology with zero Human intervention",
      stats: [
        { value: "15yrs", label: "Product Warranty" },
        { value: "30yrs", label: "Linear Power Performance Warranty" },
        {
          value: "Highly automated",
          label:
            "European manufacturing technology with zero Human intervention",
        },
      ],
      cta: {
        text: "Learn More",
        link: "/about",
      },
      secondaryAction: {
        text: "",
        icon: "",
      },
      styles: {
        container:
          "bg-white/50 shadow-xl ring-1 ring-white/40 backdrop-blur-lg",
        title: "text-gray-900",
        highlight: "text-secondary",
        description: "text-gray-700",
        statsContainer: "bg-white/20 border-secondary/20",
        statsValue: "text-secondary",
        statsLabel: "text-gray-700",
        primaryButton: "bg-secondary hover:bg-secondary/90 text-white",
        secondaryButton:
          "bg-transparent text-secondary border-secondary/30 hover:border-secondary",
      },
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  // Navigation handlers
  const goToPrevious = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Get current slide styles
  const currentSlide = slides[activeIndex];
  const styles = currentSlide.styles;

  // Responsive classes based on screen size
  const getResponsiveClasses = () => {
    const classes = {
      // Container positioning and sizing
      contentContainer:
        screenSize === "xs"
          ? "absolute bottom-20 left-2 right-2 z-10"
          : screenSize === "sm"
          ? "absolute bottom-20 left-4 right-4 z-10"
          : screenSize === "md"
          ? "absolute bottom-8 left-6 right-6 z-10 max-w-lg"
          : "absolute bottom-8 left-8 z-10 max-w-md",

      // Content box padding with responsive transparency
      contentBox:
        screenSize === "xs"
          ? "p-3 rounded-lg backdrop-blur-sm bg-white/50"
          : screenSize === "sm"
          ? "p-4 rounded-xl backdrop-blur-md bg-white/60"
          : "p-5 rounded-xl backdrop-blur-md",

      // Title sizing
      // Smaller title sizing
      title:
        screenSize === "xs"
          ? "text-sm font-bold mb-1"
          : screenSize === "sm"
          ? "text-base font-bold mb-1"
          : "text-lg font-bold mb-2",

      description:
        screenSize === "xs"
          ? "text-xs mb-2 leading-tight"
          : screenSize === "sm"
          ? "text-sm mb-3 leading-tight"
          : "text-sm mb-3 leading-relaxed",

      // Horizontal stats layout for compactness
      statsGrid:
        screenSize === "xs"
          ? "flex gap-1 mb-2"
          : screenSize === "sm"
          ? "flex gap-2 mb-3"
          : "flex gap-3 mb-3",

      // Very compact stats container
      statsContainer:
        screenSize === "xs"
          ? "rounded px-2 py-1 border transition-all duration-300 flex-1 text-center"
          : screenSize === "sm"
          ? "rounded-md px-2 py-1.5 border transition-all duration-300 flex-1 text-center"
          : "rounded-lg px-3 py-2 border transition-all duration-300 flex-1 text-center",

      // Compact stats values and labels
      statsValue:
        screenSize === "xs"
          ? "text-xs font-bold"
          : screenSize === "sm"
          ? "text-sm font-bold"
          : "text-base font-bold",

      statsLabel:
        screenSize === "xs" ? "text-xs opacity-80" : "text-xs opacity-90",

      // Buttons
      buttonContainer: "flex flex-wrap gap-2 sm:gap-3 md:gap-4",

      primaryButton:
        screenSize === "xs"
          ? "px-4 py-2 text-sm font-medium rounded-full flex items-center gap-1 transition-all duration-300"
          : screenSize === "sm"
          ? "px-5 py-2.5 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-300"
          : "px-6 py-3 font-medium rounded-full flex items-center gap-2 transition-all duration-300",

      secondaryButton:
        screenSize === "xs"
          ? "px-4 py-2 text-sm font-medium rounded-full flex items-center gap-1 transition-all duration-300"
          : screenSize === "sm"
          ? "px-5 py-2.5 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-300"
          : "px-6 py-3 font-medium rounded-full flex items-center gap-2 transition-all duration-300",

      // Navigation
      navContainer:
        screenSize === "xs"
          ? "absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full"
          : screenSize === "sm"
          ? "absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full"
          : "absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full",

      navButton:
        screenSize === "xs"
          ? "flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
          : screenSize === "sm"
          ? "flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
          : "flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group",

      navIcon:
        screenSize === "xs"
          ? "w-4 h-4 text-white group-hover:text-white/90 transition-colors"
          : "w-5 h-5 text-white group-hover:text-white/90 transition-colors",

      buttonIcon: screenSize === "xs" ? "w-3 h-3" : "w-4 h-4",
    };

    return classes;
  };

  const responsiveClasses = getResponsiveClasses();

  return (
    <section className="relative h-[70vh] w-screen max-h-[70vh] md:h-[80vh] md:max-h-[80vh] max-w-full overflow-hidden">
      {" "}
      {/* Background Swiper with Changing Images */}
      <div className="absolute inset-0 z-0">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={handleSlideChange}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
          }}
          navigation={false}
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="absolute inset-0 bg-black/40"></div>
              {slide.imageUrl === vedio1 ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.imageUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.imageUrl}
                  alt={slide.title}
                  loading="lazy"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Navigation Controls */}
      <div className={responsiveClasses.navContainer}>
        <button
          onClick={goToPrevious}
          className={responsiveClasses.navButton}
          aria-label="Previous slide"
        >
          <svg
            className={responsiveClasses.navIcon}
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

        {/* Custom Pagination */}
        <div
          className="custom-pagination"
          style={{ width: "fit-content" }}
        ></div>

        <button
          onClick={goToNext}
          className={responsiveClasses.navButton}
          aria-label="Next slide"
        >
          <svg
            className={responsiveClasses.navIcon}
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
      </div>
      {/* Dynamic Content Container */}
      <div className={responsiveClasses.contentContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`${responsiveClasses.contentBox} ${styles.container}`}
          >
            <motion.div
              whileHover={screenSize !== "xs" ? { scale: 1.02 } : {}}
              className="relative inline-block mb-3 sm:mb-4 md:mb-6"
            >
              <h1 className={`${responsiveClasses.title} ${styles.title}`}>
                {screenSize === "xs" ? (
                  <>
                    {currentSlide.title}
                    <br />
                    <span className={styles.highlight}>
                      {currentSlide.highlight}
                    </span>
                  </>
                ) : (
                  <>
                    {currentSlide.title}{" "}
                    <span className={styles.highlight}>
                      {currentSlide.highlight}
                    </span>
                  </>
                )}
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-secondary w-full origin-left"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`${responsiveClasses.description} ${styles.description}`}
            >
              {screenSize === "xs"
                ? currentSlide.description.substring(0, 80) + "..."
                : currentSlide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={responsiveClasses.statsGrid}
            >
              {currentSlide.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={screenSize !== "xs" ? { scale: 1.05 } : {}}
                  whileTap={screenSize !== "xs" ? { scale: 0.95 } : {}}
                  className={`${responsiveClasses.statsContainer} ${styles.statsContainer}`}
                >
                  <div
                    className={`${responsiveClasses.statsValue} ${styles.statsValue}`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`${responsiveClasses.statsLabel} ${styles.statsLabel}`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={responsiveClasses.buttonContainer}
            >
              <motion.a
                whileHover={screenSize !== "xs" ? { scale: 1.05 } : {}}
                whileTap={screenSize !== "xs" ? { scale: 0.95 } : {}}
                href={currentSlide.cta.link}
                className={`${responsiveClasses.primaryButton} ${styles.primaryButton}`}
              >
                {currentSlide.cta.text}
                <svg
                  className={responsiveClasses.buttonIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Custom Styles for Pagination */}
      <style>{`
        .custom-bullet {
          width: ${
            screenSize === "xs" ? "8px" : screenSize === "sm" ? "10px" : "12px"
          };
          height: ${
            screenSize === "xs" ? "8px" : screenSize === "sm" ? "10px" : "12px"
          };
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
          margin: 0 ${screenSize === "xs" ? "2px" : "3px"};
        }

        .custom-bullet-active {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(255, 255, 255, 0.9);
          transform: scale(${screenSize === "xs" ? "1.1" : "1.2"});
        }

        .custom-bullet:hover {
          background: rgba(255, 255, 255, 0.6);
          border-color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
