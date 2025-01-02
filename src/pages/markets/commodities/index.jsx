import React from "react";
import Markets from "../components/Markets";
import HowToGetStarted from "@/components/HowToGetStarted";
import WhyZipphy from "../components/WhyZipphy";

const Commodities = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side - Image Content */}
        <div className="md:w-1/2 relative">
          <img src="/images/stocktrade.png" alt="Commodities Trading" className="w-full rounded-lg shadow-lg" />
          {/* Floating Elements */}
          <div className="absolute bottom-0 left-[-40px]">
            <img src="/images/gold.jpg" alt="Gold Bars" className="w-24 h-24 rounded-full animate-float" />
          </div>
          <div className="absolute top-[60px] right-[-40px]">
            <img src="/images/oil.jpg" alt="Oil Barrels" className="w-24 h-24 rounded-full animate-float" />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2">
          <p className="text-gray-600 uppercase font-bold text-sm">Commodities</p>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Trade Commodities With Zipphy</h1>
          <h2 className="text-xl md:text-2xl font-bold text-accent mt-4">Trade commodities, maximize returns.</h2>
          <p className="text-gray-700 mt-4">
            Welcome to the exciting world of commodities trading with us! As a leading trading platform, we offer you an
            unparalleled opportunity to engage in the dynamic and diverse realm of commodities markets.
          </p>
          <p className="text-gray-700 mt-4">
            Trade on the world’s most important commodities. Whether it’s key energy products like crude oil, industrial
            metals like copper and aluminum, or gold and silver, the most enduring stores of value and mediums of
            exchange.
          </p>
          <p className="text-gray-700 mt-4">Trade an increasingly growing list of commodities with Zipphy today.</p>
        </div>
      </div>

      {/* Additional Sections */}
      <WhyZipphy />
      <HowToGetStarted />
      <Markets currentMarket="Commodities" />
    </div>
  );
};

export default Commodities;
