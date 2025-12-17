import React, { Suspense, lazy } from 'react';
import { Analytics } from "@vercel/analytics/react";
import LoadingFallback from "./components/LoadingFallback";

import BackgroundEffects from "./components/BackgroundEffects";

// Lazy load components for better performance
// Lazy load components for better performance
const Hero = lazy(() => import("./components/Hero"));
const Features = lazy(() => import("./components/Features"));
const InjectiveEcosystemOverview = lazy(() => import("./components/InjectiveEcosystemOverview"));
const Ecosystem = lazy(() => import("./components/Ecosystem"));
const InjectiveNetworkStats = lazy(() => import("./components/InjectiveNetworkStats"));
const InjectiveExplorer = lazy(() => import("./components/InjectiveExplorer"));
const Ninjalabs = lazy(() => import("./components/Ninjalabs"));
const Footer = lazy(() => import("./components/Footer"));
const ThemeToggle = lazy(() => import("./components/ThemeToggle"));

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden font-sans selection:bg-inj-teal selection:text-black">

      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-inj-blue/30 dark:bg-inj-blue/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-inj-purple/30 dark:bg-inj-purple/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <Suspense fallback={<LoadingFallback />}>
        <ThemeToggle />

        <div className="relative z-10">
          <Hero />
          <Features />
          <InjectiveEcosystemOverview />
          <Ecosystem />
          <InjectiveNetworkStats />
          <InjectiveExplorer />
          <Ninjalabs />
          <Footer />
        </div>
      </Suspense>
      <Analytics />
    </div>
  );
}
