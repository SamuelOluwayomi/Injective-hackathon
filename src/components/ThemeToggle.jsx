import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-3 rounded-full glass hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 shadow-lg group"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-yellow-400 group-hover:rotate-90 transition-transform duration-500" />
            ) : (
                <Moon className="w-6 h-6 text-indigo-500 group-hover:-rotate-12 transition-transform duration-500" />
            )}
        </button>
    );
};

export default ThemeToggle;
