import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const educationData = [
    {
      title: "Stocks",
      content: `
        Trading stocks involves purchasing shares of publicly traded companies and holding them in anticipation of their value increasing. As the company's performance improves, so does the value of its shares. This can result in a profit when the shares are sold at a higher price. 
        Key tips include diversifying your portfolio, focusing on industries you understand, and avoiding high-volatility or penny stocks. Develop a strong understanding of stock valuation through fundamental and technical analysis to make informed decisions.`,
    },
    {
      title: "Forex",
      content: `
        Forex, or the foreign exchange market, is the world's largest financial market where currencies are traded. A "pip" is a key unit used to measure currency value changes. Understanding pip value and managing risk through position sizing and market analysis are crucial.
        To minimize losses, traders should rely on both technical and fundamental analysis, use stop-loss orders, and ensure trades align with pre-defined risk levels.`,
    },
    {
      title: "Commodities",
      content: `
        Commodities trading involves buying and selling raw materials like oil, metals, and agricultural products. Futures contracts are a common method of trading commodities, allowing traders to speculate on price changes without physical ownership. 
        This market is highly volatile, influenced by factors like weather, geopolitics, and demand-supply dynamics. To succeed, traders should thoroughly analyze historical price trends and stay updated on current events.`,
    },
    {
      title: "Cryptocurrency",
      content: `
        Cryptocurrency trading involves buying and selling digital currencies like Bitcoin and Ethereum. These assets are decentralized, and their prices are influenced by market demand, adoption rates, and macroeconomic factors. Diversification and long-term investment in well-established currencies are recommended.
        To avoid losses, traders should research market trends, utilize technical analysis, and remain cautious of hype or FOMO (fear of missing out). Secure trading platforms are essential for safe investments.`,
    },
    {
      title: "Indices",
      content: `
        Index trading allows investors to gain exposure to a group of stocks rather than individual companies. This reduces risk and provides diversification. Indices like the S&P 500, NASDAQ100, and Hang Seng represent the performance of a collection of companies.
        While safer than individual stocks, index trading requires understanding macroeconomic trends and market fundamentals. It is ideal for those seeking stable, long-term growth opportunities.`,
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary text-center">Educational Resources</h1>
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel: Titles */}
          <div className="lg:w-1/3 bg-gray-100 p-4 space-y-4">
            {educationData.map((item, index) => (
              <button
                key={index}
                className={`w-full text-left p-3 rounded-md font-bold ${
                  activeIndex === index ? "bg-secondary text-white" : "bg-white text-secondary"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Right Panel: Content */}
          <div className="lg:w-2/3 bg-white p-6 shadow-lg rounded-md">
            <h2 className="text-2xl font-bold text-secondary mb-4">{educationData[activeIndex].title}</h2>
            <p className="text-justify text-sm md:text-lg text-gray-700">{educationData[activeIndex].content}</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Education;
