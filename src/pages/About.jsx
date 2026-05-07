import HeroSection from "@/components/about/HeroSection";
import TabNavigation from "@/components/about/TabNavigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";

// This file already exists and is your About Us page.
// It imports and renders the About page content, including HeroSection, TabNavigation, NewsSection, Header, and Footer.
// You can customize the content in the components it uses, or add new sections as needed.

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SEOHead
        title="About Us | Bronze Solar - Leading Solar Panel Manufacturer UAE"
        description="Learn about Bronze Solar, a leading solar panel manufacturer in UAE with 600MW capacity. Our mission, vision, and commitment to high-efficiency solar technology and European standards."
        canonicalUrl="https://abundance-solar.com/about"
        keywords="about Bronze Solar, solar panel manufacturer UAE, solar company Abu Dhabi, N-type TOPCon manufacturer, HJT solar panels"
        ogImage="https://abundance-solar.com/Croppedlogo.png"
      />
      {/* Header will now handle its own spacing */}
      <Header page={"about"} />

      {/* Main content - no need for extra padding since Header includes spacer */}
      <main>
        <HeroSection page={"about"} />
        <TabNavigation />

        {/* <NewsSection newsItems={newsItems} /> */}
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
