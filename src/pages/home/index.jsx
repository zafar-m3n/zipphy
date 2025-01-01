import React from "react";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";
import TradingOpportunities from "./components/TradingOpportunities";
import InvestingSection from "./components/InvestingSection";
import TradingPlatforms from "./components/TradingPlatforms";
import MarketCategories from "./components/MarketCategories";
import ClientSlider from "./components/ClientsSlider";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <div className="container mx-auto">
        <Welcome />
        <TradingPlatforms />
        <TradingOpportunities />
        <ClientSlider />
        <InvestingSection />
        <MarketCategories />
      </div>
    </div>
  );
};

export default HomePage;
