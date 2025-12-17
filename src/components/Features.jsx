import React, { useState, useEffect } from 'react';
import { Zap, Shield, Globe, Layers, TrendingUp, Users, Code, Wallet, Rocket, Star, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

import BackgroundEffects from './BackgroundEffects';

// --- HOOKS ---
const useInjectiveTelemetry = () => {
    const [blockHeight, setBlockHeight] = useState(64231900);
    const [tps, setTps] = useState(2400);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlockHeight(prev => prev + 1);
            setTps(prev => 2000 + Math.floor(Math.random() * 800));
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return { blockHeight, tps };
};

const FeatureCard = ({ title, description, icon: Icon, children, className, href, delay }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 backdrop-blur-sm hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer ${className}`}
        style={{ transitionDelay: delay }}
    >
        {/* Hover Gradient Border Effect */}
        <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-inj-blue/30 transition-colors duration-300 pointer-events-none"></div>

        <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-inj-blue dark:text-inj-teal group-hover:scale-110 group-hover:bg-inj-blue/10 transition-all duration-300 shadow-sm">
                <Icon className="w-6 h-6" />
            </div>
            {/* Subtle Glow Check */}
            <div className="w-2 h-2 rounded-full bg-inj-blue shadow-[0_0_10px_rgba(59,130,246,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-inj-blue dark:group-hover:text-inj-teal transition-colors">
            {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
            {description}
        </p>

        {/* Slot for Telemetry/Extra Content */}
        <div className="mt-auto">
            {children}
        </div>
    </a>
);

const Features = () => {
    const [sectionRef, isSectionVisible] = useScrollReveal();
    const { blockHeight, tps } = useInjectiveTelemetry();

    const stats = [
        { label: "Total Value Locked", value: "$3.5B+", icon: TrendingUp },
        { label: "Active Users", value: "350K+", icon: Users },
        { label: "Daily Transactions", value: "2.5M+", icon: Code },
        { label: "Supported Assets", value: "300+", icon: Wallet }
    ];

    return (
        <div ref={sectionRef} className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-[#0B1221]">
            <BackgroundEffects />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`}>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Engineered for <span className="bg-linear-to-r from-inj-blue to-inj-teal bg-clip-text text-transparent">Performance</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Built from the ground up to deliver institutional-grade trading infrastructure with unparalleled speed and security.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)] mb-24 scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`}>

                    {/* Card 1: Lightning Fast (Long Vertical) */}
                    <FeatureCard
                        title="Lightning Fast"
                        description="Sub-second block finality with instant transaction confirmation."
                        icon={Zap}
                        className="md:row-span-2 bg-linear-to-b from-white to-gray-50 dark:from-white/5 dark:to-transparent"
                        href="https://docs.injective.network/"
                        delay="0s"
                    >
                        {/* Live Telemetry Panel */}
                        <div className="p-4 rounded-xl bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 font-mono text-xs text-gray-500 dark:text-slate-400">
                            <div className="flex justify-between mb-2">
                                <span>Block Height</span>
                                <span className="text-inj-blue dark:text-[#00F2FE]">{blockHeight.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between mb-3">
                                <span>Avg. Block Time</span>
                                <span className="text-green-500">0.8s</span>
                            </div>
                            {/* Live Sync Bar */}
                            <div className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden relative">
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-inj-blue to-transparent w-1/2 animate-[shimmer_1.5s_infinite_linear]" />
                            </div>
                            <div className="text-[10px] text-right mt-2 text-gray-400 dark:text-slate-600 flex items-center justify-end gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Live Sync
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 2: Cross-Chain (Wide) */}
                    <FeatureCard
                        title="Cross-Chain"
                        description="Native interoperability across 50+ blockchain networks via IBC and Wormhole."
                        icon={Globe}
                        className="md:col-span-2"
                        href="https://bridge.injective.network/"
                        delay="0.1s"
                    >
                        <div className="flex flex-wrap gap-2 mt-2">
                            {['Ethereum', 'Solana', 'Cosmos', 'Avalanche', 'Arbitrum'].map((chain) => (
                                <span key={chain} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs text-gray-600 dark:text-slate-300 font-medium">
                                    {chain}
                                </span>
                            ))}
                            <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-[#00F2FE]/10 border border-blue-100 dark:border-[#00F2FE]/20 text-xs text-inj-blue dark:text-[#00F2FE] animate-pulse">
                                +45 More
                            </span>
                        </div>
                    </FeatureCard>

                    {/* Card 3: Fully Decentralized */}
                    <FeatureCard
                        title="Fully Decentralized"
                        description="Built on Cosmos SDK with a complete on-chain orderbook. MEV resistant."
                        icon={Shield}
                        href="https://hub.injective.network/"
                        delay="0.2s"
                    />

                    {/* Card 4: DeFi Native */}
                    <FeatureCard
                        title="DeFi Native"
                        description="Advanced derivatives, spot trading, and perpetual markets modules."
                        icon={Layers}
                        href="https://injhub.com/ecosystem/"
                        delay="0.3s"
                    />
                </div>

                {/* Stats Dashboard (Telemetry Style) */}
                <div className={`relative rounded-3xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md p-8 md:p-10 overflow-hidden scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col gap-2 group">
                                <div className="flex items-center gap-3 text-inj-blue dark:text-inj-teal mb-1">
                                    <stat.icon className="w-5 h-5" />
                                    <span className="text-xs font-mono font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">{stat.label}</span>
                                    {/* Add a subtle live indicator to the first stat or all */}
                                    {idx === 2 && (
                                        <span className="flex h-2 w-2 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                    )}
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white font-mono tracking-tight group-hover:text-inj-blue dark:group-hover:text-inj-teal transition-colors duration-300">
                                    {stat.label === "Daily Transactions" ? tps.toLocaleString() : stat.value}
                                </div>
                                {/* Divider for mobile/tablet visual separation */}
                                <div className="w-full h-px bg-gray-200 dark:bg-white/5 mt-4 lg:hidden"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
