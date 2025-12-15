import { Rocket, Target, Cpu, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const NinjaLabs = () => {
    const [sectionRef, isSectionVisible] = useScrollReveal();

    const offerings = [
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Launch Your Project",
            description: "Get expert support to bring your DeFi vision to life on Injective"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Growth & Marketing",
            description: "Access strategic resources to scale your project and reach users"
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "Technical Resources",
            description: "Leverage cutting-edge tools and infrastructure for development"
        }
    ];

    return (
        <div ref={sectionRef} className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className={`glass rounded-3xl p-8 md:p-16 border border-indigo-500/10 dark:border-indigo-500/20 relative overflow-hidden scroll-reveal ${isSectionVisible ? 'is-visible' : ''}`}>

                    {/* Background blob */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6">
                                Injective Ninja Labs
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                                Build the Future with <span className="text-inj-purple">Ninja Labs</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Join the premier incubator for Injective projects. Get funding, mentorship, and resources to accelerate your DeFi innovation.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {offerings.map((offering, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white mx-auto mb-4">
                                        {offering.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{offering.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{offering.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <a
                                href="https://ninjalabs.injective.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all hover:-translate-y-1 inline-flex items-center gap-2 group"
                            >
                                Apply to Ninja Labs
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NinjaLabs;
