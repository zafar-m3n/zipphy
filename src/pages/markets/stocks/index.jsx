import React, { useEffect } from "react";
import Markets from "../components/Markets";
import HowToGetStarted from "@/components/HowToGetStarted";
import WhyZipphy from "../components/WhyZipphy";

const Stocks = () => {
  useEffect(() => {
    document.title = "Zipphy | Markets";
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2">
          <p className="text-gray-600 uppercase font-bold text-sm">Stocks</p>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Trade Stocks With Zipphy</h1>
          <h2 className="text-xl md:text-2xl font-bold text-accent mt-4">Trade Stocks, Seize Opportunities</h2>
          <p className="text-gray-700 mt-4">
            Select from over 2,500 stock and fractional share CFDs, and trade your preferred companies with no
            commission fees! Our platform is your gateway to a world of financial opportunities, offering a seamless and
            user-friendly experience.
          </p>
          <p className="text-gray-700 mt-4">
            Whether you’re a seasoned investor or just starting, our commitment to innovation and customer satisfaction
            ensures a trading environment that empowers you to navigate the complexities of global markets. Join us
            today and elevate your stock trading experience with confidence.
          </p>
        </div>
        {/* Right Side - Image Content */}
        <div className="md:w-1/2 relative">
          <img src="/images/stocktrade.png" alt="Stock Trading" className="w-full rounded-lg shadow-lg" />
          {/* Floating Logos */}
          <div className="absolute top-[-20px] left-[-20px]">
            <img
              src="/images/nvda.png"
              alt="Nvidia Corporation"
              className="h-20 w-20 rounded-full shadow-lg animate-float"
            />
          </div>
          <div className="absolute bottom-[-20px] left-[20px]">
            <img
              src="/images/googl.jpg"
              alt="Alphabet Inc."
              className="h-28 w-28 rounded-full shadow-lg animate-float"
            />
          </div>
          <div className="absolute top-[20px] right-[-20px]">
            <img
              src="/images/stocksLogos/amzn.jpg"
              alt="Amazon.com Inc."
              className="h-10 w-10 rounded-full shadow-lg animate-float"
            />
          </div>
          <div className="absolute bottom-[-20px] right-[20px]">
            <img
              src="/images/stocksLogos/tsla.png"
              alt="Tesla In."
              className="h-32 w-32 rounded-full shadow-lg animate-float"
            />
          </div>
        </div>
      </div>

      <WhyZipphy />
      <HowToGetStarted />
      <Markets currentMarket="Stocks" />
    </div>
  );
};

export default Stocks;
