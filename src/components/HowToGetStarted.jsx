import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Sign Up",
    text: "Begin your journey by signing up for a trading account. Get started with a simple registration process and gain access to exclusive benefits.",
    icon: "📧",
  },
  {
    id: 2,
    title: "Fund Your Account",
    text: "Choose from multiple options to fund your account securely. Leverage our flexible deposit methods to start trading.",
    icon: "💳",
  },
  {
    id: 3,
    title: "Trade",
    text: "With your account funded, dive into the market. Access real-time tools and start trading with confidence.",
    icon: "📈",
  },
];

const HowToGetStarted = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center mb-6">How To Get Started</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="bg-white shadow-md rounded p-6 flex flex-col items-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          >
            <div className="text-4xl">{step.icon}</div>
            <h3 className="text-xl font-bold text-secondary">{step.title}</h3>
            <p className="text-sm md:text-lg text-center">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowToGetStarted;
