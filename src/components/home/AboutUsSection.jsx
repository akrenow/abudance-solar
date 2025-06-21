import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import image4 from "@/assets/images/image4.png";
// import image5 from "@/assets/images/image5.png";
import image6 from "@/assets/images/image1.png";
import yellowBanner from "@/assets/images/yellowBanner.png";

const aboutImages = [
  image4,
  // image5,
  image6,
];

const AboutUsSection = () => {
  const swiperRef = useRef(null);

  return (
    <section
      className="py-5 md:py-10 my-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${yellowBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4 mt-6">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent text-white">
              About Us
            </h2>
          </div>
          <div className="w-24 h-1 bg-white mx-auto rounded-full "></div>
        </div>
        {/* Main Content */}
        <div className="max-w-6xl mx-auto relative">
          {/* Floating decorative elements */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Enhanced dialogue box */}
          <div className="group relative">
            {/* Glow effect background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Main card */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
              {/* Subtle top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              
              <div className="flex flex-col lg:flex-row min-h-[400px]">
                {/* Enhanced Image Carousel */}
                <div className="lg:w-1/2 w-full relative bg-gradient-to-br from-primary/8 via-secondary/5 to-primary/8 overflow-hidden">
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-secondary/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                  
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10"></div>
                  
                  <Swiper
                    ref={swiperRef}
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={1500}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full h-full"
                  >
                    {aboutImages.map((img, idx) => (
                      <SwiperSlide
                        key={idx}
                        className="flex items-center justify-center relative"
                      >
                        <img
                          src={img}
                          alt={`About Abundance Solar ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Image counter badge */}
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-lg z-20">
                          {idx + 1} / {aboutImages.length}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Enhanced Text Content */}
                <div className="lg:w-1/2 w-full p-8 lg:p-12 flex flex-col justify-center relative">
                  {/* Background pattern */}
                  <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-full"></div>
                  
                  {/* Status indicator */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/5 to-primary/5 px-4 py-2 rounded-full mb-6 w-fit border border-secondary/10">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-secondary/80 uppercase tracking-wide">Leading Manufacturer</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4 leading-tight">
                    Pioneering Solar Excellence in the UAE
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-700 text-base leading-relaxed">
                      Abundance Solar Panels Industries LLC, based in KEZAD, UAE, is a
                      leading solar panel manufacturer with a{" "}
                      <span className="font-semibold text-secondary bg-secondary/5 px-1 rounded">600MW annual capacity</span>.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Utilizing advanced European technology, we produce
                      high-efficiency N-type TOPCon, HJT, and IBC photovoltaic
                      modules, driving innovation and sustainability to make renewable
                      energy accessible worldwide, supporting the UAE&apos;s vision
                      for a green future.
                    </p>
                  </div>

                  {/* Enhanced CTA */}
                  <div className="flex items-center gap-4">
                    <a
                      href="/about"
                      className="group/btn relative inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-primary text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25 transform hover:scale-105"
                    >
                      <span>Learn more about us</span>
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-2xl opacity-0 group-hover/btn:opacity-20 blur-xl transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
