import React, { useEffect } from "react";

const promotionsData = [
  {
    id: 1,
    title: "DOUBLE DEPOSIT",
    subheading:
      "Supercharge your trading journey—double your investment instantly and unlock endless profit potential!",
    text: "Ready to transform your trading game? With Zipphy Trading’s exclusive offer, unlock a thrilling 100% bonus on your first deposit! Dive in, double your power, and watch your trades soar. \nUnleash your trading potential with Double Deposit! It’s more than a boost—it’s your gateway to bigger trades, bolder strategies, and boundless opportunities. Start strong, trade smarter, and make every move count with twice the power from day one! \nJoin us today and double your potential from the very first trade!",
    image: "/images/100.png",
    animation: "animate-fadeInUp",
    imageClass: "w-full",
  },
  {
    id: 2,
    title: "CRYPTO BONUS",
    subheading: "Kickstart your crypto journey with a bang—enjoy a 25% bonus on your first deposit!",
    text: "Step into the digital revolution—your investment, now with extra power! Ignite your crypto adventure with a sizzling 25% bonus on your first deposit! Transform your digital dreams into reality as your investment gets an instant boost. Zipphy makes every trade count. The crypto revolution is here—zip, zap, claim your bonus, and lead the charge today. \nDon’t just join the future; own it today!",
    image: "/images/25.png",
    animation: "animate-fadeInUp",
    imageClass: "w-full",
  },
  {
    id: 3,
    title: "5 LOSS-FREE TRADES",
    subheading: "Trade like a pro with 5 loss-free trades—your risk-free ticket to success!",
    text: "Step into the world of trading with zero fear of knowing there’s no risk to your journey ! Your first 5 trades are on us, Explore the markets with confidence. Test strategies, seize opportunities, and trade smarter—all with no risk to your capital. Your safety net is here; take the leap, and let success follow. Your winning streak starts now! \nJoin Zipphy today and unlock a world where your potential has no limits!  Let’s transform every challenge into a victory and turn those losses into wins!",
    image: "/images/5trades.png",
    animation: "animate-fadeInUp",
    imageClass: "w-full",
  },
  {
    id: 4,
    title: "PREPAID MASTERCARD",
    subheading: "Unlock endless benefits with our all-in-one Prepaid MasterCard—empower your wallet!",
    text: "Introducing the exclusive Zipphy Prepaid MasterCard®—crafted just for you! As a valued Premium account holder, you’re invited to unlock a world of effortless global transactions, perfectly synchronized with your Vorbex account. Whether at home or abroad, your financial freedom knows no bounds. \nExperience the ultimate convenience, as the Zipphy MasterCard® delivers seamless integration and unparalleled access to your funds—anytime, anywhere. Say goodbye to limits and hello to exclusive perks that elevate your lifestyle.",
    image: "/images/card.png",
    animation: "animate-fadeInUp",
    imageClass: "w-3/4",
  },
];

const Promotions = () => {
  useEffect(() => {
    document.title = "Zipphy | Promotions";
  }, []);

  // Function to format text by replacing \n with <br />
  const formatText = (text) => {
    return text.replace(/\n/g, "<br />");
  };

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
                <h2 className="text-xl md:text-3xl font-bold text-accent">{promotion.title}</h2>
                <h2 className="text-lg md:text-xl font-bold text-secondary">{promotion.subheading}</h2>
                <p
                  className="text-sm text-justify mt-4"
                  dangerouslySetInnerHTML={{ __html: formatText(promotion.text) }}
                />
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
                <h2 className="text-xl md:text-3xl font-bold text-accent">{promotion.title}</h2>
                <h2 className="text-lg md:text-xl font-bold text-secondary">{promotion.subheading}</h2>
                <p
                  className="text-sm text-justify mt-4"
                  dangerouslySetInnerHTML={{ __html: formatText(promotion.text) }}
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Promotions;
