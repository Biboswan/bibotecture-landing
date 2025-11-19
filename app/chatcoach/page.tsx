"use client";

import React from "react";
import { HeroSection } from "./components/HeroSection";
import { NarrativeSection } from "./components/NarrativeSection";
import { ProductExplanationSection } from "./components/ProductExplanationSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { EarlyAccessSection } from "./components/EarlyAccessSection";
import { ChatCoachFooter } from "./components/ChatCoachFooter";

export default function ChatCoachPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <HeroSection />
      <NarrativeSection />
      <ProductExplanationSection />
      <HowItWorksSection />
      <EarlyAccessSection />
      <ChatCoachFooter />
    </main>
  );
}
