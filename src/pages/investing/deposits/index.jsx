import React from "react";
import ContactForm from "@/components/ContactForm";

const Deposits = () => {
  const accountData = [
    {
      type: "Classic",
      minimumDeposit: "$100",
      minimumWithdrawal: "$50",
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

  return (
    <>
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Left Side - Image */}
          <div className="md:w-1/2 relative">
            <img
              src="https://via.placeholder.com/500x700"
              alt="Seamless Financial Transactions"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2">
            <p className="text-accent uppercase font-bold text-sm">Efficiency</p>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mt-2">Seamless Financial Transactions</h1>
            <p className="text-gray-700 mt-4">
              At Zipphy, we understand the importance of smooth and secure financial transactions in the world of
              trading. Our platform offers import {ContactForm} from '@/components/ContactForm'; a user-friendly
              interface for hassle-free deposits and withdrawals. Easily fund your account to start trading or withdraw
              your profits with confidence.
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
