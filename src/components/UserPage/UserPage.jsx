import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link'
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import './UserPage.css'; // Import your CSS file

function UserPage() {
    const user = useSelector((store) => store.user);

    return (
        <div className="user-container">
            <header className="user-header">
                <h2>Welcome</h2>
            </header>
            <nav className="user-nav">
                <ul>
                    <li><Link to="#about-me" className="nav-link">About Me</Link></li>
                    <li><Link to="#contact" className="nav-link">Contact Me</Link></li>
                    <li><Link to="#education" className="nav-link">Education</Link></li>
                    <li><Link to="#skills" className="nav-link">Skills & Expertise</Link></li>
                    <li><Link to="#experience" className="nav-link">Work Experience</Link></li>
                
                </ul>
            </nav>
            <section id="about-me">
                <h1>About Me:</h1>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <section id="contact">
                <h1>Contact:</h1>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <section id="education">
                <h1>Education:
                </h1>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <section id="skills">
                <h1>Skills:</h1>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <section id="experience">
                <h1>Work Experience:</h1>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <section id="">
                <h1></h1>
            </section>
            {/* More sections */}
            {/* <LogOutButton className="logout-btn" /> */}
        </div>
    );
}

export default UserPage;
