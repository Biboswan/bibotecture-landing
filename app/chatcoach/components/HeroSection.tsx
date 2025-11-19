"use client";

import React, { useState } from "react";
import { Button } from "../../components/Button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { WaitlistModal } from "./WaitlistModal";

export const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 lg:py-32 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Gradient background */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full"
          aria-hidden="true"
        />
        
        <div className="relative z-10 text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Real-time EQ-powered
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              communication coaching
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Chat Coach helps you understand conversations, respond with
            confidence, and build healthier connections — in real time.
          </p>
          
          {/* Product Screenshot */}
          <div className="relative mt-12 mb-8 flex justify-center">
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-2xl -z-10" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm">
                <img
                  src="/images/chatcoach.png"
                  alt="Chat Coach interface showing real-time communication guidance integrated into messaging apps"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center pt-8">
            <Button
              variant="primary"
              onClick={() => setIsModalOpen(true)}
              className="text-lg px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Early Access (1 Month Free)
            </Button>
          </div>
        </div>
      </div>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="early-access"
      />
    </section>
  );
};

