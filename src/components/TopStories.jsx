import React, { useEffect } from "react";

const TopStories = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: true,
      displayMode: "adaptive",
      width: "100%", // Make it responsive
      height: "100%", // Fill parent container
      colorTheme: "light",
      locale: "en",
    });

    const container = document.getElementById("tradingview-timeline-widget");
    container.innerHTML = "";
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container w-full h-full overflow-y-auto"
      style={{ height: "550px", border: "none" }} // Set fixed height and remove border
    >
      <div id="tradingview-timeline-widget" className="tradingview-widget-container__widget h-full"></div>
    </div>
  );
};

export default TopStories;
