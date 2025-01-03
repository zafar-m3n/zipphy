import React from "react";

const Welcome = () => {
  const stocks = [
    {
      id: 1,
      name: "MCD",
      logo: "/images/stocksLogos/mcd.png",
      background: "bg-yellow-100",
      text: "text-yellow-700",
      position: "top[20%] left-0 md:left-[20%]",
      value: 250,
    },
    {
      id: 2,
      name: "IBM",
      logo: "/images/stocksLogos/ibm.png",
      background: "bg-purple-100",
      text: "text-purple-700",
      position: "top-[70%] left-[5%] md:left-[25%]",
      value: 150,
    },
    {
      id: 3,
      name: "TSLA",
      logo: "/images/stocksLogos/tsla.png",
      background: "bg-red-100",
      text: "text-red-700",
      position: "top-[10%] left-[20%] md:left-[40%]",
      value: 400,
    },

    {
      id: 4,
      name: "META",
      logo: "/images/stocksLogos/meta.png",
      background: "bg-blue-100",
      text: "text-blue-700",
      position: "top-[60%] left-[25%] md:left-[35%]",
      value: 350,
    },
    {
      id: 5,
      name: "MSFT",
      logo: "/images/stocksLogos/msft.png",
      background: "bg-green-100",
      text: "text-green-700",
      position: "top-[30%] left-[55%] md:left-[65%]",
      value: 250,
    },
    {
      id: 6,
      name: "AMZN",
      logo: "/images/stocksLogos/amzn.jpg",
      background: "bg-slate-100",
      text: "text-black",
      position: "top-[65%] left-[68%] md:left-[58%]",
      value: 200,
    },
  ];

  const maxValue = Math.max(...stocks.map((stock) => stock.value));

  return (
    <section className="flex flex-col lg:flex-row lg:space-x-6 items-center justify-between p-8 lg:p-16 animate-appear-left animation-range-entryCover animation-timeline-view">
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h2 className="text-xl md:text-3xl font-bold text-secondary">
          Trading Dreams Powered by <span className="text-2xl md:text-4xl italic">Zipphy</span>
        </h2>
        <p className="text-sm md:text-base text-justify">
          Venture into a realm of endless financial potential with Zipphy. Crafted for both newcomers and seasoned
          traders, our platform offers an unmatched trading journey. Dive into a variety of markets, from stocks to
          crypto, with cutting-edge tools and live analytics designed to guide you toward success.
        </p>
        <p className="text-sm md:text-base text-justify">
          At Zipphy, we don’t just connect traders—we empower them to conquer the globe.
        </p>
        <button
          className="px-3 py-1.5 md:px-6 md:py-3 bg-accent text-primary rounded-sm md:rounded-lg text-sm md:text-base hover:bg-opacity-80 transition"
          onClick={() => window.open("https://app.zipphy.com/login", "_blank")}
        >
          Get Started
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
        <div className="relative w-full h-[400px] flex items-center justify-center">
          {stocks.map((stock, index) => {
            const size = `${(stock.value / maxValue) * 150 + 50}px`;
            return (
              <div
                className={`p-4 absolute animate-float flex flex-col justify-between ${stock.position} ${stock.background} ${stock.text} rounded-lg shadow-lg`}
                key={stock.id}
                style={{
                  width: size,
                  height: size,
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <img src={stock.logo} alt={stock.name} className="h-12 w-12 rounded-full object-contain" />
                <p className={`uppercase font-bold ${stock.text}`}>{stock.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
