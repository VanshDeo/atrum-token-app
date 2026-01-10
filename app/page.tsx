"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// SocialDownloader removed
import HowItWorks from "./components/HowItWorks";
import TechnicalArchitecture from "./components/TechnicalArchitecture"; // Now Features
import Tokenomics from "./components/Tokenomics"; // Now Token Utility
import StakingRewards from "./components/StakingRewards"; // Now How Users Earn
import Security from "./components/Security";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Marquee from "./components/Marquee";
// Marquee, Roadmap, About removed

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <main className="flex flex-col min-h-screen relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <Marquee />
      <HowItWorks />
      <TechnicalArchitecture />
      <StakingRewards />
      <Tokenomics />
      <Security />
      <Vision />
      <Footer />
    </main>
  );
}
