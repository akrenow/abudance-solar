import React from 'react';

const OurVision = () => {
    return (
        <div className="mx-4 my-6 md:m-10">
            {/* Heading Section - Above the Video */}
            <div className="text-center mb-12 relative">
                <div className="inline-block">
                    <h1 className="text-5xl md:text-6xl  font-bold text-gray-800 mb-3">
                        <span className="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-600 to-orange-600 mb-8 leading-tight"> Our Vision </span>
                    </h1>
                    <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 sm:w-48 mx-auto" />
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
                We envision a future where renewable energy, powered by solar innovation, is the cornerstone of a resilient, eco-conscious, and thriving global community. As pioneers in the solar industry, we aspire to lead the global renewable energy transition by setting new standards for quality, efficiency, and sustainability through advanced European technology. Our ambition is to make clean energy a universal solution, accessible to all, driving a worldwide movement toward reduced carbon emissions and environmental stewardship. Aligned with the UAE’s goal of achieving net-zero emissions and a diversified energy mix, we aim to create a ripple effect that transforms the global energy landscape. By integrating innovation, strategic partnerships, and a passion for sustainability, we are committed to building a cleaner, brighter world where solar energy powers sustainable progress for generations to come.
                </p>
            </div>
           
        </div>
    );
};

export default OurVision;