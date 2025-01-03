import React from "react";
import Icon from "@/components/ui/Icon";

const TradingPlatforms = () => {
  return (
    <section className="bg-background py-16 px-8 lg:py-24 lg:px-16 animate-appear-right animation-range-entryCover animation-timeline-view">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2">
          <img src="/images/benefits.webp" alt="Trading Platform" />
        </div>
        <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0">
          <h2 className="text-xl md:text-3xl font-bold text-primary text-center lg:text-left">
            Empowering Every Trader with Limitless Platforms
          </h2>
          <p className="text-sm md:text-base text-secondary text-justify">
            Zipphy reimagines trading with next-level tools that empower you to stay ahead. Dive into a platform that
            blends real-time market insights, personalized dashboards, and robust charting capabilities, our platforms
            are built to give traders the upper hand in an ever-evolving market landscape.
          </p>
          <ul className="space-y-6">
            <li className="flex space-x-4">
              <div className="flex items-center justify-center bg-primary rounded-full w-12 h-12 flex-shrink-0">
                <Icon icon="bx:bx-award" className="text-background text-lg" />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-semibold text-primary">Multi-Award-Winning Platforms</h3>
                <p className="text-secondary text-justify text-sm md:text-base">
                  With over 15 years of trust and excellence, our MT4 and MT5 platforms have earned multiple accolades,
                  making them the go-to choice for traders around the globe.
                </p>
              </div>
            </li>
            <li className="flex space-x-4">
              <div className="flex items-center justify-center bg-primary rounded-full w-12 h-12 flex-shrink-0">
                <Icon icon="bx:bx-trending-up" className="text-background text-lg" />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-semibold text-primary">Fast and User-Friendly</h3>
                <p className="text-secondary text-justify text-sm md:text-base">
                  Our platforms are tailored to all trading levels, offering lightning-fast execution and a reliable
                  interface to navigate a broad range of financial assets effortlessly.
                </p>
              </div>
            </li>
            <li className="flex space-x-4">
              <div className="flex items-center justify-center bg-primary rounded-full w-12 h-12 flex-shrink-0">
                <Icon icon="bx:bx-mobile" className="text-background text-lg" />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-semibold text-primary">
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
      </div>
    </section>
  );
};

export default TradingPlatforms;
