import VideoSection from "@/components/about/VideoSection";
import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import TestimonialsSwiper from "@/components/TestimonialsSwiper";
import ProductShowcase from "@/components/home/ProductShowcase";
import NewsSection from "@/components/NewsSection";
import OurVision from "@/components/OurVision";
import OurMission from "@/components/OurMission";
import { newsItems } from "../core/constants/constant";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/home/HowItWorks";
import AboutUsSection from "@/components/home/AboutUsSection";
import SEOHead from "@/components/SEOHead";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Bronze Solar | Solar Panel Manufacturer UAE | High-Efficiency Solar Modules"
        description="Leading solar panel manufacturer in UAE with 600MW capacity. High-efficiency N-type TOPCon, HJT & IBC photovoltaic modules. European technology, based in KEZAD Abu Dhabi."
        keywords="solar panels UAE, solar panel manufacturer UAE, N-type TOPCon solar panels, HJT solar modules, solar energy UAE, Abu Dhabi solar panels, renewable energy"
        ogImage="https://bronzesolar.com/Croppedlogo.png"
        pageType="WebPage"
      />
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <AboutUsSection />
        <HowItWorks />
        <OurVision />
        <OurMission />
        {/* <TestimonialsSwiper /> */}
        <ProductShowcase />
        <NewsSection newsItems={newsItems} />

      </main>

      <Footer />
    </div>
  );
};

export default Home;
