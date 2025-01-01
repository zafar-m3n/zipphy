import React from "react";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";
import TradingOpportunities from "./components/TradingOpportunities";
import InvestingSection from "./components/InvestingSection";
import TradingPlatforms from "./components/TradingPlatforms";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <div className="container mx-auto">
        <Welcome />
      </div>
      <div className="bg-gradient-to-b from-accent to-primary">
        <TradingOpportunities />
      </div>
      <InvestingSection />
      <TradingPlatforms />
    </div>
  );
};

export default HomePage;
