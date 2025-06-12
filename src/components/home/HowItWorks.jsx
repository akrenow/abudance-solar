import React from "react";
import { Card } from "@/components/ui/card";
import { Users, FileText, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Consult With Us",
      description:
        "Share your energy needs and business goals with our expert team.",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      title: "Get a Custom Proposal",
      description:
        "Receive detailed datasheets, configurations, and competitive pricing tailored to your requirements.",
      icon: FileText,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      title: "Deploy Sustainable Power",
      description:
        "Enjoy long-term performance, significant savings, and contribute to a cleaner environment.",
      icon: Zap,
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-100",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-block">
            <h1 className="text-3xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-600 to-orange-600 mb-8 leading-tight">
              Our Process
            </h1>
            <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 sm:w-48 mx-auto" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-10 leading-relaxed">
            Simple steps to transition to solar energy with Abundance Solar
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card
                key={index}
                className="card-modern group relative overflow-hidden p-8 hover:shadow-2xl"
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-secondary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
