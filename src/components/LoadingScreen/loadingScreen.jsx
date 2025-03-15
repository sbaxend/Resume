import React from 'react';
import './LoadingScreen.css';  // Add a CSS file for the loading screen styles

function LoadingScreen() {
    return (
        <div className="loadingScreen">
            <h2>Thank You For Your Interest</h2>
            <br/>
            <div className="loader"></div>
        </div>
    );
}

export default LoadingScreen;