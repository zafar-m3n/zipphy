import React from "react";

const Markets = ({ currentMarket }) => {
  const markets = [
    {
      title: "Stocks",
      image: "/images/markets/1.png",
      link: "/markets/stocks",
    },
    {
      title: "Forex",
      image: "/images/markets/2.png",
      link: "/markets/forex",
    },
    {
      title: "Commodities",
      image: "/images/markets/3.png",
      link: "/markets/commodities",
    },
    {
      title: "Crypto",
      image: "/images/markets/4.png",
      link: "/markets/crypto",
    },
    {
      title: "Indices",
      image: "/images/markets/5.png",
      link: "/markets/indices",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center text-2xl md:text-4xl font-bold text-secondary mb-4">Interested In Other Markets?</div>
      <p className="text-center text-sm">
        Expand your horizons. Explore diverse markets with our platform, discover new opportunities for profitable
        trading.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mt-8">
        {markets.map((market, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center space-y-4 rounded-lg shadow-lg ${
              market.title === currentMarket ? "bg-slate-100" : ""
            }`}
            onClick={() => window.location.replace(market.link)}
          >
            <img src={market.image} alt={market.title} className="w-24 h-24 object-contain" />
            <h3 className="text-xl font-semibold text-primary">{market.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Markets;
