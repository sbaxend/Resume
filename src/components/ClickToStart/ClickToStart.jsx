import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ClickToStart.css';
import UserPage from '../UserPage/UserPage';
import { useHistory } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/loadingScreen';

function ClickToStart() {
    const [isStartingScreenVisible, setIsStartingScreenVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const hasStartedRef = useRef(false);

    const handleStartClick = useCallback(() => {
        if (hasStartedRef.current) return;
        hasStartedRef.current = true;
        setIsLoading(true);
        setIsStartingScreenVisible(false);
        setTimeout(() => {
            setIsLoading(false);
            history.push("/user");
        }, 800);
    }, [history]);

    const createStars = () => {
        const startingScreen = document.querySelector('.startingScreen');
        for (let i = 0; i < 120; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            startingScreen.appendChild(star);
        }
    };

    useEffect(() => {
        createStars();
    }, []);

    useEffect(() => {
        if (!isStartingScreenVisible) return;

        window.addEventListener('keydown', handleStartClick);
        window.addEventListener('wheel', handleStartClick, { passive: true });
        window.addEventListener('touchmove', handleStartClick, { passive: true });

        return () => {
            window.removeEventListener('keydown', handleStartClick);
            window.removeEventListener('wheel', handleStartClick);
            window.removeEventListener('touchmove', handleStartClick);
        };
    }, [isStartingScreenVisible, handleStartClick]);

    return (
        <div>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <>
                    {isStartingScreenVisible && (
                        <div className="startingScreen" onClick={handleStartClick}>
                            <span className="splash-label">&gt; PORTFOLIO ONLINE</span>
                            <h1 className="resumeTitle">SETH BAXENDELL</h1>
                            <p className="startText">CLICK ANYWHERE TO ENTER</p>
                        </div>
                    )}
                    {!isStartingScreenVisible && !isLoading && (
                        <div className="mainContent">
                            <UserPage />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default ClickToStart;
