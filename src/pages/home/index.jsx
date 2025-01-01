import React from "react";
import HeroSection from "./components/HeroSection";
import Welcome from "./components/Welcome";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-accent to-primary">
      <HeroSection />
      <div className="container mx-auto">
        <Welcome />
      </div>
    </div>
  );
};

export default HomePage;
