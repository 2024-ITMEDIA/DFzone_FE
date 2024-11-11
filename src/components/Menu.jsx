import React, { useEffect, useRef } from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../assets/lottie/menu.json';

export default function Menu({ startMenu, isMenuOpen, onClick }) {
    const lottieRef = useRef();

    useEffect(() => {
        if (startMenu === 'start') {
            lottieRef.current.playSegments([0, 0], true);
        }
    }, [startMenu]);

    useEffect(() => {
        if (isMenuOpen) {
            lottieRef.current.playSegments([0, 22], true);
        } else {
            lottieRef.current.playSegments([22, 68], true);
        }
    }, [isMenuOpen]);

    return (
        <Lottie
            ref={lottieRef}
            animationData={lottieJson}
            loop={false}
            play={false}
            style={{
                width: 40,
                height: 40,
                cursor: 'pointer',
            }}
            onClick={onClick}
        />
    );
}
