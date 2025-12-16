import React from 'react';
import { Zap, Layers, Smartphone, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function InjectiveEcosystemOverview() {
    const [sectionRef, isSectionVisible] = useScrollReveal();

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-inj-blue/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-inj-purple/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className={`mb-12 scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`}>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Understanding the <span className="bg-linear-to-r from-inj-blue to-inj-purple bg-clip-text text-transparent">Injective Ecosystem</span>
                    </h2>

                    <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Injective is a purpose-built blockchain designed for decentralized
                        finance and advanced on-chain applications. It focuses on delivering
                        high performance, low latency, and near-zero fees while giving
                        developers flexible building tools. This overview is created as part
                        of the Ninja Break: Chill Building Weeks campaign to present Injective
                        from a beginner-friendly perspective.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Card 1 */}
                    <div
                        className={`group p-8 rounded-2xl bg-white/50 dark:bg-black/40 border border-gray-200 dark:border-white/10 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`}
                        style={{ transitionDelay: '0.1s' }}
                    >
                        <div className="w-12 h-12 mb-6 rounded-xl bg-inj-blue/10 flex items-center justify-center text-inj-blue group-hover:scale-110 transition-transform duration-300">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Speed & Finality</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Injective uses a Tendermint-based Proof-of-Stake consensus, allowing
                            transactions to finalize in under a second — ideal for financial
                            applications.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div
                        className={`group p-8 rounded-2xl bg-white/50 dark:bg-black/40 border border-gray-200 dark:border-white/10 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <div className="w-12 h-12 mb-6 rounded-xl bg-inj-purple/10 flex items-center justify-center text-inj-purple group-hover:scale-110 transition-transform duration-300">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Modular Architecture</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            The chain provides modular components that let developers build
                            complex DeFi systems without reinventing infrastructure.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div
                        className={`group p-8 rounded-2xl bg-white/50 dark:bg-black/40 border border-gray-200 dark:border-white/10 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`}
                        style={{ transitionDelay: '0.3s' }}
                    >
                        <div className="w-12 h-12 mb-6 rounded-xl bg-inj-teal/10 flex items-center justify-center text-inj-teal group-hover:scale-110 transition-transform duration-300">
                            <Smartphone className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">On-Chain Experience</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Injective prioritizes usability and performance, making on-chain
                            trading and interaction feel fast, accessible, and efficient.
                        </p>
                    </div>
                </div>

                <div className={`flex items-center gap-2 scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                    <p className="text-gray-600 dark:text-gray-400">
                        Learn more at
                    </p>
                    <a
                        href="https://injective.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1 text-inj-blue hover:text-inj-blue/80 font-semibold transition-colors"
                    >
                        injective.com
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
