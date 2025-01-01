import React from "react";

const Markets = ({ currentMarket }) => {
  const markets = [
    {
      title: "Stocks",
      image: "https://via.placeholder.com/200x200",
      link: "/markets/stocks",
    },
    {
      title: "Forex",
      image: "https://via.placeholder.com/200x200",
      link: "/markets/forex",
    },
    {
      title: "Commodities",
      image: "https://via.placeholder.com/200x200",
      link: "/markets/commodities",
    },
    {
      title: "Crypto",
      image: "https://via.placeholder.com/200x200",
      link: "/markets/crypto",
    },
    {
      title: "Indices",
      image: "https://via.placeholder.com/200x200",
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
