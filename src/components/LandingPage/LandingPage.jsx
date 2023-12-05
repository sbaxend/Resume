import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome To My Coding Portfolio!');
  const history = useHistory();

  const createStars = () => {
    const startingScreen = document.querySelector('.loginScreen');
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

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="loginScreen">
      <h2>{heading}</h2>

      <div>
        <div>
   
        <p>
          🌟 Explore Diverse Technologies: Dive into a world where JavaScript dances with TypeScript, where AWS clouds shape the horizon, and where HTML and CSS weave the web's fabric. Discover my journey with React, Redux, SQL, .NET, and more!
          </p>
          <p>
          🔍 Discover Real-World Projects: Navigate through a curated collection of my projects. Each project is a story – from conception to deployment, highlighting challenges, solutions, and learning experiences.
          </p>
          <p>
          📚 Learn with Me: Whether you're here to evaluate my skills for potential collaboration or to learn something new, there's a treasure trove of insights in my blogs and tutorials.
          </p>
          <p>
          🔧 Interact & Experiment: Don't just browse – interact! Test out live demos, play with code snippets, and see the results of various technologies in action.
          </p>
          <p>
          👋 Let's Connect: Have questions or want to discuss potential opportunities? The contact section is just a click away.
          </p>
          <p>
          🔐 Secure & Easy Login: Start your exploration securely. If you're a returning visitor, welcome back! If you're new here, signing up is quick and easy.
          </p>
          <p>
            Ready to embark on this technological journey? Log in or sign up and let the adventure begin!
          </p>
         
        </div>
        <div>
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
