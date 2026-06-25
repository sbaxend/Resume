import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
    return (
        <div className="loadingScreen">
            <p className="loading-label">&gt; LOADING PORTFOLIO</p>
            <div className="loader-track">
                <div className="loader-scan"></div>
            </div>
            <p className="loading-sub">PLEASE STAND BY</p>
        </div>
    );
}

export default LoadingScreen;
