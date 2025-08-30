import { useRef } from "react";
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
      className="py-8 md:py-16 lg:py-24 my-6 md:my-12 relative overflow-hidden"
      style={{
        backgroundImage: `url(${yellowBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Geometric background patterns - Simplified for mobile */}
      <div className="absolute inset-0 opacity-5 md:opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-4 md:left-10 w-16 h-16 md:w-32 md:h-32 border-2 border-secondary rotate-45 rounded-lg"></div>
        <div className="absolute bottom-1/3 right-8 md:right-16 w-12 h-12 md:w-24 md:h-24 bg-primary/20 rotate-12 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 md:w-16 md:h-16 bg-secondary/20 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Modern Heading Design */}
        <div className="text-center mb-8 md:mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white relative z-10">
              About Us
            </h2>
          </div>
          <div className="w-16 md:w-24 h-1 bg-white mx-auto rounded-full mt-4"></div>
        </div>

        {/* Redesigned Main Content with Split Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
            
            {/* Image Section - Hexagonal Design */}
            <div className="w-full lg:order-1 relative">
              <div className="relative group">
                {/* Hexagonal frame - Hidden on mobile */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 transform rotate-3 rounded-[2rem] transition-transform duration-500 group-hover:rotate-6"></div>
                <div className="hidden md:block absolute inset-0 bg-gradient-to-tl from-primary/10 to-secondary/10 transform -rotate-3 rounded-[2rem] transition-transform duration-500 group-hover:-rotate-6"></div>
                
                {/* Main image container */}
                <div className="relative bg-white rounded-xl md:rounded-[2rem] p-3 md:p-6 shadow-xl md:shadow-2xl overflow-hidden">
                  <div className="relative overflow-hidden rounded-lg md:rounded-[1.5rem]">
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
                      className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
                    >
                      {aboutImages.map((img, idx) => (
                        <SwiperSlide key={idx} className="relative">
                          <img
                            src={img}
                            alt={`About Bronze Solar ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                          {/* Modern counter */}
                          <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-secondary text-white px-2 py-1 md:px-3 md:py-1 rounded-md md:rounded-lg text-xs md:text-sm font-bold shadow-lg">
                            0{idx + 1}
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  
                  {/* Floating indicators */}
                  <div className="absolute bottom-3 right-3 md:bottom-6 md:right-6 flex gap-1 md:gap-2">
                    {aboutImages.map((_, idx) => (
                      <div 
                        key={idx} 
                        className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary/50 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Modern Card Design */}
            <div className="w-full lg:order-2 flex flex-col justify-center">
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg w-fit">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <span className="text-xs md:text-sm font-bold text-secondary uppercase tracking-wider">Leading Manufacturer</span>
                </div>

                {/* Main heading */}
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-secondary leading-tight">
                  Pioneering Solar Excellence in the UAE
                </h3>
                
                {/* Content cards */}
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border-l-4 border-secondary">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                      Abundance Solar Panels Industries LLC, based in KEZAD, UAE, is a
                      leading solar panel manufacturer with a{" "}
                      <span className="font-bold text-secondary bg-secondary/10 px-1 md:px-2 py-0.5 md:py-1 rounded-md md:rounded-lg">600MW annual capacity</span>.
                    </p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border-l-4 border-primary">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Utilizing advanced European technology, we produce
                      high-efficiency N-type TOPCon, HJT, and IBC photovoltaic
                      modules, driving innovation and sustainability to make renewable
                      energy accessible worldwide, supporting the UAE&apos;s vision
                      for a green future.
                    </p>
                  </div>
                </div>

                {/* Modern CTA */}
                <div className="pt-2 md:pt-4">
                  <a
                    href="/about"
                    className="group relative inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-secondary via-secondary to-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-xl md:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <span>Discover Our Story</span>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
