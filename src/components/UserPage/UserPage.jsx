import React from 'react';
import { useHistory } from 'react-router-dom';
import './UserPage.css';

const PROJECTS = [
  {
    title: 'PaintCraft MN',
    description:
      'Responsive marketing site for a local painting company, with a contact form wired up through Resend to deliver inquiries straight to the owner\'s inbox.',
    tags: ['Astro', 'Tailwind CSS', 'Resend', 'Vercel'],
    github: 'https://github.com/sbaxend/paintcraftmn',
    live: 'https://paintcraftmn.vercel.app/',
  },
];

const SKILLS = [
  { group: 'Languages',          items: ['JavaScript', 'Python', 'HTML5/CSS3', 'SQL'] },
  { group: 'Frontend',           items: ['React', 'Astro', 'Tailwind CSS'] },
  { group: 'Backend',            items: ['Node.js/Express', 'Flask', 'REST APIs'] },
  { group: 'Database',           items: ['PostgreSQL'] },
  { group: 'Mobile',             items: ['React Native'] },
  { group: 'Tools & Deployment', items: ['Git/GitHub', 'Docker', 'Vercel', 'Figma'] },
  { group: 'Currently Learning', items: ['TypeScript', 'Next.js'], learning: true },
];

function generateStars(count) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <div
        key={i}
        className="star"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          opacity: Math.random() * 0.6 + 0.2,
        }}
      />
    );
  }
  return stars;
}

function UserPage() {
  const history = useHistory();

  return (
    <div className="portfolio-page">

      <div className="stars-layer" aria-hidden="true">
        {generateStars(120)}
      </div>

      <div className="portfolio-content">

        {/* ── Hero ── */}
        <section className="hero">
          <span className="hero-role">Full-Stack Developer</span>
          <h1 className="hero-name">Seth Baxendell</h1>
          <p className="hero-summary">React · Node.js/Express · PostgreSQL · Python/Flask</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => history.push('/resume')}>
              View Résumé →
            </button>
            <a
              className="btn-secondary"
              href="https://github.com/sbaxend"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about">
          <h2 className="section-heading">About</h2>
          <p className="body-text">
            Full-stack developer (Prime Digital Academy, 2023) with hands-on experience across the project
            lifecycle in React, Node.js/Express, and PostgreSQL, plus Python/Flask. Builds responsive web
            apps and RESTful APIs, integrates front and back end, and works comfortably in Agile teams.
            Backed by 7+ years in operations and compliance-focused roles — inventory management,
            scheduling, and data systems where accuracy and accountability were non-negotiable — bringing
            a level of reliability and attention to detail that's rare in early-career developers.
          </p>
        </section>

        {/* ── Selected Work ── */}
        <section id="work">
          <h2 className="section-heading">Selected Work</h2>
          {PROJECTS.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      Live ↗
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    Code ↗
                  </a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── Skills ── */}
        <section id="skills">
          <h2 className="section-heading">Skills</h2>
          {SKILLS.map(({ group, items, learning }) => (
            <div className="skill-group" key={group}>
              <span className="skill-group-label">{group}</span>
              <div className="tag-list">
                {items.map((skill) => (
                  <span className={`tag${learning ? ' tag--learning' : ''}`} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── Experience ── */}
        <section id="experience">
          <h2 className="section-heading">Experience</h2>
          <div className="experience-item">
            <h3 className="role-title">Full-Stack Developer Student</h3>
            <p className="role-meta">Prime Digital Academy · Minneapolis, MN (Remote) · Jan 2023 – Jul 2023</p>
            <ul>
              <li>
                <strong>Solo Project:</strong> Developed a full-stack application for managing vehicle
                maintenance. Utilized JavaScript, HTML, CSS, SweetAlert2, Express, and more.
              </li>
              <li>
                <strong>Client Project:</strong> Contributed as a full-stack developer on a team project
                for a mental health and financial decision-making mobile app. Handled both backend and
                frontend development across the full project lifecycle.
              </li>
            </ul>
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education">
          <h2 className="section-heading">Education</h2>
          <div className="education-item">
            <h3 className="role-title">Full-Stack Developer Program</h3>
            <p className="role-meta">Prime Digital Academy · Minneapolis, MN (Remote) · Jan 2023 – Jul 2023</p>
            <p className="body-text">
              Intensive coding immersion program covering JavaScript, HTML5, CSS, React, jQuery,
              PostgreSQL, and Node.js.
            </p>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact">
          <h2 className="section-heading">Contact</h2>
          <p className="contact-line">Phone: (952) 693-8402</p>
          <p className="contact-line">
            Email: <a href="mailto:sethbaxendell1@gmail.com">sethbaxendell1@gmail.com</a>
          </p>
          <p className="contact-line">
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/sethbaxendell/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sethbaxendell
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}

export default UserPage;
