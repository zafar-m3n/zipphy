import React, { useEffect } from "react";
import Markets from "../components/Markets";
import HowToGetStarted from "@/components/HowToGetStarted";
import WhyZipphy from "../components/WhyZipphy";

const Forex = () => {
  useEffect(() => {
    document.title = "Zipphy | Markets";
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side - Image Content */}
        <div className="md:w-1/2 relative">
          <img src="/images/stocktrade.png" alt="Forex Trading" className="w-full rounded-lg shadow-lg" />
          {/* Floating Symbol */}
          <div className="absolute top-0 left-[-50px]">
            <img src="/images/forex.jpg" alt="Forex" className="w-32 h-32 rounded-full animate-float" />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2">
          <p className="text-gray-600 uppercase font-bold text-sm">Forex</p>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Trade Forex With Zipphy</h1>
          <h2 className="text-xl md:text-2xl font-bold text-accent mt-4">Explore Global Markets, Trade Forex.</h2>
          <p className="text-gray-700 mt-4">
            Get ready with your hat and sunscreen as we embark on a global journey through the realm of forex! Select
            from over 50 currency pairs, encompassing majors, minors, and exotic options.
          </p>
          <p className="text-gray-700 mt-4">
            Forex is a world of its own, full of techniques and terminologies unique to the market. It’s also the most
            liquid, meaning there is lots of buying and selling activity happening much of the time. Because it’s so
            liquid, you can buy and sell easily and instantaneously!
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <WhyZipphy />
      <HowToGetStarted />
      <Markets currentMarket="Forex" />
    </div>
  );
};

export default Forex;
