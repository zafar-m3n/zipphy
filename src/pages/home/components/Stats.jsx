import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="animate-appear-left animation-range-entryCover animation-timeline-view p-8 lg:p-16">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-secondary">Our Numbers Speak For Itself</h2>
      </div>
      <div className="flex justify-around items-center">
        <div className="h-72 w-72 shadow-lg rounded-full p-4 flex justify-center items-center">
          <div className="h-64 w-64 shadow-lg rounded-full p-4 border-[20px] border-accent flex flex-col space-y-1 justify-center items-center text-center">
            <CountUp
              className="text-xl md:text-3xl font-bold"
              start={0}
              end={51966}
              duration={3}
              separator=","
              prefix="+"
            />
            <p className="text-lg">Clients</p>
          </div>
        </div>
        <div className="h-72 w-72 shadow-lg rounded-full p-4 flex justify-center items-center">
          <div className="h-64 w-64 shadow-lg rounded-full p-4 border-[20px] border-accent flex flex-col space-y-1 justify-center items-center text-center">
            <CountUp className="text-xl md:text-3xl font-bold" start={0} end={72} duration={3} suffix="%" />
            <p className="text-lg">Client Profit Percentage</p>
          </div>
        </div>
        <div className="h-72 w-72 shadow-lg rounded-full p-4 flex justify-center items-center">
          <div className="h-64 w-64 shadow-lg rounded-full p-4 border-[20px] border-accent flex flex-col space-y-1 justify-center items-center text-center">
            <CountUp className="text-xl md:text-3xl font-bold" start={0} end={100} duration={3} />
            <p className="text-lg">IB Brokers</p>
          </div>
        </div>
        <div className="h-72 w-72 shadow-lg rounded-full p-4 flex justify-center items-center">
          <div className="h-64 w-64 shadow-lg rounded-full p-4 border-[20px] border-accent flex flex-col space-y-1 justify-center items-center text-center">
            <CountUp className="text-xl md:text-3xl font-bold" start={0} end={1906} duration={3} separator="," />
            <p className="text-lg">Premium Account Holders</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
