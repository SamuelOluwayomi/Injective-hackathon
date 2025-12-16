import React, { useEffect, useState } from 'react';
import { Activity, Database, Zap, TrendingUp, Clock, Network, Rocket } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function InjectiveNetworkStats() {
    const [stats, setStats] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [sectionRef, isSectionVisible] = useScrollReveal(); // Initialize scroll reveal

    // Randomized floating elements configuration (Copied from Hero)
    const floatingIcons = [
        { Icon: Zap, className: "w-12 h-12 text-blue-500 dark:text-blue-400", top: "10%", left: "5%", anim: "animate-float", delay: "0s" },
        { Icon: Rocket, className: "w-8 h-8 text-purple-400 dark:text-purple-300 -rotate-12", top: "30%", left: "15%", anim: "animate-float-delayed", delay: "2s" },
        { Icon: Zap, className: "w-6 h-6 text-cyan-400 dark:text-cyan-300", top: "60%", left: "8%", anim: "animate-pulse-slow", delay: "1s" },
        { Icon: Rocket, className: "w-10 h-10 text-pink-500 dark:text-pink-400 rotate-45", top: "80%", left: "12%", anim: "animate-float-chaotic", delay: "0.5s" },
        { Icon: Zap, className: "w-4 h-4 text-white/50", top: "40%", left: "25%", anim: "animate-float-fast", delay: "3s" },
        // Light version for stats section
        { Icon: Rocket, className: "w-12 h-12 text-purple-500 dark:text-purple-400 rotate-12", top: "15%", right: "10%", anim: "animate-float-delayed", delay: "1s" },
        { Icon: Zap, className: "w-8 h-8 text-blue-400 dark:text-blue-300", top: "45%", right: "15%", anim: "animate-float", delay: "0.5s" },
    ];

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('https://sentry.lcd.injective.network/cosmos/base/tendermint/v1beta1/blocks/latest');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                // Transform the API response to match our expected format
                const transformedData = {
                    chainId: data.block?.header?.chain_id || 'injective-1',
                    latestBlockHeight: data.block?.header?.height || 'N/A',
                    blockTime: '~0.8s', // Injective's average block time
                };
                setStats(transformedData);
                setError(false);
            } catch (err) {
                console.error('Error fetching Injective network stats:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
        // Refresh stats every 30 seconds
        const interval = setInterval(fetchStats, 30000);
        return () => clearInterval(interval);
    }, []);

    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="p-8 rounded-3xl bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <Activity className="w-6 h-6 text-red-400" />
                        <div>
                            <h3 className="text-lg font-semibold text-red-400">Network Data Unavailable</h3>
                            <p className="text-sm text-red-300/80 mt-1">
                                Unable to load Injective network statistics. Please check your connection.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (loading || !stats) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="p-8 rounded-3xl bg-white/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-2 border-inj-teal/30 border-t-inj-teal rounded-full animate-spin"></div>
                        <p className="text-gray-600 dark:text-gray-400">Loading Injective network statistics...</p>
                    </div>
                </div>
            </div>
        );
    }

    const networkStats = [
        {
            icon: Network,
            label: 'Network',
            value: 'Injective Mainnet',
            color: 'text-inj-blue',
            bgColor: 'bg-inj-blue/10',
        },
        {
            icon: Database,
            label: 'Chain ID',
            value: stats.chainId || 'N/A',
            color: 'text-inj-teal',
            bgColor: 'bg-inj-teal/10',
        },
        {
            icon: TrendingUp,
            label: 'Latest Block',
            value: stats.latestBlockHeight ? Number(stats.latestBlockHeight).toLocaleString() : 'N/A',
            color: 'text-inj-purple',
            bgColor: 'bg-inj-purple/10',
        },
        {
            icon: Clock,
            label: 'Block Time',
            value: stats.blockTime || '~0.8s',
            color: 'text-emerald-400',
            bgColor: 'bg-emerald-400/10',
        },
        {
            icon: Zap,
            label: 'Status',
            value: 'Active',
            color: 'text-green-400',
            bgColor: 'bg-green-400/10',
        },
        {
            icon: Activity,
            label: 'Network Type',
            value: 'Cosmos SDK',
            color: 'text-orange-400',
            bgColor: 'bg-orange-400/10',
        },
    ];

    return (
        <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-16 relative overflow-hidden bg-gray-50/50 dark:bg-[#0B1221]">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                {/* Gradient Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>

                {/* Floating Grid Lines */}
                <div className="h-full w-full" style={{
                    backgroundImage: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    animation: 'grid-flow 20s linear infinite'
                }}></div>

                {/* Randomized Floating Icons Layer */}
                {floatingIcons.map((item, idx) => (
                    <div
                        key={idx}
                        className={`absolute ${item.anim} opacity-20 dark:opacity-30`}
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

            <div className={`text-center mb-12 relative z-10 scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-inj-teal/10 border border-inj-teal/20 mb-4">
                    <Activity className="w-4 h-4 text-inj-teal animate-pulse" />
                    <span className="text-sm font-medium text-inj-teal">Live Network Data</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-inj-blue via-inj-teal to-inj-purple bg-clip-text text-transparent">
                    Injective Network Snapshot
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Real-time statistics from the Injective blockchain network
                </p>
            </div>

            <div className={`relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                {networkStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-inj-teal/10"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                                        {stat.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Additional Info Banner */}
            <div className="mt-8 p-6 rounded-2xl bg-linear-to-r from-inj-blue/10 via-inj-teal/10 to-inj-purple/10 border border-white/10 backdrop-blur-sm relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Network is operating normally • Auto-refreshes every 30 seconds
                        </p>
                    </div>
                    <a
                        href="https://explorer.injective.network/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-full bg-inj-teal/20 hover:bg-inj-teal/30 border border-inj-teal/30 text-inj-teal font-medium text-sm transition-all duration-300 hover:scale-105"
                    >
                        View Explorer →
                    </a>
                </div>
            </div>
        </section>
    );
}
