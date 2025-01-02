import React from "react";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/ui/Icon";

const Broker = () => {
  const features = [
    {
      title: "User-Friendly Interface",
      description:
        "Zipphy’s trading platform is designed for everyone—from beginners to professionals. Navigate effortlessly, execute trades smoothly, and access a comprehensive set of tools with ease.",
      icon: "heroicons:face-smile",
    },
    {
      title: "Advanced Charting Tools",
      description:
        "Gain an edge with advanced tools to analyze trends and make informed decisions. Access powerful indicators and charting options to stay ahead in the market.",
      icon: "heroicons:chart-bar",
    },
    {
      title: "Multiple Asset Classes",
      description:
        "Diversify your portfolio with access to various asset classes, including forex, stocks, commodities, and cryptocurrencies. Explore endless possibilities with Zipphy.",
      icon: "heroicons:currency-dollar",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Rest assured that Zipphy operates with full regulatory compliance, offering you a safe and secure trading environment.",
      icon: "heroicons:shield-check",
    },
    {
      title: "Customer Support",
      description:
        "Get 24/7 support from our dedicated team of experts who are always ready to assist with your trading needs.",
      icon: "heroicons:phone-arrow-down-left",
    },
    {
      title: "Secure and Reliable Infrastructure",
      description:
        "Experience a robust trading infrastructure designed for maximum security and reliability, ensuring uninterrupted trading.",
      icon: "heroicons:server",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Section 1: Introducing Zipphy Broker Program */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Introducing Zipphy Broker Program</h2>
            <p className="text-gray-600 mt-4 md:text-lg">
              The Zipphy Broker Program offers unmatched opportunities for both individuals and businesses to grow in
              the trading world. With cutting-edge tools and personalized support, we empower our brokers to succeed.
              Join us and gain seamless access to global markets, innovative trading solutions, and unparalleled
              resources for your financial growth.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/broker.jpg"
              alt="Introducing Broker Program"
              className="w-full rounded-lg animate-fadeInUp"
            />
          </div>
        </div>

        {/* Section 2: What Zipphy Offers */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">What Zipphy Offers You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {features.map((feature, index) => (
              <div className="relative text-center p-6 rounded-lg shadow-lg" key={index}>
                <div className="absolute inset-0 text-9xl font-bold text-accent -z-10 flex items-center justify-center">
                  <Icon icon={feature.icon} />
                </div>
                <h3 className="text-xl font-bold text-secondary mt-8">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Broker;
