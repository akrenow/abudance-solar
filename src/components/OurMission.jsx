import React from "react";
import { Target, Users, Leaf, Award, CheckCircle } from "lucide-react";

const OurMission = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              Our Mission
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-2 bg-gradient-to-r from-secondary via-primary to-secondary"></div>

            <div className="p-8 md:p-12">
              {/* Mission Statement */}
              <div className="text-center mb-12">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  Our mission is to empower businesses, industries, and
                  communities worldwide by providing innovative, high-quality
                  solar panels that accelerate the shift to a sustainable,
                  renewable energy future. We harness state-of-the-art European
                  technology to deliver efficient, reliable, and cost-effective
                  solar solutions while fostering environmental responsibility
                  and building a legacy of sustainability.
                </p>
              </div>

              {/* Mission Pillars */}
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                {/* Left Column - Core Values */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    Our Core Values
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-secondary mb-1">
                          Innovation Excellence
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Harnessing state-of-the-art European technology for
                          efficient and reliable solar solutions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-secondary mb-1">
                          Accessibility & Cost-Effectiveness
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Making clean energy accessible and affordable for all
                          communities worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-secondary mb-1">
                          Environmental Responsibility
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Driving carbon emission reduction through sustainable
                          manufacturing practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Impact Areas */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    Our Impact
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-secondary mb-1">
                        Communities
                      </h4>
                      <p className="text-xs text-gray-600">
                        Empowering local ecosystems
                      </p>
                    </div>

                    <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-secondary mb-1">
                        Industries
                      </h4>
                      <p className="text-xs text-gray-600">
                        Transforming business energy
                      </p>
                    </div>

                    <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-2xl">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-secondary mb-1">
                        Environment
                      </h4>
                      <p className="text-xs text-gray-600">
                        Creating healthier planet
                      </p>
                    </div>

                    <div className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-2xl">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-secondary mb-1">
                        Future
                      </h4>
                      <p className="text-xs text-gray-600">
                        Building sustainable legacy
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* UAE Vision Alignment */}
              <div className="bg-gradient-to-r from-secondary/5 via-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    🇦🇪 Aligned with UAE Vision 2050
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
                </div>
                <p className="text-base text-gray-700 leading-relaxed text-center">
                  Rooted in the UAE&apos;s ambitious vision for a green and
                  energy-efficient future, we drive clean energy adoption
                  through cutting-edge manufacturing processes and sustainable
                  practices. Through collaboration, innovation, and unwavering
                  commitment to excellence, we&apos;re building a legacy of
                  sustainability that resonates locally and globally.By
                  harnessing solar innovation and reducing carbon footprints, we
                  empower communities and industries to thrive sustainably.
                  Together, we pave the way for a brighter, cleaner
                  tomorrow—aligning progress with planetary stewardship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
