import React from "react";
import about from "../../assets/images/aboutus.png";
const HeroSection = ({ page }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0  z-10"></div>

      {/* image background - now full screen */}
      <div className="absolute inset-0 w-screen h-screen z-0">
        <img className="absolute inset-0 w-screen h-screen z-0" src={about} />
      </div>

      {/* Content */}
      {page === "about" && (
        <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex items-center  ">
          <div className="min-h-[00px] flex items-center p-10 rounded-xl">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About BRONZE SOLAR
              </h1>
              {/* <p className="text-xl text-white/90 mb-8">
                Pioneering solar manufacturing excellence in the UAE, driving
                the global transition to sustainable energy with an AI-powered,
                fully automated production facility.
              </p> */}
              <p className="text-xl text-white/90 mb-8">
                Our AI-powered European highly- Automated manufacturing facility
                produces 600 MW annually, using advanced TOPCon, HJT, and IBC
                technologies to deliver high-efficiency, top-quality solar
                modules. With cutting-edge automation, we drive sustainability
                and excellence in renewable energy.
              </p>
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                  <div className="text-3xl font-bold text-white">KEZAD</div>
                  <div className="text-white/80">Abu Dhabi, UAE</div>
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
