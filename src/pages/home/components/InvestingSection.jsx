import React from "react";
import Icon from "@/components/ui/Icon";

const InvestingSection = () => {
  return (
    <section className="bg-background p-8 lg:p-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center space-x-6">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0">
          <h2 className="text-4xl font-bold text-primary">Simplify Your Investments with Zipphy</h2>
          <p className="text-lg text-secondary text-justify">
            Maximize your financial potential with Zipphy. Our platform empowers you to manage all your investments in
            one place, saving you time and effort. From real-time tracking to low fees, we ensure every step of your
            investment journey is seamless and rewarding.
          </p>
          <p className="text-lg text-secondary text-justify">
            With Zipphy, enjoy a unified experience tailored to traders and investors of all levels. Whether it's
            managing portfolios, accessing detailed analytics, or strategizing for the future, Zipphy is your all-in-one
            solution for comprehensive financial management.
          </p>
          <button className="px-6 py-3 bg-accent text-primary rounded-lg text-lg hover:bg-opacity-80 transition">
            Register Now
          </button>
        </div>
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center space-y-4">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-secondary text-accent rounded-full">
              <Icon icon="game-icons:receive-money" width={28} />
            </div>
            <h3 className="text-xl font-semibold text-primary">Quick and Easy Payouts</h3>
            <p className="text-secondary">
              Access your profits with ease. With just a few clicks, transfer your earnings directly to your account and
              stay in control of your funds.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center space-y-4">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-secondary text-accent rounded-full">
              <Icon icon="tabler:zoom-money" width={28} />
            </div>
            <h3 className="text-xl font-semibold text-primary">Transparent Pricing</h3>
            <p className="text-secondary">
              Say goodbye to hidden fees. Our straightforward pricing ensures there are no surprises—just clear,
              predictable costs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-secondary text-accent rounded-full">
              <Icon icon="fluent:access-time-24-filled" width={28} />
            </div>
            <h3 className="text-xl font-semibold text-primary">Round-the-Clock Support</h3>
            <p className="text-secondary">
              Get assistance whenever you need it. Our 24/7 customer support is here to address your concerns promptly
              and effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestingSection;
