import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    profile,
    contact,
    skillGroups,
    featuredProjects,
    experience,
    education,
} from '../../data/resume';
import './MainResumePage.css';

const SECTIONS = [
    { slug: 'summary',    label: 'SUMMARY'    },
    { slug: 'experience', label: 'EXPERIENCE' },
    { slug: 'projects',   label: 'PROJECTS'   },
    { slug: 'skills',     label: 'SKILLS'     },
    { slug: 'education',  label: 'EDUCATION'  },
    { slug: 'contact',    label: 'CONTACT'    },
];

const stripProtocol = (url) => (url || '').replace(/^https?:\/\//, '');

const formatEntryMeta = (org, location, start, end) => {
    const lead = [org, location].filter((v, i, arr) => v && arr.indexOf(v) === i);
    return [...lead, `${start} – ${end}`].join(' · ');
};

const CONTENT = {
    summary: (
        <p>{profile.longBio}</p>
    ),

    experience: (
        <div>
            {experience.map(({ id, role, org, location, start, end, bullets }) => (
                <div className="term-entry" key={id}>
                    <div className="term-entry-header">
                        <span className="term-entry-title">{role}</span>
                        <span className="term-entry-meta">{formatEntryMeta(org, location, start, end)}</span>
                    </div>
                    <ul className="term-list">
                        {bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    ),

    projects: (
        <div>
            {featuredProjects.map(({ id, name, role, tags, detail, highlight }) => (
                <div className="term-entry" key={id}>
                    <div className="term-entry-header">
                        <span className="term-entry-title">{name}</span>
                        <span className="term-entry-meta">{role}</span>
                    </div>
                    <div className="term-tags">
                        {tags.map((tag) => (
                            <span className="term-tag" key={tag}>{tag}</span>
                        ))}
                    </div>
                    <p>{detail}</p>
                    <p>{highlight}</p>
                </div>
            ))}
        </div>
    ),

    skills: (
        <div className="term-skills">
            {skillGroups.map(({ label, items }) => {
                const learning = label === 'Currently Learning';
                return (
                    <div key={label} className="term-skill-group">
                        <span className="term-skill-label">{label}</span>
                        <div className="term-tags">
                            {items.map(item => (
                                <span key={item} className={`term-tag${learning ? ' term-tag--learning' : ''}`}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    ),

    education: (
        <div>
            {education.map(({ id, credential, school, year }) => (
                <div className="term-entry" key={id}>
                    <div className="term-entry-header">
                        <span className="term-entry-title">{credential}</span>
                        <span className="term-entry-meta">{year}</span>
                    </div>
                    <p className="term-entry-org">{school}</p>
                </div>
            ))}
        </div>
    ),

    contact: (
        <div className="term-contact">
            <div className="term-contact-row">
                <span className="term-contact-label">LOCATION</span>
                <span>{profile.location}</span>
            </div>
            <div className="term-contact-row">
                <span className="term-contact-label">PHONE</span>
                <a href={`tel:${contact.phone}`} className="term-link">{contact.phone}</a>
            </div>
            <div className="term-contact-row">
                <span className="term-contact-label">EMAIL</span>
                <a href={`mailto:${contact.email}`} className="term-link">{contact.email}</a>
            </div>
            <div className="term-contact-row">
                <span className="term-contact-label">LINKEDIN</span>
                <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="term-link"
                >
                    {stripProtocol(contact.linkedin)}
                </a>
            </div>
            <div className="term-contact-row">
                <span className="term-contact-label">GITHUB</span>
                <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="term-link"
                >
                    {stripProtocol(contact.github)}
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
                    href={profile.resumePdf}
                    download={profile.resumeDownloadName}
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
