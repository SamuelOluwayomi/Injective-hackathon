import { Zap, Rocket, Code, TrendingUp, Users, Wallet, Globe } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import BackgroundEffects from './BackgroundEffects';

const Ecosystem = () => {
    const [sectionRef, isSectionVisible] = useScrollReveal();

    const apps = [
        { name: "Helix", desc: "The premier decentralized exchange for trading cross-chain crypto assets.", color: "from-blue-500 to-cyan-500", tag: "DEX", url: "https://helixapp.com" },
        { name: "Mito", desc: "A groundbreaking protocol for automated trading vaults and launchpads.", color: "from-purple-500 to-pink-500", tag: "DeFi", url: "https://mito.fi" },
        { name: "Hydro", desc: "The native liquid staking protocol for the Injective Network.", color: "from-green-500 to-emerald-500", tag: "Liquid Staking", url: "https://hydroprotocol.finance/" },
        { name: "Black Panther", desc: "Asset management protocol helping users achieve superior returns.", color: "from-orange-500 to-red-500", tag: "Asset Mgmt", url: "https://blackpanther.fi" }
    ];

    return (
        <div ref={sectionRef} className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-[#0B1221]">
            <BackgroundEffects />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-6 scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`}>
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Thriving <span className="text-inj-purple">Ecosystem</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Discover the cutting-edge applications built on Injective. From next-gen DEXs to automated yield strategies.
                        </p>
                    </div>
                    <a
                        href="https://injhub.com/ecosystem/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all font-semibold text-gray-900 dark:text-white whitespace-nowrap"
                    >
                        Explore All 100+ Apps
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {apps.map((app, idx) => {
                        // Map app names to their background images
                        const bgImages = {
                            "Helix": "/helix-bg.jpg",
                            "Mito": "/mito-bg.png",
                            "Hydro": "/hydro-bg.jpg",
                            "Black Panther": "/blackpanther-bg.jpg"
                        };

                        const hasBgImage = bgImages[app.name];

                        return (
                            <a
                                key={idx}
                                href={app.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`glass-card p-1 group flex flex-col h-full cursor-pointer overflow-hidden relative scroll-reveal ${isSectionVisible ? 'is-visible' : ''} block`}
                                style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
                            >
                                {/* Background image for cards */}
                                {hasBgImage && (
                                    <>
                                        <div
                                            className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                                            style={{ backgroundImage: `url(${bgImages[app.name]})` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/30"></div>
                                    </>
                                )}

                                <div className={`absolute top-0 left-0 w-1 h-full bg-linear-to-b ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                <div className={`p-8 flex-1 ${hasBgImage ? 'bg-transparent' : 'bg-white/40 dark:bg-[#0B0B15]/40'} rounded-xl h-full flex flex-col relative z-10`}>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`text-2xl font-bold ${hasBgImage ? 'text-white' : `bg-linear-to-r ${app.color} bg-clip-text text-transparent`}`}>
                                            {app.name}
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${hasBgImage ? 'bg-white/20 text-white border-white/30' : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10'} border`}>
                                            {app.tag}
                                        </span>
                                    </div>
                                    <p className={`text-lg leading-relaxed mb-6 flex-1 ${hasBgImage ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}`}>
                                        {app.desc}
                                    </p>
                                    <div className={`flex items-center text-sm font-semibold ${hasBgImage ? 'text-white group-hover:text-cyan-300' : 'text-gray-900 dark:text-white group-hover:text-inj-blue dark:group-hover:text-inj-teal'} transition-colors`}>
                                        Launch App <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Ecosystem;
