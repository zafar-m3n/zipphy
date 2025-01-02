import React from "react";
import Markets from "../components/Markets";
import HowToGetStarted from "@/components/HowToGetStarted";
import WhyZipphy from "../components/WhyZipphy";

const Cryptocurrency = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side - Image Content */}
        <div className="md:w-1/2 relative">
          <img src="/images/stocktrade.png" alt="Cryptocurrency Trading" className="w-full rounded-lg shadow-lg" />
          {/* Floating Elements */}
          <div className="absolute top-[50px] left-[-40px]">
            <img src="/images/btc.jpg" alt="Bitcoin" className="w-24 h-24 rounded-full animate-float" />
          </div>
          <div className="absolute bottom-0 right-[-40px]">
            <img src="/images/eth.jpg" alt="Ethereum" className="w-24 h-24 rounded-full animate-float" />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2">
          <p className="text-gray-600 uppercase font-bold text-sm">Cryptocurrency</p>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Trade Cryptocurrency With Zipphy</h1>
          <h2 className="text-xl md:text-2xl font-bold text-accent mt-4">Digital Assets, Trade Confidently</h2>
          <p className="text-gray-700 mt-4">
            Get into the world’s most revolutionary financial market, access the best cryptocurrency to invest in, and
            start investing in Crypto with Zipphy – a globally trusted and regulated financial service provider.
          </p>
          <p className="text-gray-700 mt-4">
            Our platform provides seamless access to a diverse range of cryptocurrencies, including established giants
            like Bitcoin and Ethereum, as well as promising altcoins.
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <WhyZipphy />
      <HowToGetStarted />
      <Markets currentMarket="Crypto" />
    </div>
  );
};

export default Cryptocurrency;
