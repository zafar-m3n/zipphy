import React from "react";

const WhyZipphy = () => {
  const floatingItems = [
    {
      title: "Lightning-Fast Trading",
      description: "Trade at the speed of light with instant deposits and withdrawals empowering every move.",
      style: { top: "10%", left: "15%" },
    },
    {
      title: "Your Gateway to Markets",
      description: "Our gateway to limitless markets, from stocks to crypto, all in one seamless platform.",
      style: { top: "10%", left: "65%" },
    },
    {
      title: "Flexible Payment Options",
      description:
        "Take control with a variety of secure payment methods, giving you flexibility in every transaction.",
      style: { top: "50%", left: "40%" },
    },
    {
      title: "Transparent Pricing, No Surprises",
      description: "No surprises, only clarity—transparent pricing and zero hidden fees put you in the driver’s seat.",
      style: { top: "80%", left: "15%" },
    },
    {
      title: "Unmatched Security",
      description:
        "Security like never before, with top-notch encryption and fraud protection keeping your assets safe.",
      style: { top: "80%", left: "65%" },
    },
  ];

  return (
    <section className="py-16 px-8 lg:py-24 lg:px-16">
      <h2 className="text-xl md:text-3xl font-bold text-primary text-center mb-12">Why Trade with Zipphy</h2>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/4">
          <img src="/images/whyzipphy.png" alt="Trading Platform" className="w-full rounded-lg animate-float" />
        </div>
        <div className="lg:w-3/4 relative h-auto lg:h-96">
          {floatingItems.map((item, index) => (
            <div
              key={index}
              className={`p-4 w-full lg:w-72 bg-white shadow-lg rounded-md mb-6 lg:mb-0 lg:animate-float ${
                index === 0 ? "mt-0" : "mt-4 lg:mt-0"
              } ${index === floatingItems.length - 1 ? "mb-0" : "mb-6 lg:mb-0"} 
              lg:absolute`}
              style={{
                ...item.style,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <h3 className="font-bold text-lg text-accent">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyZipphy;
