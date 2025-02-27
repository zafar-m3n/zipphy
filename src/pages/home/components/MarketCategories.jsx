import React from "react";
import MarketData from "@/components/MarketData";

const MarketCategories = () => {
  const markets = [
    {
      title: "Stocks",
      description: "Read More",
      link: "/markets/stocks",
      image: "/images/markets/1.png",
    },
    {
      title: "Forex",
      description: "Read More",
      link: "/markets/forex",
      image: "/images/markets/2.png",
    },
    {
      title: "Commodities",
      description: "Read More",
      link: "/markets/commodities",
      image: "/images/markets/3.png",
    },
    {
      title: "Crypto",
      description: "Read More",
      link: "/markets/cryptocurrencies",
      image: "/images/markets/4.png",
    },
    {
      title: "Indices",
      description: "Read More",
      link: "/markets/indices",
      image: "/images/markets/5.png",
    },
  ];

  return (
    <section className="p-8 lg:p-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-primary">Explore The Markets</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
          {/* Market Grid */}
          <div className="w-full md:w-1/2 flex flex-wrap justify-evenly items-center space-y-4 md:space-y-0">
            {markets.map((market, index) => (
              <div
                key={index}
                className={`w-52 flex flex-col items-center text-center space-y-4 animate-float p-4 rounded-lg`}
              >
                <img src={market.image} alt={market.title} className="w-24 h-24 object-contain" />
                <h3 className="text-xl font-semibold text-primary">{market.title}</h3>
                <a href={market.link} className="text-accent font-medium hover:underline flex items-center">
                  {market.description}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2">
            <MarketData />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketCategories;
