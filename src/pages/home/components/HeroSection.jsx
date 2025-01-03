import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const slides = [
    {
      image: "/images/hero-4.png",
      title: "Trade Smarter, Not Harder",
      description: "Join millions of traders leveraging cutting-edge tools for maximum returns.",
      button: "Start Trading",
      alignment: "text-right justify-end",
      opacity: "bg-opacity-50",
    },
    {
      image: "/images/hero-2.jpg",
      title: "Analyze the Market with Precision",
      description: "Stay ahead with real-time data and expert insights at your fingertips.",
      button: "Learn More",
      alignment: "text-left justify-start",
      opacity: "bg-opacity-50",
    },
    {
      image: "/images/hero-5.png",
      title: "Your Journey to Financial Freedom",
      description: "Achieve your goals with a platform designed for traders of all levels.",
      button: "Get Started",
      alignment: "text-center justify-center",
      opacity: "bg-opacity-60",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className="relative h-96 lg:h-screen flex flex-col justify-center text-white"
      style={{
        backgroundImage: `url(${slides[currentIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className={`absolute inset-0 bg-black ${slides[currentIndex].opacity} flex items-center`}>
        <div className={`container mx-auto flex items-center ${slides[currentIndex].alignment}`}>
          <div className="max-w-2xl p-8 animation-fadeInUp" style={{ animation: "fadeInUp 1s ease-out" }}>
            <h1 className="text-2xl md:text-5xl font-bold mb-4">{slides[currentIndex].title}</h1>
            <p className="text-sm md:text-lg mb-6">{slides[currentIndex].description}</p>
            <button
              className="px-3 md:px-6 p-1.5 md:py-3 bg-accent text-white rounded-sm md:rounded-lg text-sm md:text-lg hover:bg-opacity-80 transition"
              onClick={() => window.open("https://app.zipphy.com/login", "_blank")}
            >
              {slides[currentIndex].button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
