import React from 'react';
import Hero from "./components/Hero";
import Features from "./components/Features";
import Ecosystem from "./components/Ecosystem";
import NinjaLabs from "./components/NinjaLabs";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle"; // Import ThemeToggle

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B0B15] text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden font-sans selection:bg-inj-teal selection:text-black">

      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-inj-blue/30 dark:bg-inj-blue/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-inj-purple/30 dark:bg-inj-purple/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <ThemeToggle />

      <div className="relative z-10">
        <Hero />
        <Features />
        <Ecosystem />
        <NinjaLabs />
        <Footer />
      </div>
    </div>
  );
}
