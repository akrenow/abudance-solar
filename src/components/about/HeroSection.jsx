import React from "react";
import about from "../../assets/images/aboutus.png";
const HeroSection = ({ page }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* image background - now full screen */}
      <div className="absolute inset-0 w-screen h-screen z-0">
        <img
          src={about}
          alt="About Bronze Solar"
          className="absolute inset-0 w-full h-full object-cover"
        />{" "}
      </div>

      {/* Content */}
      {page === "about" && (
        <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex items-center">
          <div
            className="
      flex items-center
      rounded-2xl
      bg-black/20
      backdrop-blur-md
      border border-white/15
      shadow-xl

      p-5 sm:p-6 md:p-10
      w-full sm:max-w-xl md:max-w-2xl
    "
          >
            <div className="w-full">
              <h1
                className="
          text-2xl
          sm:text-3xl
          md:text-5xl
          font-bold
          text-white
          mb-4 sm:mb-5 md:mb-6
        "
              >
                About Bronze Solar
              </h1>

              <p
                className="
          text-sm
          sm:text-base
          md:text-xl
          text-white/90
          leading-relaxed
          mb-6 sm:mb-7 md:mb-8
        "
              >
                Our AI-powered European highly-automated manufacturing facility
                produces 600 MW annually, using advanced TOPCon, HJT, and IBC
                technologies to deliver high-efficiency, top-quality solar
                modules. With cutting-edge automation, we drive sustainability
                and excellence in renewable energy.
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-5 md:gap-6">
                <div
                  className="
            rounded-lg
            px-4 py-3 sm:px-5 sm:py-4
            bg-white/15
            backdrop-blur-sm
            border border-white/20
          "
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    KEZAD
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80">
                    Abu Dhabi, UAE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
