import React from "react";

const MarketCategories = () => {
  const markets = [
    {
      title: "Stocks",
      image: "https://via.placeholder.com/200x200",
      description: "Read More",
      link: "/markets/stocks",
    },
    {
      title: "Forex",
      image: "https://via.placeholder.com/200x200",
      description: "Read More",
      link: "/markets/forex",
    },
    {
      title: "Commodities",
      image: "https://via.placeholder.com/200x200",
      description: "Read More",
      link: "/markets/commodities",
    },
    {
      title: "Crypto",
      image: "https://via.placeholder.com/200x200",
      description: "Read More",
      link: "/markets/crypto",
    },
    {
      title: "Indices",
      image: "https://via.placeholder.com/200x200",
      description: "Read More",
      link: "/markets/indices",
    },
  ];

  return (
    <section className="p-8 lg:p-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Explore The Markets</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {markets.map((market, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 animate-float">
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
      </div>
    </section>
  );
};

export default MarketCategories;
