import React from "react";
import Icon from "@/components/ui/Icon";

const Deposits = () => {
  return (
    <section className="bg-background py-16 px-8 lg:py-24 lg:px-16 animate-appear-right animation-range-entryCover animation-timeline-view">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold text-primary">Instant Deposit & Withdrawals</h2>
          <p className="text-sm md:text-lg text-secondary text-justify">
            Experience seamless trading with instant deposit and withdrawals on Vorbex where speed meets convenience in
            the world of finance.
          </p>
          <ul className="space-y-6">
            <li className="flex space-x-4">
              <div className="flex items-center justify-center w-20 h-12 bg-primary rounded-full">
                <Icon icon="bx:bx-award" width={24} className="text-background" />
              </div>
              <div>
                <h3 className="text-md md:text-xl font-semibold text-primary">Multi-Award-Winning Platforms</h3>
                <p className="text-secondary text-justify text-sm md:text-base">
                  With over 15 years of trust and excellence, our MT4 and MT5 platforms have earned multiple accolades,
                  making them the go-to choice for traders around the globe.
                </p>
              </div>
            </li>
            <li className="flex space-x-4">
              <div className="flex items-center justify-center w-[5.5rem] h-12 bg-primary rounded-full">
                <Icon icon="bx:bx-trending-up" className="h-6 w-6 text-background" />
              </div>
              <div>
                <h3 className="text-md md:text-xl font-semibold text-primary">Fast and User-Friendly</h3>
                <p className="text-secondary text-justify text-sm md:text-base">
                  Our platforms are tailored to all trading levels, offering lightning-fast execution and a reliable
                  interface to navigate a broad range of financial assets effortlessly.
                </p>
              </div>
            </li>

            <li className="flex space-x-4">
              <div className="flex items-center justify-center w-[4.5rem] h-12 bg-primary rounded-full">
                <Icon icon="bx:bx-mobile" className="text-background" />
              </div>
              <div>
                <h3 className="text-md md:text-xl font-semibold text-primary">
                  Trade Without Limits, Anytime, Anywhere
                </h3>
                <p className="text-secondary text-justify text-sm md:text-base">
                  Trade effortlessly from anywhere with our mobile apps for Android and iOS, or experience full desktop
                  power on Windows and Mac OS—wherever you go, your trading is always within reach.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <img src="/images/card.jpg" alt="Trading Platform" />
        </div>
      </div>
    </section>
  );
};

export default Deposits;
