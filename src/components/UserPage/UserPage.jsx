import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import './UserPage.css';
import SideBar from '../SideBar/SideBar';
import { useHistory } from 'react-router-dom';
function UserPage() {
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const handleResumeButtonClick = () => {
        history.push('/resume')
    };
    // Function to generate stars
    const generateStars = (numStars) => {
        let stars = [];
        for (let i = 0; i < numStars; i++) {
            const style = {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`, // Random animation delay for each star
                opacity: Math.random() * 0.8 + 0.2, // Random opacity for a more dynamic effect
            };
            stars.push(<div key={i} className="star" style={style}></div>);
        }
        return stars;
    };

    return (
        <div className="main-container">
            <SideBar />
            <div className="user-container">
                {/* Generate stars dynamically */}
                {generateStars(100)}

                <header className="user-header">
                    <h2>Welcome</h2>
                </header>
                <div className="resume-btn-container">
                    <button onClick={handleResumeButtonClick} className="resume-button">
                        View Resume
                    </button>
                </div>
                <nav className="user-nav">
                    <ul>
                        <li><Link to="#about-me" className="nav-link">About Me</Link></li>
                        <li><Link to="#contact" className="nav-link">Contact Me</Link></li>
                        <li><Link to="#education" className="nav-link">Education</Link></li>
                        <li><Link to="#skills" className="nav-link">Skills & Expertise</Link></li>
                        <li><Link to="#experience" className="nav-link">Work Experience</Link></li>
                    </ul>
                </nav>

                {/* About Me Section */}
                <section id="about-me">
                    <h2>About Me</h2>
                    <p>
                        I'm a dedicated Full-Stack Developer with a rich background in technical and maintenance roles, 
                        currently based in [Your Location]. Transitioning from hands-on roles at the City of Saint Petersburg 
                        and USA Construction Group, where I developed a keen sense of problem-solving, leadership, and technical 
                        proficiency, I've recently completed an immersive coding program at Prime Digital Academy. 
                        This program equipped me with expertise in JavaScript, React, Node.js, and other modern web technologies, 
                        fueling my passion for building responsive, user-centric applications.
                    </p>
                    <p>
                         My project portfolio includes a vehicle maintenance tracking app and a mental health-focused mobile app,
                         demonstrating my capability in full-stack development, client collaboration, and project management. 
                         With a toolkit spanning across JavaScript, SQL, HTML, CSS, TypeScript, and various development tools, 
                         I'm eager to bring my growth mindset, adaptability, and creativity to the tech industry. 
                         My aim is to leverage my diverse skills to develop innovative software solutions that make a difference.
                    </p>
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <h1>Contact:</h1>
                    <p>Phone Number</p>
                    <p>Email</p>
                    <p>linkedin URL</p>
                </section>

                {/* Education Section */}
                <section id="education">
                    <h1>Education:</h1>
                    <ul>
                        <li>
                            <strong>PRIME DIGITAL ACADEMY: Full-Stack Developer Student</strong> - Minneapolis, MN (Remote)
                            <p>(January 2023 - July 2023)</p>
                            <p>An intensive coding immersion program that focuses on relevant technologies within the full-stack software development field. Technologies include JavaScript, HTML5, CSS, React, jQuery, PostgreSQL, and Node.js.</p>
                        </li>
                    </ul>
                </section>

                {/* Skills Section */}
                <section id="skills">
                    <h1>Skills:</h1>
                    <p>
                        <strong>Technical Skills:</strong> Programs - Postico, Postman, VS Code, MacOS, Windows, Slack, GitHub, DB Designer, VS Live-share, Zoom, Trello, Google Suite, Office Suite, Outlook, ERD Design, Wireframing. Languages - JavaScript, TypeScript, Jest, AWS, HTML, CSS, jQuery, JSX/React, Redux, Saga, SQL, Express, NodeJS, git, API’s, Sweet Alert, Chart.js, .NET Framework, Branches and Pull Requests. Worked with some Python and C# language.
                    </p>
                    <p>
                        <strong>Soft Skills:</strong> Growth mindset, adaptable, creative, lifelong learner, curious, problem solver, resourceful, work well on a team, critical thinker.
                    </p>
                </section>
                
                {/* Experience Section */}
                <section id="experience">
                    <h1>Work Experience:</h1>
                    <div>
                        <h2>PRIME DIGITAL ACADEMY: Full-Stack Developer Student</h2>
                        <p>Minneapolis, MN (Remote) | January 2023 - July 2023</p>
                        <ul>
                            <li>An intensive coding immersion program focusing on full-stack software development with technologies such as JavaScript, HTML5, CSS, React, jQuery, PostgreSQL, and Node.js.</li>
                            <li><strong>Solo Project:</strong> Developed a full-stack application for managing vehicle maintenance. Utilized technologies like Javascript, HTML, CSS, SweetAlert2, Express, and more.</li>
                            <li><strong>Client Project:</strong> Contributed as a full-stack developer on a team project for a mental health and financial decision-making mobile app. Handled both backend and frontend development using various technologies.</li>
                        </ul>
                    </div>
                </section>
                {/* <LogOutButton className="logout-btn" /> */}
            </div>
        </div>
    );
}

export default UserPage;
