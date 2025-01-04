import React from "react";
import Icon from "@/components/ui/Icon";

const InvestingSection = () => {
  return (
    <section className="p-8 lg:p-16 animate-appear-right animation-range-entryCover animation-timeline-view">
      <div className="container mx-auto flex flex-col lg:flex-row items-center space-x-0 md:space-x-6">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 mb-6 lg:mb-0 text-center lg:text-left">
          <h2 className="text-xl md:text-3xl font-bold text-primary">Experience Hassle-Free Investing with Zipphy</h2>
          <p className="text-sm md:text-base text-secondary text-justify">
            Unleash your financial growth with Zipphy. Our platform brings all your investments together, simplifying
            management and boosting efficiency. Benefit from live tracking and minimal fees, making your investment
            journey smooth and rewarding.
          </p>
          <p className="text-sm md:text-base text-secondary text-justify">
            Zipphy transforms your trading experience with intuitive tools and real-time data, empowering confident
            decisions at any level. With features like personalized dashboards and advanced analytics, every trade
            brings you closer to success.
          </p>
          <button
            className="px-3 py-1.5 md:px-6 md:py-3 bg-accent text-primary rounded-sm md:rounded-lg text-sm md:text-base hover:bg-opacity-80 transition"
            onClick={() => window.open("https://app.zipphy.com/login", "_blank")}
          >
            Register Now
          </button>
        </div>
        <div className="w-full  lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center space-y-4">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-secondary text-accent rounded-full">
              <Icon icon="game-icons:receive-money" width={28} />
            </div>
            <h3 className="text-xl font-semibold text-primary">Seamless and Swift Payouts</h3>
            <p className="text-secondary">
              Take charge of your earnings effortlessly. With just a few clicks, your profits flow directly into your
              account, keeping you in control every step of the way!
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center space-y-4">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-secondary text-accent rounded-full">
              <Icon icon="tabler:zoom-money" width={28} />
            </div>
            <h3 className="text-xl font-semibold text-primary">Transparent Pricing</h3>
            <p className="text-secondary">
              Wave goodbye to hidden charges! With our transparent pricing, what you see is what you get—no surprises,
              just upfront, predictable costs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center space-y-4 col-span-1">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-secondary text-accent rounded-full">
              <Icon icon="fluent:access-time-24-filled" width={28} />
            </div>
            <h3 className="text-xl font-semibold text-primary">Round-the-Clock Support</h3>
            <p className="text-secondary">
              Round-the-Clock Support-Help is always at hand! Our 24/7 support team is ready to tackle your concerns
              swiftly and expertly, reliable solutions around the clock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestingSection;
