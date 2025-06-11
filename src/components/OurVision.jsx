import { Lightbulb, Globe, Zap } from "lucide-react";

const OurVision = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary">
              Our Vision
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>

            <div className="p-8 md:p-12">
              {/* Vision Statement */}
              <div className="text-center mb-12">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  To become a global leader in solar panel manufacturing, driving the adoption of renewable energy and supporting the UAE&apos;s vision for a sustainable, energy-efficient future. Abundance Solar is committed to setting new industry standards through advanced technology and innovative practices, envisioning a world where solar energy powers a resilient and eco-friendly society.
                </p>
              </div>

              {/* Key Vision Points */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    Innovation Leader
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Setting new standards for quality, efficiency, and
                    sustainability through advanced European technology.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    Global Impact
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Making clean energy accessible to all, driving worldwide
                    movement toward reduced carbon emissions.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    Sustainable Future
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Building a cleaner, brighter world where solar energy powers
                    sustainable progress for generations.
                  </p>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="bg-gradient-to-r from-gray-50 to-primary/5 rounded-2xl p-8">
                <p className="text-base text-gray-700 leading-relaxed">
                  As pioneers in the solar industry, we aspire to lead the
                  global renewable energy transition. Our ambition is to make
                  clean energy a universal solution, accessible to all, driving
                  environmental stewardship. Aligned with the UAE&apos;s goal of
                  achieving net-zero emissions and a diversified energy mix, we
                  aim to create a ripple effect that transforms the global
                  energy landscape. Through innovation, strategic partnerships,
                  and unwavering commitment to excellence, we are building a
                  legacy of sustainability that resonates locally and globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
