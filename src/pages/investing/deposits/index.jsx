import React, { useEffect } from "react";
import ContactForm from "@/components/ContactForm";

const Deposits = () => {
  const accountData = [
    {
      type: "Classic",
      minimumDeposit: "$100",
      minimumWithdrawal: "$25",
      timeFrame: "1-3 Business Days",
    },
    {
      type: "Funded",
      minimumDeposit: "$1000",
      minimumWithdrawal: "$500",
      timeFrame: "1-2 Business Days",
    },
    {
      type: "Trader",
      minimumDeposit: "$5000",
      minimumWithdrawal: "$1000",
      timeFrame: "Within 24 Hours",
    },
    {
      type: "Expert",
      minimumDeposit: "$10,000",
      minimumWithdrawal: "$2000",
      timeFrame: "Within 24 Hours",
    },
    {
      type: "Exclusive",
      minimumDeposit: "$25,000",
      minimumWithdrawal: "$5000",
      timeFrame: "Within 12 Hours",
    },
    {
      type: "Premium",
      minimumDeposit: "$50,000",
      minimumWithdrawal: "$10,000",
      timeFrame: "Instant",
    },
  ];

  useEffect(() => {
    document.title = "Zipphy | Investing";
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <img
                src="/images/seamless1.jpg"
                alt="Trader 1"
                className="w-40 lg:w-52 rounded-lg shadow-lg absolute top-0 left-[10%] animate-float"
                style={{ animationDelay: "0s" }}
              />
              <img
                src="/images/seamless2.jpg"
                alt="Trader 2"
                className="w-52 lg:w-64 rounded-lg shadow-lg absolute top-[40%] left-[30%] transform -translate-x-1/2 animate-float"
                style={{ animationDelay: "0.5s" }}
              />
              <img
                src="/images/seamless3.jpg"
                alt="Trader 3"
                className="w-44 lg:w-56 rounded-lg shadow-lg absolute left-[60%] animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2">
            <p className="text-accent uppercase font-bold text-sm">Efficiency</p>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Seamless Financial Transactions</h1>
            <p className="text-gray-700 mt-4">
              At Zipphy, we understand the importance of smooth and secure financial transactions in the world of
              trading. Our platform offers a user-friendly interface for hassle-free deposits and withdrawals. Easily
              fund your account to start trading or withdraw your profits with confidence.
            </p>
            <p className="text-gray-700 mt-4">
              We provide a variety of secure payment methods, ensuring that your financial transactions are conducted
              seamlessly. Enjoy a smooth experience for both deposits and withdrawals, allowing you to focus on your
              trading strategies with peace of mind.
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-secondary mb-4">Deposit & Withdrawal Details</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-2 text-left">Type</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Minimum Deposit</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Minimum Withdrawal</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Dep - With - Time Frame</th>
                </tr>
              </thead>
              <tbody>
                {accountData.map((account, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="border border-gray-200 px-4 py-2">{account.type}</td>
                    <td className="border border-gray-200 px-4 py-2">{account.minimumDeposit}</td>
                    <td className="border border-gray-200 px-4 py-2">{account.minimumWithdrawal}</td>
                    <td className="border border-gray-200 px-4 py-2">{account.timeFrame}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Deposits;
