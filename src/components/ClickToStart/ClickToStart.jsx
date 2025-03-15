import React, { useState, useEffect } from 'react';
import './ClickToStart.css';
import UserPage from '../UserPage/UserPage';
import { useHistory } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/loadingScreen'; // Import Loading Screen

function ClickToStart() {
    const [isStartingScreenVisible, setIsStartingScreenVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);  // Track the loading state
    const history = useHistory();

    const handleStartClick = () => {
        setIsLoading(true);  // Start loading screen
        setIsStartingScreenVisible(false);  // Hide starting screen
        setTimeout(() => {
            setIsLoading(false); // Hide loading screen after 3 seconds
            history.push("/user"); // Redirect to user page
        }, 3000);  // Show the loading screen for 3 seconds
    }

    const createStars = () => {
        const startingScreen = document.querySelector('.startingScreen');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            startingScreen.appendChild(star);
        }
    };

    useEffect(() => {
        createStars();
    }, []);

    return (
        <div>
            {/* Show Loading Screen while the app is loading */}
            {isLoading ? (
                <LoadingScreen /> // This is where your loading screen appears
            ) : (
                <>
                    {/* Starting Screen */}
                    {isStartingScreenVisible && (
                        <div className="startingScreen" onClick={handleStartClick}>
                            <h2 className="resumeTitle">Seth Baxendell's Resume</h2>
                            <h1 className="startText">Click Anywhere To Start</h1>
                        </div>
                    )}

                    {/* Main Content (UserPage) */}
                    {!isStartingScreenVisible && !isLoading && (
                        <div className="mainContent">
                            <UserPage />
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default ClickToStart;
