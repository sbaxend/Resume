// src/data/resume.js
//
// Single source of truth for all portfolio + résumé content.
// MainResumePage (the scrolling one-pager) and the terminal résumé page
// both import from here, so content can never drift between them.
//
// Anything marked TODO needs your real value before you deploy.
// Rule of thumb: if you ever find yourself typing the same fact into two
// components, it belongs in this file instead.

export const profile = {
  name: "Seth Baxendell",
  title: "Full-Stack Developer",
  // Short stack line for the hero
  stack: "React · Node · PostgreSQL · Flask",
  location: "Minneapolis, MN (Remote)",
  githubUrl: "https://github.com/sbaxend",
  resumePdf: "/SBResume.pdf", // lives in /public
  resumeDownloadName: "Seth_Baxendell_Resume.pdf", // filename offered on download

  // Portfolio "About" section — 2–3 sentences, scannable
  shortBio:
    "Full-stack developer (Prime Digital Academy, 2023) working across the project lifecycle in React, Node.js/Express, and PostgreSQL, plus Python/Flask. Backed by 7+ years in operations and compliance roles — inventory management, scheduling, and data systems where accuracy and accountability were non-negotiable.",

  // Terminal "Summary" tab — longer, first-person, more detail
  longBio:
    "Full-stack developer (Prime Digital Academy, 2023) with hands-on experience across the project lifecycle in React, Node.js/Express, and PostgreSQL, plus Python/Flask. Builds and ships responsive web applications and RESTful APIs. Backed by 7+ years in operations and compliance-focused roles where accuracy and accountability were non-negotiable — bringing a level of reliability and attention to detail that is rare in early-career developers.",
};

export const contact = {
  email: "sethbaxendell1@gmail.com",
  phone: "(952) 693-8402",
  linkedin: "https://linkedin.com/in/sethbaxendell",
  github: profile.githubUrl,
};

// ---------------------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------------------
// `blurb`     -> portfolio card (one line)
// `detail`    -> terminal Projects tab (full paragraph)
// `highlight` -> the technically hard part. Hiring managers read this one.
// Set `featured: false` to keep something in the terminal but off the front page.

export const projects = [
  {
    id: "paintcraft",
    name: "PaintCraft MN",
    role: "Solo build — client work",
    year: "2024",
    blurb:
      "Responsive marketing site for a local painting company, with a contact form wired up through Resend to deliver inquiries straight to the owner's inbox.",
    detail:
      "Designed and built a marketing and lead-capture site for a local painting contractor. Responsive layout, service and gallery pages, and a contact form wired to the owner's inbox. Handled deployment, domain setup, and handoff.",
    highlight:
      "TODO: one sentence on the hardest part — e.g. form spam handling, image optimization for a gallery-heavy site, or getting a non-technical client comfortable editing content.",
    tags: ["Astro", "Tailwind CSS", "Resend", "Vercel"],
    live: "https://paintcraftmn.vercel.app/",
    code: "https://github.com/sbaxend/paintcraftmn",
    image: "/images/paintcraft.png", // TODO: add screenshot to /public/images
    featured: true,
  },
  {
    id: "vehicle-maintenance",
    name: "Vehicle Maintenance Tracker",
    role: "Solo project — Prime Digital Academy",
    year: "2023",
    blurb:
      "Vehicle maintenance tracker: log services, monitor mileage intervals, and get reminders before something is overdue.",
    detail:
      "Solo capstone-style project. Users add vehicles, log completed maintenance, and see what's due based on mileage and time intervals. Full CRUD with authentication, a normalized PostgreSQL schema, and a React front end backed by an Express API.",
    highlight:
      "TODO: e.g. modeling recurring service intervals that trigger on whichever comes first — mileage or elapsed time — without duplicating reminders.",
    tags: ["React", "Redux", "Node", "Express", "PostgreSQL"],
    live: "TODO: deployed URL or null",
    code: "TODO: repo URL",
    image: "/images/vehicle-maintenance.png",
    featured: true,
  },
  {
    id: "team-mobile-app",
    name: "Mental Health & Finance Mobile App",
    role: "Team project (4 devs) — Prime Digital Academy",
    year: "2023",
    blurb:
      "Mobile app pairing mental-health check-ins with personal finance tracking, built with a four-person team on a two-week sprint.",
    detail:
      "Team-built mobile application combining mood/mental-health check-ins with personal finance tracking, on the theory that the two are more connected than most apps admit. Worked in a scrum cycle with daily standups, a shared board, and code review on every PR.",
    highlight:
      "TODO: name your specific contribution — which features you owned, and one technical problem you personally solved. Vague team-project descriptions are the fastest way to get skimmed past.",
    tags: ["React Native", "Node", "PostgreSQL"],
    live: null,
    code: "TODO: repo URL",
    image: "/images/team-app.png",
    featured: true,
  },
  {
    id: "crypto-portfolio-tracker",
    name: "Crypto Portfolio Tracker",
    role: "TODO: solo/team + context (e.g. Solo project)",
    year: "TODO",
    blurb:
      "Flask app for real-time crypto portfolio analytics, pulling live pricing data from the CoinGecko API.",
    detail:
      "Flask app for real-time portfolio analytics from external APIs, with error handling and logging for stability; containerized with Docker.",
    highlight: "TODO: one sentence on the hardest part of this project.",
    tags: ["Python", "Flask", "CoinGecko API", "Docker"],
    live: "TODO: deployed URL or null",
    code: "TODO: repo URL or null if private",
    image: "/images/crypto-portfolio-tracker.png", // TODO: add screenshot to /public/images
    featured: true,
  },
];

// ---------------------------------------------------------------------------
// SKILLS
// ---------------------------------------------------------------------------
// Rendered as a .map() on both pages — add a group here, it appears in both.

export const skillGroups = [
  { label: "Languages", items: ["JavaScript", "Python", "HTML5/CSS3", "SQL"] },
  { label: "Frontend", items: ["React", "Redux", "Astro", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "Flask", "REST APIs"] },
  { label: "Database", items: ["PostgreSQL"] },
  { label: "Mobile", items: ["React Native"] },
  { label: "Tools & Deployment", items: ["Git", "GitHub", "Vercel", "Docker", "Figma"] },
  { label: "Currently Learning", items: ["TypeScript", "Next.js"] },
];

// ---------------------------------------------------------------------------
// EXPERIENCE
// ---------------------------------------------------------------------------
// `onPortfolio: false` keeps an entry in the terminal résumé only — use it for
// older non-technical roles that would clutter the front page.

export const experience = [
  {
    id: "freelance",
    role: "Freelance Web Developer",
    org: "Self-employed",
    location: "Remote",
    start: "2023",
    end: "Present",
    onPortfolio: true,
    bullets: [
      "Build and deploy marketing and small-business sites end to end, from design through domain and hosting setup.",
      "TODO: add a bullet with a number in it — clients served, load time improved, hours saved.",
    ],
  },
  {
    id: "prime",
    role: "Full-Stack Development Student",
    org: "Prime Digital Academy",
    location: "Remote",
    start: "Jan 2023",
    end: "Jul 2023",
    onPortfolio: true,
    bullets: [
      "Completed an immersive full-stack program covering JavaScript, React, Redux, Node, Express, and PostgreSQL.",
      "Built a solo application and led/contributed to a four-person team project on a two-week agile sprint.",
    ],
  },
  {
    id: "marina",
    role: "Maintenance Mechanic II / Marina Assistant",
    org: "City of Saint Petersburg, FL",
    location: "City of Saint Petersburg, FL",
    start: "2016",
    end: "2023",
    onPortfolio: false,
    bullets: [
      "Managed marina operations and customer reservations via the Dockwa platform; supported daily reporting and cross-department documentation.",
    ],
  },
  {
    id: "construction",
    role: "Construction Technician",
    org: "USA Construction Group, Inc.",
    location: "St. Petersburg, FL",
    start: "2015",
    end: "2017",
    onPortfolio: false,
    bullets: ["Installed navigational markers to regulatory standards with an emphasis on precision and safety compliance."],
  },
];

// ---------------------------------------------------------------------------
// EDUCATION
// ---------------------------------------------------------------------------

export const education = [
  {
    id: "prime-edu",
    school: "Prime Digital Academy",
    credential: "Full-Stack Software Development",
    year: "2023",
    detail:
      "Immersive program in full-stack JavaScript development, agile practice, and collaborative Git workflow.",
  },
  {
    id: "spc",
    school: "St. Petersburg College",
    credential: "A.A. Coursework, Computer & Information Science",
    year: "2018 – 2022",
    detail: "TODO: field of study.",
  },
];

// ---------------------------------------------------------------------------
// Convenience selectors — keeps filtering logic out of your components.
// ---------------------------------------------------------------------------

export const featuredProjects = projects.filter((p) => p.featured);
export const portfolioExperience = experience.filter((e) => e.onPortfolio);

export default {
  profile,
  contact,
  projects,
  skillGroups,
  experience,
  education,
};
