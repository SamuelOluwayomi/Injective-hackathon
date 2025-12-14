import { useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 0, speed = 80, className = "" }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const words = text.split(' ').filter(word => word.trim().length > 0);

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setHasStarted(true);
        }, delay);

        return () => clearTimeout(startTimer);
    }, [delay]);

    useEffect(() => {
        if (!hasStarted || currentWordIndex >= words.length) {
            if (currentWordIndex >= words.length) {
                setIsComplete(true);
            }
            return;
        }

        const timer = setTimeout(() => {
            setDisplayedText(prev => {
                const word = words[currentWordIndex];
                return prev ? `${prev} ${word}` : word;
            });
            setCurrentWordIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
    }, [hasStarted, currentWordIndex, words, speed]);

    return (
        <p className={className}>
            {displayedText}
            {hasStarted && !isComplete && (
                <span className="inline-block w-0.5 h-5 bg-inj-teal dark:bg-inj-blue ml-1 animate-pulse"></span>
            )}
        </p>
    );
};

export default TypewriterText;
