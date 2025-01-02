import React from "react";

const Welcome = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16">
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-secondary">Empowering Global Traders with Zipphy</h2>
        <p className="text-sm md:text-lg text-justify">
          Step into the world of limitless financial possibilities with Zipphy. Designed for both beginners and seasoned
          experts, our platform delivers an unparalleled trading experience. Access diverse markets, from stocks to
          cryptocurrencies, using state-of-the-art tools and real-time analytics tailored to your success.
        </p>
        <p className="text-sm md:text-lg text-justify">
          Join a community of over 50 million traders and investors shaping the future of finance.
        </p>
        <button
          className="px-3 py-1.5 md:px-6 md:py-3 bg-accent text-primary rounded-sm md:rounded-lg text-sm md:text-lg hover:bg-opacity-80 transition"
          onClick={() => window.open("https://app.zipphy.com/login", "_blank")}
        >
          Get Started
        </button>
      </div>

      {/* Image/GIF */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <img
          src="/images/global.png"
          alt="Dynamic Trading Dashboard"
          className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg animate-fadeInUp"
        />
      </div>
    </section>
  );
};

export default Welcome;
