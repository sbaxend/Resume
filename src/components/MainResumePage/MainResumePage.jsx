import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MainResumePage.css';

const SECTIONS = [
    { slug: 'summary',    label: 'SUMMARY'    },
    { slug: 'experience', label: 'EXPERIENCE' },
    { slug: 'projects',   label: 'PROJECTS'   },
    { slug: 'skills',     label: 'SKILLS'     },
    { slug: 'education',  label: 'EDUCATION'  },
    { slug: 'contact',    label: 'CONTACT'    },
];

const CONTENT = {
    summary: (
        <p>
            Full-stack developer (Prime Digital Academy, 2023) with hands-on experience
            across the project lifecycle in React, Node.js/Express, and PostgreSQL, plus
            Python/Flask. Builds and ships responsive web applications and RESTful APIs.
            Backed by 7+ years in operations and compliance-focused roles where accuracy
            and accountability were non-negotiable — bringing a level of reliability and
            attention to detail that is rare in early-career developers.
        </p>
    ),

    experience: (
        <div>
            <div className="term-entry">
                <div className="term-entry-header">
                    <span className="term-entry-title">Freelance Web Developer</span>
                    <span className="term-entry-meta">Remote · 2023 – Present</span>
                </div>
                <ul className="term-list">
                    <li>Design, build, and deploy production websites for small businesses, handling the work end to end from design through deployment.</li>
                    <li><strong>PaintCraft MN —</strong> production marketing site for a Minnesota painting company: multi-page service catalog, hero video, embedded Google reviews, Resend-powered contact form. Astro + Tailwind CSS, deployed on Vercel.</li>
                </ul>
            </div>

            <div className="term-entry">
                <div className="term-entry-header">
                    <span className="term-entry-title">Full-Stack Developer, Immersive Program</span>
                    <span className="term-entry-meta">Prime Digital Academy · Remote · Jan – Jul 2023</span>
                </div>
                <ul className="term-list">
                    <li>Built responsive full-stack web applications with React, Node.js/Express, and PostgreSQL through complete project lifecycles.</li>
                    <li>Developed RESTful APIs and integrated front-end and back-end components.</li>
                    <li>Collaborated in Agile sprints including code reviews, daily standups, and testing.</li>
                </ul>
            </div>

            <div className="term-entry">
                <div className="term-entry-header">
                    <span className="term-entry-title">Maintenance Mechanic II / Marina Assistant</span>
                    <span className="term-entry-meta">City of Saint Petersburg, FL · 2016 – 2023</span>
                </div>
                <ul className="term-list">
                    <li>Managed marina operations and customer reservations via the Dockwa platform; supported daily reporting and cross-department documentation.</li>
                </ul>
            </div>

            <div className="term-entry">
                <div className="term-entry-header">
                    <span className="term-entry-title">Technician</span>
                    <span className="term-entry-meta">USA Construction Group, Inc. · St. Petersburg, FL · 2015 – 2017</span>
                </div>
                <ul className="term-list">
                    <li>Installed navigational markers to regulatory standards with an emphasis on precision and safety compliance.</li>
                </ul>
            </div>
        </div>
    ),

    projects: (
        <div>
            <div className="term-entry">
                <div className="term-entry-header">
                    <span className="term-entry-title">Crypto Portfolio Tracker</span>
                </div>
                <div className="term-tags">
                    <span className="term-tag">Python</span>
                    <span className="term-tag">Flask</span>
                    <span className="term-tag">CoinGecko API</span>
                    <span className="term-tag">Docker</span>
                </div>
                <p>Flask app for real-time portfolio analytics from external APIs, with error handling and logging for stability; containerized with Docker.</p>
            </div>

            <div className="term-entry">
                <div className="term-entry-header">
                    <span className="term-entry-title">Vehicle Maintenance Tracker</span>
                    <span className="term-entry-meta">Prime solo project</span>
                </div>
                <div className="term-tags">
                    <span className="term-tag">JavaScript</span>
                    <span className="term-tag">Node.js/Express</span>
                    <span className="term-tag">PostgreSQL</span>
                </div>
                <p>Full-stack application for logging and scheduling vehicle service history.</p>
            </div>

            <div className="term-entry">
                <div className="term-entry-header">
                    <span className="term-entry-title">Mental Health &amp; Finance Mobile App</span>
                    <span className="term-entry-meta">Prime client project</span>
                </div>
                <div className="term-tags">
                    <span className="term-tag">React Native</span>
                    <span className="term-tag">Node.js/Express</span>
                    <span className="term-tag">PostgreSQL</span>
                </div>
                <p>Team-built client mobile app supporting mental-health and financial decision-making; contributed full-stack across the project lifecycle.</p>
            </div>
        </div>
    ),

    skills: (
        <div className="term-skills">
            {[
                { group: 'Languages',           items: ['JavaScript', 'Python', 'HTML5/CSS3', 'SQL'] },
                { group: 'Frontend',            items: ['React', 'Astro', 'Tailwind CSS'] },
                { group: 'Backend',             items: ['Node.js/Express', 'Flask', 'REST APIs'] },
                { group: 'Database',            items: ['PostgreSQL'] },
                { group: 'Mobile',              items: ['React Native'] },
                { group: 'Tools & Deployment',  items: ['Git/GitHub', 'Docker', 'Vercel', 'Figma'] },
                { group: 'Currently Learning',  items: ['TypeScript', 'Next.js'], learning: true },
            ].map(({ group, items, learning }) => (
                <div key={group} className="term-skill-group">
                    <span className="term-skill-label">{group}</span>
                    <div className="term-tags">
                        {items.map(item => (
                            <span key={item} className={`term-tag${learning ? ' term-tag--learning' : ''}`}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    ),

    education: (
        <div>
            <div className="term-entry">
                <div className="term-entry-header">
                    <span className="term-entry-title">Full-Stack Software Development</span>
                    <span className="term-entry-meta">Jan – Jul 2023</span>
                </div>
                <p className="term-entry-org">Prime Digital Academy · Remote (Minneapolis, MN)</p>
            </div>

            <div className="term-entry">
                <div className="term-entry-header">
                    <span className="term-entry-title">A.A. Coursework, Computer &amp; Information Science</span>
                    <span className="term-entry-meta">2018 – 2022</span>
                </div>
                <p className="term-entry-org">Saint Petersburg College, FL</p>
            </div>
        </div>
    ),

    contact: (
        <div className="term-contact">
            <div className="term-contact-row">
                <span className="term-contact-label">LOCATION</span>
                <span>Minneapolis, MN (Remote)</span>
            </div>
            <div className="term-contact-row">
                <span className="term-contact-label">PHONE</span>
                <a href="tel:+19526938402" className="term-link">(952) 693-8402</a>
            </div>
            <div className="term-contact-row">
                <span className="term-contact-label">EMAIL</span>
                <a href="mailto:sethbaxendell1@gmail.com" className="term-link">sethbaxendell1@gmail.com</a>
            </div>
            <div className="term-contact-row">
                <span className="term-contact-label">LINKEDIN</span>
                <a
                    href="https://linkedin.com/in/sethbaxendell"
                    target="_blank"
                    rel="noreferrer"
                    className="term-link"
                >
                    linkedin.com/in/sethbaxendell
                </a>
            </div>
            <div className="term-contact-row">
                <span className="term-contact-label">GITHUB</span>
                <a
                    href="https://github.com/sbaxend"
                    target="_blank"
                    rel="noreferrer"
                    className="term-link"
                >
                    github.com/sbaxend
                </a>
            </div>
        </div>
    ),
};

const BOOT_LINES = [
    '> SYSTEM ONLINE',
    '> MOUNTING PERSONNEL ARCHIVE ...',
    '> LOADING FILE: BAXENDELL_S.rec',
    '> DECRYPTING ... OK',
    '> ACCESS GRANTED',
];

const CHAR_MS  = 28;
const LINE_GAP = 180;
const END_GAP  = 350;
const FADE_MS  = 400;

const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%*<>_/';

function MainResumePage() {
    const [active, setActive] = useState('summary');

    const [booted, setBooted] = useState(
        () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
    const [displayLines, setDisplayLines] = useState([]);
    const [fadeOut, setFadeOut]           = useState(false);

    const [displayTitle, setDisplayTitle] = useState('SUMMARY');
    const isFirstRender                   = useRef(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    useEffect(() => {
        if (booted) return;

        const ids = [];
        let t = 0;

        BOOT_LINES.forEach((line, li) => {
            ids.push(setTimeout(() => {
                setDisplayLines(prev => [...prev, '']);
            }, t));

            for (let ci = 0; ci < line.length; ci++) {
                t += CHAR_MS;
                const slice = line.slice(0, ci + 1);
                const capturedLi = li;
                ids.push(setTimeout(() => {
                    setDisplayLines(prev => {
                        const next = [...prev];
                        next[capturedLi] = slice;
                        return next;
                    });
                }, t));
            }

            t += LINE_GAP;
        });

        ids.push(setTimeout(() => setFadeOut(true), t + END_GAP));
        ids.push(setTimeout(() => setBooted(true), t + END_GAP + FADE_MS));

        return () => ids.forEach(clearTimeout);
    }, []);

    useEffect(() => {
        const label = SECTIONS.find(s => s.slug === active).label;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (isFirstRender.current || reducedMotion) {
            isFirstRender.current = false;
            setDisplayTitle(label);
            return;
        }
        isFirstRender.current = false;

        let frame = 0;
        const id = setInterval(() => {
            frame++;
            const scrambled = label
                .split('')
                .map((char, i) => {
                    if (char === ' ') return ' ';
                    if (i < frame) return char;
                    return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                })
                .join('');
            setDisplayTitle(scrambled);
            if (frame >= label.length) {
                clearInterval(id);
                setDisplayTitle(label);
            }
        }, 26);

        return () => clearInterval(id);
    }, [active]);

    return (
        <div className="terminal-page">
            <header className="term-statusbar">
                <div className="term-statusbar-left">
                    <Link to="/user" className="term-exit-btn">[ ← EXIT ]</Link>
                    <span className="term-label">PERSONNEL TERMINAL</span>
                </div>
                <a
                    href="/SBResume.pdf"
                    download="Seth_Baxendell_Resume.pdf"
                    className="term-download-btn"
                >
                    Download Résumé
                </a>
            </header>

            {!booted && (
                <div className={`term-boot-overlay${fadeOut ? ' term-boot-overlay--out' : ''}`}>
                    {displayLines.map((line, i) => (
                        <div key={i} className="term-boot-line">
                            {line}
                            {i === displayLines.length - 1 && (
                                <span className="term-boot-cursor">_</span>
                            )}
                        </div>
                    ))}
                </div>
            )}

            <div className="term-body">
                <nav className="term-sidebar" aria-label="Resume sections">
                    {SECTIONS.map(({ slug, label }) => (
                        <button
                            key={slug}
                            className={`term-nav-item${active === slug ? ' term-nav-item--active' : ''}`}
                            onClick={() => setActive(slug)}
                            aria-current={active === slug ? 'page' : undefined}
                        >
                            {label}
                        </button>
                    ))}
                </nav>

                <main className="term-panel" aria-live="polite">
                    <div className="term-panel-titlebar">
                        <span className="term-panel-title">{displayTitle}</span>
                    </div>
                    <div className="term-panel-content" key={active}>
                        {CONTENT[active]}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MainResumePage;
