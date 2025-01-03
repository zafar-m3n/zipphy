import React from "react";

const WhyZipphy = () => {
  const floatingItems = [
    {
      title: "Reliable Platform",
      description: "Experience seamless trading on a secure and reliable platform.",
      style: { top: "10%", left: "15%" },
    },
    {
      title: "Advanced Tools",
      description: "Access cutting-edge tools for market analysis.",
      style: { top: "10%", left: "65%" },
    },
    {
      title: "24/7 Support",
      description: "Get round-the-clock support from our expert team.",
      style: { top: "50%", left: "40%" },
    },
    {
      title: "Diverse Markets",
      description: "Trade in various markets, including Forex and Crypto.",
      style: { top: "80%", left: "15%" },
    },
    {
      title: "Low Fees",
      description: "Enjoy competitive fees and maximize your profit potential.",
      style: { top: "80%", left: "65%" },
    },
  ];

  return (
    <section className="py-16 px-8 lg:py-24 lg:px-16">
      <h2 className="text-2xl md:text-4xl font-bold text-primary text-center">Why Trade with Zipphy</h2>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/4">
          <img src="/images/card.jpg" alt="Trading Platform" />
        </div>
        <div className="lg:w-3/4 relative h-96">
          {floatingItems.map((item, index) => (
            <div
              key={index}
              className="absolute bg-white shadow-lg rounded-md p-4 w-60 animate-float"
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
