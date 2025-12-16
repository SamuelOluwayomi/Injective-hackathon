import React, { useEffect, useState } from 'react';
import { Box, Activity, ExternalLink, Clock, Hash, Zap, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function InjectiveExplorer() {
    const [activeTab, setActiveTab] = useState('blocks');
    const [blocks, setBlocks] = useState([]);
    const [txs, setTxs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [sectionRef, isSectionVisible] = useScrollReveal();

    const fetchBlocks = async () => {
        try {
            const response = await fetch('https://sentry.explorer.grpc-web.injective.network/api/explorer/v1/blocks?limit=5');
            if (!response.ok) throw new Error('Failed to fetch blocks');
            const data = await response.json();
            setBlocks(data.data || []);
            setError(false);
        } catch (err) {
            console.error('Error fetching blocks:', err);
            setError(true);
        }
    };

    const fetchTxs = async () => {
        try {
            const response = await fetch('https://sentry.explorer.grpc-web.injective.network/api/explorer/v1/txs?limit=5');
            if (!response.ok) throw new Error('Failed to fetch txs');
            const data = await response.json();
            setTxs(data.data || []);
            setError(false);
        } catch (err) {
            console.error('Error fetching txs:', err);
            setError(true);
        }
    };

    const fetchData = async () => {
        if (loading) {
            await Promise.all([fetchBlocks(), fetchTxs()]);
            setLoading(false);
        } else {
            if (activeTab === 'blocks') await fetchBlocks();
            if (activeTab === 'txs') await fetchTxs();
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, [activeTab]);

    const timeAgo = (dateString) => {
        const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
        if (seconds < 60) return `${seconds}s ago`;
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m ago`;
        const hours = Math.floor(minutes / 60);
        return `${hours}h ago`;
    };

    const truncate = (str, start = 6, end = 4) => {
        if (!str) return '...';
        return `${str.substring(0, start)}...${str.substring(str.length - end)}`;
    };

    return (
        <section ref={sectionRef} className="max-w-7xl mx-auto px-6 pb-24 relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className={`relative z-10 scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`}>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="relative">
                                <Activity className="w-8 h-8 text-cyan-400" />
                                <span className="absolute inset-0 w-8 h-8 text-cyan-400 animate-ping opacity-20">
                                    <Activity className="w-8 h-8" />
                                </span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                                Live Network Activity
                            </h2>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 ml-11">
                            Real-time data from Injective Mainnet • Updates every 5 seconds
                        </p>
                    </div>

                    {/* Enhanced Tabs */}
                    <div className="flex p-1.5 rounded-2xl bg-linear-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10 backdrop-blur-sm border border-gray-300 dark:border-white/10 shadow-lg">
                        <button
                            onClick={() => setActiveTab('blocks')}
                            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'blocks'
                                ? 'bg-linear-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            <Box className="w-4 h-4" />
                            Blocks
                        </button>
                        <button
                            onClick={() => setActiveTab('txs')}
                            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === 'txs'
                                ? 'bg-linear-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            <Zap className="w-4 h-4" />
                            Transactions
                        </button>
                    </div>
                </div>

                {/* Main Card */}
                <div className="bg-white/70 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">
                    {loading ? (
                        <div className="p-20 flex flex-col items-center justify-center gap-4">
                            <div className="relative w-16 h-16">
                                <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-800"></div>
                                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 animate-spin"></div>
                                <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-400 animate-spin-reverse"></div>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 font-medium">Loading blockchain data...</p>
                        </div>
                    ) : error ? (
                        <div className="p-12 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4">
                                <Activity className="w-8 h-8 text-red-500" />
                            </div>
                            <p className="text-red-400 font-medium mb-2">Unable to load network data</p>
                            <p className="text-gray-500 text-sm">Please check your connection and try again</p>
                        </div>
                    ) : (
                        <>
                            {/* Table Header */}
                            <div className="grid grid-cols-12 gap-2 md:gap-4 px-6 py-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-linear-to-r from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 border-b border-gray-200 dark:border-white/10">
                                {activeTab === 'blocks' ? (
                                    <>
                                        <div className="col-span-4 md:col-span-2 flex items-center gap-2">
                                            <Box className="w-4 h-4" />
                                            Height
                                        </div>
                                        <div className="col-span-5 md:col-span-5">Proposer</div>
                                        <div className="hidden md:block col-span-3 text-center">Transactions</div>
                                        <div className="col-span-3 md:col-span-2 text-right flex items-center justify-end gap-1">
                                            <Clock className="w-3 h-3" />
                                            Time
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-span-4 md:col-span-3 flex items-center gap-2">
                                            <Hash className="w-4 h-4" />
                                            Hash
                                        </div>
                                        <div className="col-span-5 md:col-span-7">Message Type</div>
                                        <div className="col-span-3 md:col-span-2 text-right flex items-center justify-end gap-1">
                                            <Clock className="w-3 h-3" />
                                            Time
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Pending/Loading Row with pulse effect */}
                            <div className="grid grid-cols-12 gap-2 md:gap-4 px-6 py-5 animate-pulse bg-linear-to-r from-cyan-500/5 to-blue-500/5 border-l-4 border-cyan-400/50">
                                {activeTab === 'blocks' ? (
                                    <>
                                        <div className="col-span-4 md:col-span-2"><div className="w-20 h-5 bg-gray-200 dark:bg-white/10 rounded-lg"></div></div>
                                        <div className="col-span-5 md:col-span-5"><div className="w-32 h-5 bg-gray-200 dark:bg-white/10 rounded-lg"></div></div>
                                        <div className="hidden md:flex col-span-3 justify-center"><div className="w-12 h-5 bg-gray-200 dark:bg-white/10 rounded-lg"></div></div>
                                        <div className="col-span-3 md:col-span-2 flex justify-end"><div className="w-16 h-5 bg-gray-200 dark:bg-white/10 rounded-lg"></div></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-span-4 md:col-span-3"><div className="w-24 h-5 bg-gray-200 dark:bg-white/10 rounded-lg"></div></div>
                                        <div className="col-span-5 md:col-span-7"><div className="w-40 h-5 bg-gray-200 dark:bg-white/10 rounded-lg"></div></div>
                                        <div className="col-span-3 md:col-span-2 flex justify-end"><div className="w-16 h-5 bg-gray-200 dark:bg-white/10 rounded-lg"></div></div>
                                    </>
                                )}
                            </div>

                            {/* Data Rows */}
                            <div className="divide-y divide-gray-200 dark:divide-white/5">
                                {(activeTab === 'blocks' ? blocks : txs).map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="grid grid-cols-12 gap-2 md:gap-4 px-6 py-5 hover:bg-linear-to-r hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-300 group border-l-4 border-transparent hover:border-cyan-400 items-center"
                                        style={{ animation: `fadeIn 0.5s ease-out ${idx * 0.1}s both` }}
                                    >
                                        {activeTab === 'blocks' ? (
                                            <>
                                                <div className="col-span-4 md:col-span-2">
                                                    <a
                                                        href={`https://explorer.injective.network/block/${item.height}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 font-mono text-sm md:text-lg font-bold text-blue-600 dark:text-blue-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors group-hover:scale-105 transform duration-200"
                                                    >
                                                        <Box className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                                                        {item.height}
                                                    </a>
                                                </div>
                                                <div className="col-span-5 md:col-span-5 flex items-center">
                                                    <div className="px-2 md:px-3 py-1 md:py-1.5 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10 truncate text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
                                                        {item.moniker || truncate(item.proposer)}
                                                    </div>
                                                </div>
                                                <div className="hidden md:flex col-span-3 items-center justify-center">
                                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                                                        <TrendingUp className="w-4 h-4 text-cyan-500" />
                                                        <span className="font-mono text-lg font-bold text-gray-900 dark:text-white">
                                                            {item.num_txs}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-span-3 md:col-span-2 flex items-center justify-end">
                                                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                        <Clock className="w-3 h-3 md:w-4 md:h-4 hidden md:block" />
                                                        {timeAgo(item.timestamp)}
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="col-span-4 md:col-span-3">
                                                    <a
                                                        href={`https://explorer.injective.network/transaction/${item.hash}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 font-mono text-xs md:text-base font-bold text-purple-600 dark:text-purple-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors group-hover:scale-105 transform duration-200"
                                                    >
                                                        <Hash className="w-3 h-3 md:w-4 md:h-4 group-hover:rotate-12 transition-transform" />
                                                        {truncate(item.hash, 4, 4)}
                                                    </a>
                                                </div>
                                                <div className="col-span-5 md:col-span-7 flex flex-wrap items-center gap-2">
                                                    {(item.tx_msg_types || []).slice(0, 1).map((type, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-[10px] md:text-sm font-semibold text-gray-700 dark:text-gray-300 truncate max-w-full"
                                                        >
                                                            {type.split('.').pop().replace('Msg', '')}
                                                        </span>
                                                    ))}
                                                    {(item.tx_msg_types?.length || 0) > 1 && (
                                                        <span className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-medium hidden md:inline">
                                                            +{item.tx_msg_types.length - 1} more
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="col-span-3 md:col-span-2 flex items-center justify-end">
                                                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                        <Clock className="w-3 h-3 md:w-4 md:h-4 hidden md:block" />
                                                        {timeAgo(item.block_timestamp)}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Footer */}
                    <div className="px-6 py-5 bg-linear-to-r from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 border-t border-gray-200 dark:border-white/10 flex justify-center">
                        <a
                            href="https://explorer.injective.network"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105"
                        >
                            View Full Mainnet Explorer
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                
                .animate-spin-reverse {
                    animation: spin-reverse 1.5s linear infinite;
                }
            `}</style>
        </section>
    );
}
