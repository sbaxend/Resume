import React, { useEffect, useState }from 'react';
import './MainResumePage.css';
function MainResumePage() {
    const [hasScrolled, setHasScrolled] = useState(false);

    // Handle the button visibility after the scroll animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setHasScrolled(true); // Show the button after scroll is complete
        }, 60000); // Match the scroll time (60s)
        
        return () => clearTimeout(timer); // Cleanup the timer if component unmounts
    }, []);
    useEffect(() => {
        
        // Function to handle keydown events for manual scrolling
        const handleKeyDown = (event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                // Allow scrolling with the arrow keys
                const scrollContainer = document.querySelector('.star-wars-crawl');
                scrollContainer.scrollBy({
                    top: event.key === "ArrowDown" ? 100 : -100,  // Scroll 100px up or down
                    behavior: 'smooth', // Smooth scrolling
                });
            }
        };

        // Add event listener for keyboard scroll control
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return (
        <div className="resume-container">
            <div className="star-wars-crawl">
                <div className="crawl-text">
                    <header className="header">
                        <h1>Seth Baxendell</h1>
                        <p>Full-Stack Developer | Innovator | Problem Solver</p>
                    </header>

                    <section className="objective">
                        <h2>Objective</h2>
                        <p>
                            Dedicated Full-Stack Developer with expertise in HTML, CSS, JavaScript, and React,
                            seeking to apply my technical skills and problem-solving abilities to enhance user experiences
                            and drive innovation in a dynamic environment.
                        </p>
                    </section>

                    <section className="education">
                        <h2>Education</h2>
                        <ul>
                            <li>
                                <strong>PRIME DIGITAL ACADEMY</strong> – Full-Stack Developer Student (Jan 2023 - Jul 2023)
                                <p>Minneapolis, MN (Remote)</p>
                                <p>Intensive coding program focusing on full-stack software development including JavaScript, HTML 5, CSS, React, jQuery, PostgreSQL, and Node.js.</p>
                            </li>
                            <li>
                                <strong>SAINT PETERSBURG COLLEGE</strong> – Associate in Arts Degree / Computer Science Information Major (2018-2022)
                                <p>Saint Petersburg, FL (Hybrid)</p>
                                <p>Courses included: Chemistry, Intermediate Algebra, Music Appreciation, Music and Computers, Composition</p>
                            </li>
                        </ul>
                    </section>

                    <section className="experience">
                        <h2>Experience</h2>
                        <div className="job">
                            <h3>Full-Stack Software Development Student (Prime Digital Academy)</h3>
                            <p><strong>Solo Project:</strong> Developed a vehicle maintenance tracking application. Handled full-stack development, project management, and technical documentation.</p>
                            <p><strong>Client Project:</strong> Collaborated with a team to develop a mental health-focused mobile app. Managed client requirements, contributed to front-end and back-end development, and coordinated project handover.</p>
                        </div>
                        <div className="job">
                            <h3>City of Saint Petersburg - Maintenance Mechanic II, Marina Assistant, Maintenance Worker I</h3>
                            <p>Saint Petersburg, FL (2016-2023)</p>
                            <p>Led projects and teams, demonstrating leadership and problem-solving abilities. Conducted maintenance tasks across city infrastructure, showcasing adaptability and technical skills.</p>
                        </div>
                        <div className="job">
                            <h3>USA Construction Group, Inc. - Technician</h3>
                            <p>Saint Petersburg, FL (2015-2017)</p>
                            <p>Installed navigational markers, adhering to various regulatory standards, highlighting precision and compliance skills.</p>
                        </div>
                    </section>

                    <section className="self-development">
                        <h2>Self-Development</h2>
                        <div className="self-dev">
                            <h3>Hybrid Crypto Trading Bot Developer (2023 - Present)</h3>
                            <p>Building a Flask-based application for portfolio management, trading analytics, and real-time crypto insights using APIs like CoinGecko.</p>
                            <p>Implemented data visualization and risk analysis tools to help users make informed trading decisions.</p>
                        </div>
                    </section>

                    <section className="skills">
                        <h2>Technical & Soft Skills</h2>
                        <p><strong>Technical Skills:</strong> JavaScript, React, Node.js, Express, Redux, Saga, SQL, TypeScript, Python (basic), C# (basic), Jest, AWS, and more.</p>
                        <p><strong>Soft Skills:</strong> Growth mindset, adaptability, creativity, problem-solving, teamwork, critical thinking.</p>
                    </section>
                </div>
            </div>
            {hasScrolled && (
                <div className="download-button-container">
                    <a href="/resume.pdf" download="Seth_Baxendell_Resume.pdf">
                        <button className="download-button">Download PDF</button>
                    </a>
                </div>
            )}
        </div>
    );
}

export default MainResumePage;
