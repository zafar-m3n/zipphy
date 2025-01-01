import React from "react";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";
import TradingOpportunities from "./components/TradingOpportunities";

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
    </div>
  );
};

export default HomePage;
