import React from "react";
import Markets from "../components/Markets";
import HowToGetStarted from "@/components/HowToGetStarted";
import WhyZipphy from "../components/WhyZipphy";

const Indices = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side - Image Content */}
        <div className="md:w-1/2 relative">
          <img
            src="https://via.placeholder.com/500x700"
            alt="Indices Trading"
            className="w-full rounded-lg shadow-lg"
          />
          {/* Floating Elements */}
          <div className="absolute bottom-0 left-[-40px]">
            <img src="https://via.placeholder.com/100x100" alt="Stock Market Graph" className="w-24 h-24" />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2">
          <p className="text-gray-600 uppercase font-bold text-sm">Indices</p>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Trade Indices With Zipphy</h1>
          <h2 className="text-xl md:text-2xl font-bold text-accent mt-4">Trade indices, capture markets</h2>
          <p className="text-gray-700 mt-4">
            Welcome to our premier indices trading platform, where the global financial markets come alive at your
            fingertips.
          </p>
          <p className="text-gray-700 mt-4">
            Our platform provides you with seamless access to a diverse range of indices, including major benchmarks
            like the S&P 500, Dow Jones, and NASDAQ, as well as international indices representing markets worldwide.
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <WhyZipphy />
      <HowToGetStarted />
      <Markets currentMarket="Indices" />
    </div>
  );
};

export default Indices;
