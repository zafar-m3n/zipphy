import React from "react";
import Icon from "@/components/ui/Icon";

const WhyZipphy = () => {
  const features = [
    {
      title: "Competitive Spreads",
      description:
        "Experience tighter spreads and maximize your trading potential. Our commitment to transparency ensures you get the best rates.",
      icon: "mdi:trophy-outline",
    },
    {
      title: "Safety of Funds",
      description:
        "Your funds are completely safe & secured, with negative-balance protection ensuring peace of mind in financial transactions.",
      icon: "mdi:shield-check",
    },
    {
      title: "Seamless Trading",
      description:
        "Enjoy the benefits of top-tier execution, ensuring that your trades are executed swiftly and efficiently. Our advanced trading infrastructure minimizes latency, providing you with a competitive edge in the fast-paced financial markets.",
      icon: "mdi:swap-horizontal",
    },
    {
      title: "Trusted by Thousands",
      description:
        "The preferred choice for thousands of global traders, our platform attracts more users and partners daily.",
      icon: "mdi:account-group-outline",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center text-2xl md:text-4xl font-bold text-secondary mb-4">Why Zipphy?</div>
      <p className="text-center text-lg md:text-xl text-accent capitalize font-bold">We Are the best at what we do</p>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg p-6 ${
              index % 2 === 0 ? "w-full md:w-2/5 bg-accent/30" : "w-full md:w-1/3 bg-secondary/30"
            }`}
          >
            <Icon icon={feature.icon} className="text-6xl text-accent mx-auto" />
            <h3 className="text-lg md:text-xl font-bold text-secondary text-center">{feature.title}</h3>
            <p className="text-gray-700 text-sm md:text-base mt-2 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyZipphy;
