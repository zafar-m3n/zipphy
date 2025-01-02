import React from "react";

const TradingOpportunities = () => {
  return (
    <section className="relative text-secondary p-8 lg:p-16">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-primary">One Broker, Countless Trading Opportunities</h2>
          <p className="text-sm md:text-lg text-justify">
            With one broker at your side, a myriad of trading opportunities unfold. Dive into a world where diverse
            markets converge, offering endless possibilities for those seeking financial growth. From stocks and
            currencies to commodities and cryptocurrencies, our platform opens doors to a wealth of trading options.
            Whether you're a seasoned investor or just starting, discover a seamless experience designed to amplify your
            trading potential.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-accent">
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
                With our brokerage, embrace a world where myriad trading opportunities await. From traditional stocks to
                cutting-edge cryptocurrencies and everything in between.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent">
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
                We offer a user-friendly platform designed to cater to traders of all levels. Navigate through various
                markets effortlessly, leveraging our expertise.
              </p>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
          <div className="relative w-full h-[400px] flex items-center justify-center">
            <img
              src="/images/about.png"
              alt="Trader 1"
              className="w-40 lg:w-52 rounded-lg shadow-lg absolute top-0 left-[30%] animate-float"
              style={{ animationDelay: "0s" }}
            />
            <img
              src="/images/forex.jpg"
              alt="Trader 2"
              className="w-52 lg:w-64 rounded-lg shadow-lg absolute top-[40%] left-[50%] transform -translate-x-1/2 animate-float"
              style={{ animationDelay: "0.5s" }}
            />
            <img
              src="/images/empowerment.jpg"
              alt="Trader 3"
              className="w-44 lg:w-56 rounded-lg shadow-lg absolute left-[70%] animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingOpportunities;
