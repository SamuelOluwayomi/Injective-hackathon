import { ExternalLink, Zap, Rocket, TrendingUp, Wallet, Globe } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
    // Randomized floating elements configuration
    const floatingIcons = [
        // Left Side Cluster
        { Icon: Zap, className: "w-12 h-12 text-blue-500 dark:text-blue-400", top: "10%", left: "5%", anim: "animate-float", delay: "0s" },
        { Icon: Rocket, className: "w-8 h-8 text-purple-400 dark:text-purple-300 -rotate-12", top: "30%", left: "15%", anim: "animate-float-delayed", delay: "2s" },
        { Icon: Zap, className: "w-6 h-6 text-cyan-400 dark:text-cyan-300", top: "60%", left: "8%", anim: "animate-pulse-slow", delay: "1s" },
        { Icon: Rocket, className: "w-10 h-10 text-pink-500 dark:text-pink-400 rotate-45", top: "80%", left: "12%", anim: "animate-float-chaotic", delay: "0.5s" },
        { Icon: Zap, className: "w-4 h-4 text-white/50", top: "40%", left: "25%", anim: "animate-float-fast", delay: "3s" },

        // Right Side Cluster
        { Icon: Rocket, className: "w-12 h-12 text-purple-500 dark:text-purple-400 rotate-12", top: "15%", right: "10%", anim: "animate-float-delayed", delay: "1s" },
        { Icon: Zap, className: "w-8 h-8 text-blue-400 dark:text-blue-300", top: "45%", right: "15%", anim: "animate-float", delay: "0.5s" },
        { Icon: Rocket, className: "w-6 h-6 text-indigo-400 dark:text-indigo-300 -rotate-45", top: "70%", right: "8%", anim: "animate-float-chaotic", delay: "2.5s" },
        { Icon: Zap, className: "w-5 h-5 text-teal-400 dark:text-teal-300", top: "85%", right: "20%", anim: "animate-pulse-slow", delay: "1.5s" },
        { Icon: Rocket, className: "w-14 h-14 text-blue-600/20 dark:text-blue-400/20 blur-[1px]", top: "5%", right: "25%", anim: "animate-float-diagonal", delay: "0s" },

        // New Extra Randomized Group
        { Icon: Rocket, className: "w-10 h-10 text-purple-500 dark:text-purple-400 transform rotate-12", top: "-10%", right: "-2%", anim: "animate-float-delayed", delay: "1.5s" },

        // Center Area (Background/Subtle)
        { Icon: Zap, className: "w-4 h-4 text-blue-300/30", top: "20%", left: "40%", anim: "animate-float-fast", delay: "4s" },
        { Icon: Rocket, className: "w-5 h-5 text-purple-300/30 rotate-180", top: "90%", left: "45%", anim: "animate-float", delay: "2s" },
    ];

    // Simplified Description
    const description = "The lightning-fast L1 blockchain built for finance. With 0.8s block times, ultra-low fees, and resilient infrastructure, Injective provides the ultimate foundation for the future of decentralized applications.";

    return (
        <div className="relative pt-20 pb-20 px-4 md:px-6 min-h-[90vh] flex flex-col justify-center overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {/* Gradient Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>

                {/* Floating Grid Lines */}
                <div className="absolute inset-0 opacity-20 dark:opacity-30">
                    <div className="h-full w-full" style={{
                        backgroundImage: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                        animation: 'grid-flow 20s linear infinite'
                    }}></div>
                </div>

                {/* Randomized Floating Icons Layer */}
                {floatingIcons.map((item, idx) => (
                    <div
                        key={idx}
                        className={`absolute ${item.anim} opacity-40 dark:opacity-50`}
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

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Badge */}
                {/* Aurora Background Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-linear-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none -z-10"></div>

                {/* Redesigned Badge */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md shadow-lg shadow-blue-500/20 mb-10 animate-fade-in-up hover:scale-105 transition-all duration-300 group cursor-default">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                    </span>
                    <span className="text-sm font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 group-hover:bg-linear-to-l transition-all duration-500">
                        THE FUTURE OF FINANCE IS HERE
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                    <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Build the Future on</span>
                    <br />
                    <span className="bg-linear-to-r from-inj-blue via-inj-teal to-inj-purple bg-clip-text text-transparent drop-shadow-sm inline-block animate-fade-in-up animate-gradient-x" style={{ animationDelay: '0.2s', backgroundSize: '200% auto' }}>
                        Injective Protocol
                    </span>
                </h1>

                {/* Content Text with CSS Animations */}
                <div className="text-lg text-gray-600 dark:text-gray-300 space-y-6 mb-12 leading-relaxed text-center min-h-auto max-w-2xl mx-auto">
                    <p className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        {description}
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400 italic pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        Created for the <span className="font-semibold text-inj-purple">Ninja Break: Chill Building Weeks</span> hackathon.
                    </p>
                </div>

                {/* Enhanced CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <a
                        href="https://injective.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-10 py-5 bg-[#140940] hover:bg-inj-blue text-white rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 flex items-center gap-3 overflow-hidden hover:scale-110 hover:-translate-y-2"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-2 bg-[#140940] rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                        {/* Button content */}
                        <span className="relative z-10 flex items-center gap-3">
                            <span className="tracking-wide">Visit Injective.com</span>
                            <ExternalLink className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                        </span>
                    </a>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 dark:border-white/10 pt-10 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    {[
                        { label: 'Block Time', value: '0.8s', icon: <Zap className="w-5 h-5" />, url: 'https://injective.com/blog/the-november-community-update-the-injective-anniversary-issue/?' },
                        { label: 'Transactions', value: '347 M+', icon: <TrendingUp className="w-5 h-5" />, url: 'https://injective.com/blog/the-november-community-update-the-injective-anniversary-issue/?' },
                        { label: 'Avg. Cost', value: '~$0.0002', icon: <Wallet className="w-5 h-5" />, url: 'https://injective.com/blog/november-update-the-injective-anniversary-issue?' },
                        { label: 'Assets', value: '$1.32 B+', icon: <Globe className="w-5 h-5" />, url: 'https://injective.com/blog/the-november-community-update-the-injective-anniversary-issue/?' },
                    ].map((stat, idx) => (
                        <a
                            key={idx}
                            href={stat.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center group cursor-pointer hover:scale-110 transition-transform duration-300 block"
                            style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                        >
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <span className="text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {stat.icon}
                                </span>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white font-display">
                                    {stat.value}
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
