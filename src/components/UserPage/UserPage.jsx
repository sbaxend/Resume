import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  profile,
  contact,
  skillGroups,
  featuredProjects,
  portfolioExperience,
  education,
} from '../../data/resume';
import './UserPage.css';

const stripProtocol = (url) => (url || '').replace(/^https?:\/\//, '');

const formatMeta = (org, location, start, end) => {
  const lead = [org, location].filter((v, i, arr) => v && arr.indexOf(v) === i);
  return [...lead, `${start} – ${end}`].join(' · ');
};

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
          <span className="hero-role">{profile.title}</span>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-summary">{profile.stack}</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => history.push('/resume')}>
              View Résumé →
            </button>
            <a
              className="btn-secondary"
              href={contact.github}
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
          <p className="body-text">{profile.shortBio}</p>
        </section>

        {/* ── Selected Work ── */}
        <section id="work">
          <h2 className="section-heading">Selected Work</h2>
          {featuredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-header">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      Live ↗
                    </a>
                  )}
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      Code ↗
                    </a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.blurb}</p>
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
          {skillGroups.map(({ label, items }) => {
            const learning = label === 'Currently Learning';
            return (
              <div className="skill-group" key={label}>
                <span className="skill-group-label">{label}</span>
                <div className="tag-list">
                  {items.map((skill) => (
                    <span className={`tag${learning ? ' tag--learning' : ''}`} key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* ── Experience ── */}
        <section id="experience">
          <h2 className="section-heading">Experience</h2>
          {portfolioExperience.map(({ id, role, org, location, start, end, bullets }) => (
            <div className="experience-item" key={id}>
              <h3 className="role-title">{role}</h3>
              <p className="role-meta">{formatMeta(org, location, start, end)}</p>
              <ul>
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ── Education ── */}
        <section id="education">
          <h2 className="section-heading">Education</h2>
          {education.map(({ id, credential, school, year, detail }) => (
            <div className="education-item" key={id}>
              <h3 className="role-title">{credential}</h3>
              <p className="role-meta">{school} · {year}</p>
              <p className="body-text">{detail}</p>
            </div>
          ))}
        </section>

        {/* ── Contact ── */}
        <section id="contact">
          <h2 className="section-heading">Contact</h2>
          <p className="contact-line">Phone: {contact.phone}</p>
          <p className="contact-line">
            Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p className="contact-line">
            LinkedIn:{' '}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {stripProtocol(contact.linkedin)}
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}

export default UserPage;
