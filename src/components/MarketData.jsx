import React, { useEffect } from "react";

const MarketData = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: 550,
      height: 550,
      symbolsGroups: [
        {
          name: "Stocks",
          symbols: [
            { name: "NASDAQ:TSLA", displayName: "Tesla Inc." },
            { name: "NASDAQ:GOOG", displayName: "Alphabet Inc." },
            { name: "NASDAQ:AAPL", displayName: "Apple Inc." },
            { name: "NASDAQ:NVDA", displayName: "Nvidia Corporation" },
            { name: "NASDAQ:AMZN", displayName: "Amazon Inc." },
          ],
        },
        {
          name: "Forex",
          symbols: [
            { name: "OANDA:GBPUSD", displayName: "GBP/USD" },
            { name: "OANDA:EURUSD", displayName: "EUR/USD" },
            { name: "FX_IDC:AEDUSD", displayName: "AED/USD" },
            { name: "FX_IDC:AEDEUR", displayName: "AED/EUR" },
            { name: "OANDA:GBPJPY", displayName: "GBP/JPY" },
          ],
        },
        {
          name: "Commodities",
          symbols: [
            { name: "CAPITALCOM:GOLD", displayName: "Gold" },
            { name: "CAPITALCOM:SILVER", displayName: "Silver" },
            { name: "TVC:USOIL", displayName: "Crude Oil" },
          ],
        },
        {
          name: "Cryptocurrency",
          symbols: [
            { name: "BITSTAMP:BTCUSD", displayName: "Bitcoin" },
            { name: "COINBASE:ETHUSD", displayName: "Ethereum" },
            { name: "COINBASE:SOLUSD", displayName: "Solana" },
          ],
        },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      colorTheme: "light",
      locale: "en",
    });

    const container = document.getElementById("tradingview-market-data-widget");
    container.innerHTML = "";
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container w-full h-full overflow-y-auto"
      style={{ height: "550px", border: "none" }}
    >
      <div
        id="tradingview-market-data-widget"
        className="tradingview-widget-container__widget h-full pointer-events-none"
      ></div>
    </div>
  );
};

export default MarketData;
