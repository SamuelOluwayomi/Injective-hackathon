import React, { useState, useEffect } from 'react';
import { Rocket, Zap, Globe, Sparkles } from 'lucide-react';

const LoadingFallback = () => {
    const [messageIndex, setMessageIndex] = useState(0);

    const funMessages = [
        "Warming up the engines... 🚀",
        "Connecting to the Injective... ⛓️",
        "Connecting to the Ninja Break... 🥷🏽",
        "Gathering cosmic data... ✨",
        "Almost there... 🎯",
        "Loading something awesome... 🌟"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % funMessages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center overflow-hidden relative">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-20 left-20 animate-float opacity-30">
                <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <div className="absolute top-40 right-20 animate-float-delayed opacity-30">
                <Rocket className="w-8 h-8 text-purple-400" />
            </div>
            <div className="absolute bottom-32 left-32 animate-float opacity-30">
                <Globe className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="absolute bottom-20 right-32 animate-float-delayed opacity-30">
                <Sparkles className="w-8 h-8 text-pink-400" />
            </div>

            <div className="text-center relative z-10">
                {/* Advanced Spinner with Orbits */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-gray-800/30"></div>

                    {/* Spinning rings */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-blue-400 animate-spin"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-400 border-l-purple-400 animate-spin-reverse"></div>
                    <div className="absolute inset-4 rounded-full border-4 border-transparent border-b-cyan-400 border-r-cyan-400 animate-spin-slow"></div>

                    {/* Center logo/icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse-glow">
                            <Rocket className="w-6 h-6 text-white animate-bounce-subtle" />
                        </div>
                    </div>

                    {/* Orbiting particles */}
                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-orbit"></div>
                    <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-400 rounded-full animate-orbit-delayed"></div>
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-orbit-slow"></div>
                </div>

                {/* Brand Text */}
                <h2 className="text-3xl font-bold mb-4">
                    <span className="bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x" style={{ backgroundSize: '200% auto' }}>
                        Injective
                    </span>
                </h2>

                {/* Fun Loading Messages */}
                <div className="h-8 mb-4">
                    <p className="text-gray-300 text-lg font-medium animate-fade-in-out">
                        {funMessages[messageIndex]}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="w-64 h-1.5 bg-gray-800 rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-progress"></div>
                </div>

                {/* Subtle tagline */}
                <p className="text-gray-500 text-sm mt-6 animate-pulse">
                    Building the future of DeFi...
                </p>
            </div>
        </div>
    );
};

export default LoadingFallback;
