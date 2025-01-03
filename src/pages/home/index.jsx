import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";
import TradingOpportunities from "./components/TradingOpportunities";
import InvestingSection from "./components/InvestingSection";
import TradingPlatforms from "./components/TradingPlatforms";
import MarketCategories from "./components/MarketCategories";
import ClientSlider from "./components/ClientsSlider";
import Stats from "./components/Stats";
import Deposits from "./components/Deposits";
import WhyZipphy from "./components/WhyZipphy";

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
        <Deposits />
        <InvestingSection />
        <Stats />
        <WhyZipphy />
        <MarketCategories />
      </div>
    </div>
  );
};

export default HomePage;
