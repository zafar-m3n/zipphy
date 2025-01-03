import React from "react";
import MiniChart from "@/components/MiniChart";

const MiniChartRow = () => {
  const symbols = ["FX:EURUSD", "CAPITALCOM:GOLD", "BITSTAMP:BTCUSD", "NASDAQ:TSLA"];

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-6 flex-wrap lg:flex-nowrap">
      {symbols.map((symbol, index) => (
        <div key={index} className="w-full md:w-1/4 animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
          <MiniChart symbol={symbol} />
        </div>
      ))}
    </div>
  );
};

export default MiniChartRow;
