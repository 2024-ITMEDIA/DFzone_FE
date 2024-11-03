import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../assets/lottie/scroll.json';

export default function Scroll() {
    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const opacity = scrollY < 150 ? 1 : Math.max(0, 1 - (scrollY - 150) / 5);
    const isVisible = scrollY < 200;

    return (
        <Lottie
            loop
            animationData={lottieJson}
            play
            style={{
                width: 100,
                height: 100,
                opacity: opacity,
                display: isVisible ? 'block' : 'none',
                transition: 'opacity 0.2s ease', 
            }}
        />
    );
}
