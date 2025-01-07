import React, { useEffect } from "react";

const promotionsData = [
  {
    id: 1,
    title: "DOUBLE DEPOSIT",
    text: "Boost your trading journey with Zipphy and double your potential from the start! Unleash the possibilities of your trading adventure with Zipphy's exclusive offer: a remarkable 100% bonus on your first deposit. Start trading with twice the power and double the opportunities for success.",
    image: "/images/100.png",
    animation: "animate-fadeInUp",
    imageClass: "w-full",
  },
  {
    id: 2,
    title: "CRYPTO BONUS",
    text: "Begin your crypto journey with a bang! Grab an exciting 25% bonus on your first cryptocurrency deposit with Zipphy. Step into the future of finance with confidence. Zipphy’s 25% crypto bonus ensures your portfolio starts strong.",
    image: "/images/25.png",
    animation: "animate-fadeInUp",
    imageClass: "w-full",
  },
  {
    id: 3,
    title: "5 LOSS-FREE TRADES",
    text: "Trade fearlessly with Zipphy’s safety net of five loss-free trades! At Zipphy, we understand the challenges of the markets, which is why we’re offering five loss-free trades to help you explore your trading potential without financial risk.",
    image: "/images/5trades.png",
    animation: "animate-fadeInUp",
    imageClass: "w-full",
  },
  {
    id: 4,
    title: "PREPAID MASTERCARD",
    text: "Discover the all-in-one Zipphy Mastercard®—your gateway to global financial freedom. The Zipphy Prepaid Mastercard ensures you’re always ready for what’s next with seamless, secure, and flexible financial transactions.",
    image: "/images/card.png",
    animation: "animate-fadeInUp",
    imageClass: "w-3/4",
  },
];

const Promotions = () => {
  useEffect(() => {
    document.title = "Zipphy | Promotions";
  }, []);
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {promotionsData.map((promotion, index) => (
        <div
          key={promotion.id}
          className={`flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 ${promotion.animation}`}
        >
          {index % 2 === 0 ? (
            <>
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-4xl font-bold text-secondary">{promotion.title}</h2>
                <p className="text-sm md:text-lg text-justify mt-4">{promotion.text}</p>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <img src={promotion.image} alt={promotion.title} className={`${promotion.imageClass} rounded-lg`} />
              </div>
            </>
          ) : (
            <>
              <div className="md:w-1/2 order-2 md:order-1 flex items-center justify-center">
                <img src={promotion.image} alt={promotion.title} className={`${promotion.imageClass} rounded-lg`} />
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <h2 className="text-2xl md:text-4xl font-bold text-secondary">{promotion.title}</h2>
                <p className="text-sm md:text-lg text-justify mt-4">{promotion.text}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Promotions;
