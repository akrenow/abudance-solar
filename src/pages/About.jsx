import HeroSection from '@/components/about/HeroSection';
import TabNavigation from '@/components/about/TabNavigation';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import NewsSection from '@/components/NewsSection';
import { newsItems } from '@/core/constants/constant';

// This file already exists and is your About Us page.
// It imports and renders the About page content, including HeroSection, TabNavigation, NewsSection, Header, and Footer.
// You can customize the content in the components it uses, or add new sections as needed.

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Header will now handle its own spacing */}
            <Header page={'about'} />

            {/* Main content - no need for extra padding since Header includes spacer */}
            <main>
                <HeroSection page={'about'} />
                <TabNavigation />

                <NewsSection newsItems={newsItems} />
            </main>
            <Footer />
        </div>
    );
}

export default AboutPage;