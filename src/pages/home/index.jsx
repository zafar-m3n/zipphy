import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";
import TradingOpportunities from "./components/TradingOpportunities";
import InvestingSection from "./components/InvestingSection";
import TradingPlatforms from "./components/TradingPlatforms";
import MarketCategories from "./components/MarketCategories";
import ClientSlider from "./components/ClientsSlider";
import Stats from "./components/Stats";

const HomePage = () => {
  useEffect(() => {
    document.title = "Zipphy | Home";
  }, []);

  return (
    <div className="">
      <HeroSection />
      <div className="container mx-auto">
        <Welcome />
        <TradingPlatforms />
        <TradingOpportunities />
        <ClientSlider />
        <InvestingSection />
        <Stats />
        <MarketCategories />
      </div>
    </div>
  );
};

export default HomePage;
