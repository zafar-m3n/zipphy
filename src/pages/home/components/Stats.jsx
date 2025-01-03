import React from "react";

const Stats = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary">Our Numbers Speak For Itself</h2>
        </div>
        <div className="flex justify-around items-center">
          <div className="h-72 w-72 shadow-lg rounded-full animate-float p-4 flex justify-center items-center">
            <div className="h-64 w-64 shadow-lg rounded-full animate-float p-4 border-[20px] border-accent flex flex-col space-y-1 justify-center items-center text-center">
              <p className="text-xl md:text-3xl font-bold">51,966+</p>
              <p className="text-lg">Clients</p>
            </div>
          </div>
          <div className="h-72 w-72 shadow-lg rounded-full animate-float p-4 flex justify-center items-center">
            <div className="h-64 w-64 shadow-lg rounded-full animate-float p-4 border-[20px] border-accent flex flex-col space-y-1 justify-center items-center text-center">
              <p className="text-xl md:text-3xl font-bold">72%</p>
              <p className="text-lg">Client Profit Percentage</p>
            </div>
          </div>
          <div className="h-72 w-72 shadow-lg rounded-full animate-float p-4 flex justify-center items-center">
            <div className="h-64 w-64 shadow-lg rounded-full animate-float p-4 border-[20px] border-accent flex flex-col space-y-1 justify-center items-center text-center">
              <p className="text-xl md:text-3xl font-bold">100</p>
              <p className="text-lg">IB Brokers</p>
            </div>
          </div>
          <div className="h-72 w-72 shadow-lg rounded-full animate-float p-4 flex justify-center items-center">
            <div className="h-64 w-64 shadow-lg rounded-full animate-float p-4 border-[20px] border-accent flex flex-col space-y-1 justify-center items-center text-center">
              <p className="text-xl md:text-3xl font-bold">1,906+</p>
              <p className="text-lg">Premium Account Holders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
