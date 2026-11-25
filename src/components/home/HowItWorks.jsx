import { Card } from "@/components/ui/card";
import { useLanguage } from "@/i18n/useLanguage";
import SectionHeading from "@/components/SectionHeading";

const HowItWorks = () => {
  const { t } = useLanguage();
  const steps = [
    {
      title: "Advanced European Automation",
      description:
        "Our fully automated facility integrates cutting-edge technology for high-efficiency, precision-driven solar module production.",
      icon: "1",
    },
    {
      title: "Next-Gen Photovoltaic Technologies",
      description:
        "We specialize in N-type TOPCon, IBC, and HJT cell technologies, enhancing efficiency, durability, and cost-effectiveness.",
      icon: "2",
    },
    {
      title: "Sustainable & Future-Ready Solutions",
      description:
        "Our commitment to automation and innovation aligns with global standards, ensuring scalable, reliable, and eco-friendly energy production.",
      icon: "3",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <SectionHeading
          title={t("Technology")}
          subtitle={t("Simple steps to transition to solar energy with Bronze Solar")}
        />
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">
                    {step.icon}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t(step.title)}
                </h3>
                <p className="text-gray-600">{t(step.description)}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Optional CTA */}
        {/* <div className="mt-12 text-center">
                    <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                        Start Your Solar Journey
                    </button>
                </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;
