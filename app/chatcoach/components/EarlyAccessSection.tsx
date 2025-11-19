"use client";

import React, { useState } from "react";
import { Button } from "../../components/Button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { WaitlistModal } from "./WaitlistModal";

export const EarlyAccessSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50/50 via-purple-50/50 to-pink-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
          Get 1 Month of Early Access —{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Free.
          </span>
        </h2>
        
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Be among the first to experience AI-powered communication insights.
          Early testers get unlimited access for 30 days while we polish the
          full experience.
        </p>
        
        <Button
          variant="primary"
          onClick={() => setIsModalOpen(true)}
          className="text-lg px-12 py-5 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          Claim Early Access
        </Button>
      </div>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="early-access"
      />
    </section>
  );
};

