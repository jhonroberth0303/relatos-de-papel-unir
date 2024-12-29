import React, { useEffect } from 'react';

const InactivityDetector = ({ onInactivity, timeout = 5000 }) => { // 5 minutos por defecto
    useEffect(() => {
        let timer;

        const resetTimer = () => {
            clearTimeout(timer);
            timer = setTimeout(onInactivity, timeout);
        };

        const handleActivity = () => {
            resetTimer();
        };

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);
        window.addEventListener('scroll', handleActivity);
        window.addEventListener('click', handleActivity);

        resetTimer();

        return () => {
            clearTimeout(timer);
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            window.removeEventListener('scroll', handleActivity);
            window.removeEventListener('click', handleActivity);
        };
    }, [onInactivity, timeout]);

    return null;
};

export default InactivityDetector;