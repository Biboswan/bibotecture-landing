"use client";

import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export const HowItWorksSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const steps = [
    {
      number: "1",
      title: "Connect Chat Coach to your messaging app",
      description: "Seamlessly integrate Chat Coach as a side panel in your conversations. Your privacy is protected — we analyze context, not content.",
    },
    {
      number: "2",
      title: "Get real-time communication insights",
      description: "Chat Coach analyzes tone, emotional cues, and conversation patterns as you chat, providing instant guidance when you need it.",
    },
    {
      number: "3",
      title: "Ask for guidance or explore quick suggestions",
      description: "Get answers about communication psychology, emotional intelligence, difficult conversations, and more — right when you need them.",
    },
  ];

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          How It Works
        </h2>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <Step
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

