import React from 'react';
import { Zap, Rocket, TrendingUp, Star, Sparkles } from 'lucide-react';

const BackgroundEffects = () => {
    // Distinct Floating Icons for Light Mode (Tech/Speed Theme)
    const lightIcons = [
        { Icon: Zap, className: "w-12 h-12 text-blue-500", top: "10%", left: "5%", anim: "animate-float", delay: "0s" },
        { Icon: Rocket, className: "w-8 h-8 text-purple-500 -rotate-12", top: "30%", left: "15%", anim: "animate-float-delayed", delay: "2s" },
        { Icon: Zap, className: "w-6 h-6 text-cyan-500", top: "60%", left: "8%", anim: "animate-pulse-slow", delay: "1s" },
        { Icon: Rocket, className: "w-10 h-10 text-pink-500 rotate-45", top: "80%", left: "12%", anim: "animate-float-chaotic", delay: "0.5s" },
        { Icon: Zap, className: "w-8 h-8 text-blue-400", top: "45%", right: "15%", anim: "animate-float", delay: "0.5s" },
        { Icon: Rocket, className: "w-12 h-12 text-indigo-500 rotate-12", top: "15%", right: "10%", anim: "animate-float-delayed", delay: "1s" },
        { Icon: TrendingUp, className: "w-10 h-10 text-green-500/50", top: "20%", left: "40%", anim: "animate-float-fast", delay: "3s" },
    ];

    // Distinct Floating Icons for Dark Mode (Space/Cosmos Theme)
    const darkIcons = [
        { Icon: Star, className: "w-8 h-8 text-yellow-200", top: "15%", left: "10%", anim: "animate-pulse-slow", delay: "0s" },
        { Icon: Sparkles, className: "w-12 h-12 text-purple-300", top: "25%", right: "5%", anim: "animate-float", delay: "1.5s" },
        { Icon: Star, className: "w-4 h-4 text-white", top: "50%", left: "5%", anim: "animate-float-fast", delay: "2s" },
        { Icon: Sparkles, className: "w-10 h-10 text-cyan-300", top: "75%", left: "20%", anim: "animate-float-delayed", delay: "1s" },
        { Icon: Star, className: "w-6 h-6 text-blue-200", top: "10%", right: "20%", anim: "animate-float-chaotic", delay: "0.5s" },
        { Icon: Sparkles, className: "w-8 h-8 text-pink-300", top: "60%", right: "10%", anim: "animate-float", delay: "2.5s" },
        { Icon: Star, className: "w-5 h-5 text-teal-200", top: "85%", right: "25%", anim: "animate-pulse-slow", delay: "3s" },
        { Icon: Sparkles, className: "w-14 h-14 text-indigo-400/30 blur-[1px]", top: "5%", left: "45%", anim: "animate-float-diagonal", delay: "0s" },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>

            {/* Floating Grid Lines */}
            <div className="h-full w-full opacity-20 dark:opacity-30" style={{
                backgroundImage: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
                animation: 'grid-flow 20s linear infinite'
            }}></div>

            {/* Randomized Floating Icons Layer */}
            {/* Light Mode Icons */}
            {lightIcons.map((item, idx) => (
                <div
                    key={`light-${idx}`}
                    className={`absolute ${item.anim} opacity-70 dark:hidden`}
                    style={{
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        animationDelay: item.delay
                    }}
                >
                    <item.Icon className={item.className} />
                </div>
            ))}

            {/* Dark Mode Icons */}
            {darkIcons.map((item, idx) => (
                <div
                    key={`dark-${idx}`}
                    className={`absolute ${item.anim} hidden dark:block opacity-60`}
                    style={{
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        animationDelay: item.delay
                    }}
                >
                    <item.Icon className={item.className} />
                </div>
            ))}
        </div>
    );
};

export default BackgroundEffects;
