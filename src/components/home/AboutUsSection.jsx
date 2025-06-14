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
      className="py-5 md:py-15 my-10 relative overflow-hidden"
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 mt-10">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent text-white">
              About Us
            </h2>
          </div>
          <div className="w-24 h-1 bg-white mx-auto rounded-full "></div>
        </div>
        {/* Main Content */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row items-center">
          {/* Image Carousel */}
          <div className="md:w-1/2 w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 p-0 md:p-0 min-h-[320px] !m-0">
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={1200}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full bg-white"
            >
              {aboutImages.map((img, idx) => (
                <SwiperSlide key={idx} className="bg-white">
                  <img
                    src={img}
                    alt={`About Abundance Solar ${idx + 1}`}
                    className="rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm object-cover mx-auto m-2"
                    style={{ minHeight: 260, maxHeight: 320 }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Text */}
          <div className="md:w-1/2 w-full p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Pioneering Solar Excellence in the UAE
            </h3>
            <p className="text-gray-700 text-lg mb-4">
              Abundance Solar Panels Industries LLC, based in KEZAD, UAE, is a
              leading solar panel manufacturer with a 600MW annual capacity.
            </p>
            <p className="text-gray-600 text-base mb-2">
              Utilizing advanced European technology, we produce high-efficiency
              N-type TOPCon, HJT, and IBC photovoltaic modules, driving
              innovation and sustainability to make renewable energy accessible
              worldwide, supporting the UAE&apos;s vision for a green future.
            </p>
            <a
              href="/about"
              className="inline-block mt-4 text-secondary underline underline-offset-4 font-medium hover:text-primary transition"
            >
              Learn more about us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
