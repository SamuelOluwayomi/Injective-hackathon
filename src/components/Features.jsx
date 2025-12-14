import { Zap, Shield, Globe, Layers, TrendingUp, Users, Code, Wallet } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Features = () => {
    const [sectionRef, isSectionVisible] = useScrollReveal();

    const features = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Lightning Fast",
            description: "Sub-second block finality with instant transaction confirmation",
            url: "https://docs.injective.network/"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Fully Decentralized",
            description: "Built on Cosmos SDK with complete on-chain orderbook",
            url: "https://hub.injective.network/"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Cross-Chain",
            description: "Native interoperability across 50+ blockchain networks",
            url: "https://bridge.injective.network/"
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: "DeFi Native",
            description: "Advanced derivatives, spot trading, and perpetual markets",
            url: "https://injhub.com/ecosystem/"
        }
    ];

    const stats = [
        { label: "Total Value Locked", value: "$3.5B+", icon: <TrendingUp className="w-5 h-5" /> },
        { label: "Active Users", value: "350K+", icon: <Users className="w-5 h-5" /> },
        { label: "Daily Transactions", value: "2.5M+", icon: <Code className="w-5 h-5" /> },
        { label: "Supported Assets", value: "300+", icon: <Wallet className="w-5 h-5" /> }
    ];

    return (
        <div ref={sectionRef} className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`}>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Engineered for <span className="text-inj-teal">Performance</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Built from the ground up to deliver institutional-grade trading infrastructure with unparalleled speed and security.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {features.map((feature, idx) => (
                        <a
                            key={idx}
                            href={feature.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`glass-card p-6 hover:scale-105 transition-all duration-300 scroll-reveal ${isSectionVisible ? 'is-visible' : ''} block cursor-pointer`}
                            style={{ transitionDelay: `${idx * 0.1}s` }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-inj-teal to-inj-blue flex items-center justify-center text-white mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                        </a>
                    ))}
                </div>

                {/* Stats */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2 text-inj-blue dark:text-inj-teal">
                                {stat.icon}
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
