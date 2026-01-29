"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../../components/Button";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { WaitlistModal } from "./WaitlistModal";

const chatcoachImages = [
  "/images/chatcoach.png",
  "/images/chatcoach2.png",
  "/images/chatcoach3.png",
  "/images/chatcoach4.png",
];

export const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % chatcoachImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
            Learn Communication
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
            from Digital Twins of Your Favorite Coaches
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
          Improve your conversations instantly with real-time, EQ-driven coaching — and soon,
          choose Digital Twins modeled on negotiation experts, dating coaches, therapists, founders, and more. Powered by private models — your client data never leaves our secure ecosystem.
          </p>
          
          {/* Product Screenshot Carousel */}
          <div className="relative mt-12 mb-8 flex justify-center">
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-2xl -z-10" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm">
                <div className="relative aspect-video w-full">
                  {chatcoachImages.map((src, index) => (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentImageIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`Chat Coach interface screenshot ${index + 1} showing real-time communication guidance`}
                        width={1920}
                        height={1080}
                        className="w-full h-full object-contain"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {chatcoachImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "w-8 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev - 1 + chatcoachImages.length) % chatcoachImages.length
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 backdrop-blur-sm rounded-full p-2 transition-all duration-300 z-10"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex((prev) => (prev + 1) % chatcoachImages.length)
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 backdrop-blur-sm rounded-full p-2 transition-all duration-300 z-10"
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
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

