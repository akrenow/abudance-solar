import VideoSection from "@/components/about/VideoSection";
import Header from "@/components/Header";
import HeroSection from "@/components/home/HeroSection";
import AwardsCertifications from "@/components/AwardsCertifications";
import TestimonialsSwiper from "@/components/TestimonialsSwiper";
import ProductShowcase from "@/components/home/ProductShowcase";
import NewsSection from "@/components/NewsSection";
import OurVision from "@/components/OurVision";
import OurMission from "@/components/OurMission";
import { newsItems } from "../core/constants/constant";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/home/HowItWorks";
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <HowItWorks />
        <OurVision />
        <OurMission />
        {/* <AwardsCertifications /> */}

        {/* <TestimonialsSwiper /> */}
        <ProductShowcase />
        <NewsSection newsItems={newsItems} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
