import React from "react";
import ContactForm from "@/components/ContactForm";

const AccountTypes = () => {
  const accounts = [
    {
      name: "Classic",
      price: "$100",
      features: [
        "Daily Analysis",
        "Leverage 1:100",
        "Events and trades",
        "Spreads – Fixed",
        "Stock Trading",
        "Premium Analysis",
        "Prompt Withdrawals",
        "Premium Support",
        "Trading Central",
      ],
      cta: "Register Now!",
    },
    {
      name: "Funded",
      price: "$1000",
      features: [
        "$1000 Will be funded to your account",
        "Daily Analysis",
        "Leverage 1:100",
        "Events and trades",
        "Spreads – Fixed",
        "Stock Trading",
        "Premium Analysis",
        "Prompt Withdrawals",
        "Premium Support",
        "Trading Central",
      ],
      cta: "Register Now!",
    },
    {
      name: "Trader",
      price: "$5000",
      features: [
        "Daily Analysis",
        "Leverage 1:100",
        "Events and trades",
        "Spreads – Fixed",
        "Stock Trading",
        "Premium Analysis",
        "Prompt Withdrawals",
        "Premium Support",
        "Trading Central",
      ],
      cta: "Register Now!",
    },
    {
      name: "Expert",
      price: "$10,000",
      features: [
        "Cashback Guaranteed",
        "Daily Analysis",
        "Leverage 1:100",
        "Events and trades",
        "Spreads – Fixed",
        "Stock Trading",
        "Premium Analysis",
        "Prompt Withdrawals",
        "Premium Support",
        "Trading Central",
      ],
      cta: "Register Now!",
    },
    {
      name: "Exclusive",
      price: "$25,000",
      features: [
        "Cashback Guaranteed",
        "Daily Analysis",
        "Leverage 1:100",
        "Events and trades",
        "Spreads – Fixed",
        "Stock Trading",
        "Premium Analysis",
        "Prompt Withdrawals",
        "Premium Support",
        "Trading Central",
      ],
      cta: "Register Now!",
    },
    {
      name: "Premium",
      price: "$50,000",
      features: [
        "Cashback Guaranteed",
        "Daily Analysis",
        "Leverage 1:1500",
        "Events and trades",
        "Spreads – Fixed",
        "Stock Trading Priority Basis",
        "Premium Analysis",
        "Prompt Withdrawals",
        "Premium Support",
        "Trading Central",
        "Max. No. of Simultaneous Open Deals",
        "Increased Asset Profit",
        "Stop Out Level Notification",
        "ROI",
        "Unlimited Withdrawals",
        "Dedicated Relationship Manager",
        "24/7 Customer Support",
      ],
      cta: "Register Now!",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-8">Account Types</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accounts.map((account, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col">
              <h2 className="text-xl font-bold text-secondary text-center">{account.name}</h2>
              <p className="text-lg font-bold text-accent text-center mt-2">{account.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {account.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-accent font-bold mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="mt-auto bg-secondary text-white font-bold py-2 px-4 rounded shadow hover:bg-accent transition duration-300"
                onClick={() => window.open("https://app.zipphy.com/signup", "_blank")}
              >
                {account.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default AccountTypes;
