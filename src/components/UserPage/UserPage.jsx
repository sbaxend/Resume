import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import './UserPage.css'; // Import your CSS file

function UserPage() {
    const user = useSelector((store) => store.user);

    return (
        <div className="user-container">
            <header className="user-header">
                <h2>Welcome, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </header>
            <nav className="user-nav">
                <ul>
                    <li><Link to="/about-me" className="nav-link">About Me</Link></li>
                    <li><Link to="/skills" className="nav-link">Skills & Expertise</Link></li>
                    <li><Link to="/prime-digital-academy" className="nav-link">Prime Digital Academy Projects</Link></li>
                    <li><Link to="/city-of-saint-petersburg" className="nav-link">City of Saint Petersburg Experience</Link></li>
                    <li><Link to="/usa-construction-group" className="nav-link">USA Construction Group Role</Link></li>
                    <li><Link to="/portfolio" className="nav-link">My Portfolio</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact Me</Link></li>
                </ul>
            </nav>
            <LogOutButton className="logout-btn" />
        </div>
    );
}

export default UserPage;
