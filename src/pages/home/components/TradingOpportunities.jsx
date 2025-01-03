import React from "react";
import Icon from "@/components/ui/Icon";

const TradingOpportunities = () => {
  return (
    <section className="relative text-secondary p-8 lg:p-16 animate-appear-left animation-range-entryCover animation-timeline-view">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-xl md:text-3xl font-bold text-primary text-center lg:text-left">
            One Trusted Broker, Endless Trading Opportunities
          </h2>

          <p className="text-sm md:text-base text-justify">
            Trade beyond limits with a single with Zipphy. Unlock a universe of opportunities across stocks, forex,
            commodities, and crypto. Our platform blends innovation and simplicity, giving you the power to navigate
            markets with ease, whether you're an expert or just beginning. Seamless, intuitive, and ready to take your
            trading to new heights.
          </p>
          <p className="text-sm md:text-base text-justify font-bold italic">
            Trade smarter, profit faster, with us by your side
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-accent bg-secondary rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-justify text-sm md:text-base">
                With our brokerage, step into a realm of endless trading possibilities. Explore everything from classic
                stocks to innovative cryptocurrencies, forex, and more. Leverage powerful tools and up-to-the-minute
                insights to stay at the forefront of every market movement.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent bg-secondary rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-justify text-sm md:text-base">
                Empower your trades with real-time data and advanced tools, giving you the edge to conquer any market,
                anytime. Unlock hidden opportunities, analyze trends with precision, and execute your strategy
                flawlessly, all while staying ahead of market shifts in real time .
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
          <div className="relative w-full h-80 md:h-[400px] flex items-center justify-center">
            <img
              src="/images/about.png"
              alt="Trader 1"
              className="w-40 lg:w-52 rounded-lg shadow-lg absolute md:top-0 top-5 left-5 md:left-[30%] animate-float"
              style={{ animationDelay: "0s" }}
            />
            <img
              src="/images/forex.jpg"
              alt="Trader 2"
              className="w-52 lg:w-64 rounded-lg shadow-lg absolute top-[40%] md:left-[50%] transform -translate-x-1/2 animate-float"
              style={{ animationDelay: "0.5s" }}
            />
            <img
              src="/images/empowerment.jpg"
              alt="Trader 3"
              className="w-44 lg:w-56 rounded-lg shadow-lg absolute left-[45%] md:left-[70%] animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingOpportunities;
