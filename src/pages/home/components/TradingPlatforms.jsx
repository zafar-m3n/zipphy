import React from "react";
import Icon from "@/components/ui/Icon";

const TradingPlatforms = () => {
  return (
    <section className="bg-background py-16 px-8 lg:py-24 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <img src="https://via.placeholder.com/600x400" alt="Trading Platform" className="rounded-lg shadow-lg" />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-primary">Powerful Platforms for Every Trader</h2>
          <p className="text-lg text-secondary">
            At Zipphy, we empower traders with advanced, award-winning tools that transform the trading experience. With
            cutting-edge features like real-time market data, customizable interfaces, and powerful charting tools, our
            platforms are designed to give traders a competitive edge in today’s dynamic markets.
          </p>
          <ul className="space-y-6">
            {/* Feature 1 */}
            <li className="flex space-x-4">
              <div className="flex items-center justify-center w-20 h-12 bg-primary rounded-full">
                <Icon icon="bx:bx-award" width={24} className="text-background" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">Multi-Award-Winning Platforms</h3>
                <p className="text-secondary">
                  Trusted for over 15 years, our MT4 and MT5 platforms have won numerous awards, solidifying their
                  position as the preferred choice for traders worldwide.
                </p>
              </div>
            </li>

            {/* Feature 2 */}
            <li className="flex space-x-4">
              <div className="flex items-center justify-center w-[5.5rem] h-12 bg-primary rounded-full">
                <Icon icon="bx:bx-trending-up" className="h-6 w-6 text-background" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">Fast and User-Friendly</h3>
                <p className="text-secondary">
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
                <h3 className="text-xl font-semibold text-primary">Accessible Anytime, Anywhere</h3>
                <p className="text-secondary">
                  Trade seamlessly on the go with apps available for Android and iOS, or enjoy the full desktop
                  experience on Windows and Mac OS.
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
