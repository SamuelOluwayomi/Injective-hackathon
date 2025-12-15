import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
    const [sectionRef, isSectionVisible] = useScrollReveal();

    const links = {
        Product: [
            { name: 'DEX', url: 'https://helixapp.com' },
            { name: 'Bridge', url: 'https://hub.injective.network/bridge' },
            { name: 'Explorer', url: 'https://explorer.injective.network' },
            { name: 'Staking', url: 'https://hub.injective.network/staking' }
        ],
        Developers: [
            { name: 'Documentation', url: 'https://docs.injective.network' },
            { name: 'GitHub', url: 'https://github.com/InjectiveLabs' },
            { name: 'SDK', url: 'https://docs.injective.network/develop/tools/injectivets' },
            { name: 'API', url: 'https://api.injective.network' }
        ],
        Community: [
            { name: 'Discord', url: 'https://discord.gg/injective' },
            { name: 'Twitter', url: 'https://twitter.com/InjectiveLabs' },
            { name: 'Telegram', url: 'https://t.me/joininjective' },
            { name: 'Forum', url: 'https://hub.injective.network/governance' }
        ],
        Company: [
            { name: 'About', url: 'https://injective.com/about' },
            { name: 'Blog', url: 'https://blog.injective.com' },
            { name: 'Careers', url: 'https://injective.com/careers' },
            { name: 'Brand', url: 'https://injective.com/brand' }
        ]
    };

    return (
        <footer ref={sectionRef} className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0B0B15]">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
                <div className={`grid md:grid-cols-5 gap-12 mb-16 scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`}>
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold bg-linear-to-r from-inj-blue to-inj-teal bg-clip-text text-transparent mb-4">
                            Injective
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            The blockchain built for finance. Unwavering speed, zero gas fees.
                        </p>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([category, items], idx) => (
                        <div key={category}>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{category}</h4>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 dark:text-gray-400 hover:text-inj-blue dark:hover:text-inj-teal transition-colors text-sm"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={`pt-8 border-t border-gray-100 dark:border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                    <p className="text-gray-400 dark:text-gray-600 text-xs">
                        &copy; 2025 Injective Protocol. All rights reserved.
                    </p>
                    <p className="text-gray-400 dark:text-gray-600 text-xs flex items-center gap-1">
                        Built for <span className="font-bold text-gray-500 dark:text-gray-500">Injective Ecosystem Hackathon 2025</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;