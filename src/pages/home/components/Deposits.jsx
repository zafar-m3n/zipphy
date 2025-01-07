import React from "react";
import Icon from "@/components/ui/Icon";

const Deposits = () => {
  return (
    <section className="py-16 px-8 lg:py-24 lg:px-16 animate-appear-right animation-range-entryCover animation-timeline-view">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold text-primary text-center lg:text-left">
            Fast, Seamless Deposits and Withdrawals
          </h2>
          <p className="text-sm md:text-lg text-secondary text-justify">
            Trade without delay—enjoy instant deposits and withdrawals that put your funds at your fingertips. Fast,
            secure, and always reliable, we’re here to fuel your trading journeyTrade without delay—enjoy instant
            deposits and withdrawals that put your funds at your fingertips. Fast, secure, and always reliable, we’re
            here to fuel your trading journey.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-accent bg-secondary rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-left md:text-justify text-sm md:text-base">
                <span className="font-bold">Lightning-fast deposits and withdrawals</span> ensure you can seize trading
                opportunities without delay.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent bg-secondary rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-justify text-sm md:text-base">
                Choose from a <span className="font-bold">wide range of secure payment methods,</span> including bank
                transfers, credit/debit cards, and e-wallets.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent bg-secondary rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-justify text-sm md:text-base">
                <span className="font-bold">Access your funds anytime,</span> with the freedom to deposit or withdraw
                whenever you need.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent bg-secondary rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-justify text-sm md:text-base">
                Enjoy <span className="font-bold">transparent transactions with zero hidden fees,</span> giving you full
                control over your finances.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-accent bg-secondary rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-justify text-sm md:text-base">
                <span className="font-bold">Advanced encryption and fraud detection</span> safeguard every transaction,
                ensuring your financial data is always protected.
              </p>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <img src="/images/card.png" alt="Trading Platform" />
        </div>
      </div>
    </section>
  );
};

export default Deposits;
