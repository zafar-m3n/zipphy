import React from "react";
import Icon from "@/components/ui/Icon";

const Deposits = () => {
  return (
    <section className="py-16 px-8 lg:py-24 lg:px-16 animate-appear-right animation-range-entryCover animation-timeline-view">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold text-primary text-center lg:text-left">
            Instant Deposit & Withdrawals
          </h2>
          <p className="text-sm md:text-lg text-secondary text-justify">
            Experience seamless trading with our instant deposit and withdrawal services. At the heart of our platform
            is a commitment to empowering traders with fast, secure, and reliable financial transactions.
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
              <p className="text-justify text-sm md:text-base">
                Enjoy lightning-fast deposits and withdrawals, enabling you to seize trading opportunities without
                delays.
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
                Choose from a wide range of secure payment methods, including bank transfers, credit/debit cards, and
                e-wallets.
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
                Make deposits or request withdrawals at any time, ensuring uninterrupted access to your funds whenever
                you need them.
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
                Transparent transactions with zero hidden charges, giving you full control over your funds.
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
                Advanced encryption and fraud detection measures safeguard your transactions, ensuring your financial
                data is always protected.
              </p>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <img src="/images/card.jpg" alt="Trading Platform" />
        </div>
      </div>
    </section>
  );
};

export default Deposits;
