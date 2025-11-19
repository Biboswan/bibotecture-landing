"use client";

import React from "react";

export const ChatCoachFooter: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-gray-600 dark:text-gray-400">
            <p className="font-semibold">Bibotecture Ltd © 2025</p>
            <p className="mt-2 text-sm">
              Chat Coach is a product built by Bibotecture Ltd (London).
            </p>
          </div>
          <div>
            <a
              href="https://bibotecture.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 dark:text-purple-400 hover:text-cyan-600 dark:hover:text-purple-300 transition-colors duration-200 font-medium"
            >
              bibotecture.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

