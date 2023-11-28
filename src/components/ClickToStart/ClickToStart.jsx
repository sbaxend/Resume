import React, { useState, useEffect } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './ClickToStart.css'
function ClickToStart() {
    const [isStartingScreenVisible, setIsStartingScreenVisible] = useState(true);

    const handleStartClick = () => {
        setIsStartingScreenVisible(false)
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
    }, [])

    return(
        
        <div>
      {isStartingScreenVisible && (
        <div className="startingScreen" onClick={handleStartClick}>
          <h2 className="resumeTitle">Seth Baxendell's Resume</h2>
          <h1 className="startText">Click Anywhere To Start</h1>
        </div>
      )}

      {!isStartingScreenVisible && (
        <div className="mainContent">
          <LandingPage />
          
        </div>
      )}
        </div>
        
    )
}
export default ClickToStart; 