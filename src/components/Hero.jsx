import { ExternalLink, Zap, TrendingUp, Wallet, Globe } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const Hero = () => {
    // Simplified Description
    const description = "The lightning-fast L1 blockchain built for finance. With 0.8s block times, ultra-low fees, and resilient infrastructure, Injective provides the ultimate foundation for the future of decentralized applications.";

    return (
        <div className="relative pt-20 pb-20 px-4 md:px-6 min-h-[90vh] flex flex-col justify-center overflow-hidden">
            <BackgroundEffects />


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
