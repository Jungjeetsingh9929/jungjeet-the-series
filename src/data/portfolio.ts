/**
 * Central portfolio data — generated from Jungjeet Singh Rathore's resume
 * (Jungjeet_Singh_Rathore_Resume.pdf) and his earlier portfolio page.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Jungjeet Singh Rathore',
  displayName: 'Jungjeet Rathore',
  firstName: 'JUNGJEET',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A RATHORE ORIGINAL',
  role: 'Full-Stack Web Developer',
  tagline: ['Software Engineering', 'Full-Stack Web', 'Seeking Internship'],
  intro:
    'A Computer Science and Engineering student interested in software engineering and full-stack web development, building practical web projects with JavaScript, React and Node.js — and seeking a software development internship to work on real-world products.',
  location: 'Jaipur, Rajasthan',
  email: 'jungjeetsinghrathore@gmail.com',
  phone: '+91 9929492145',
  links: {
    linkedin: 'https://www.linkedin.com/in/jungjeet-singh-rathore-2b7b19381/',
    github: 'https://github.com/Jungjeetsingh9929',
  },
  githubHandle: 'github.com/Jungjeetsingh9929',
  resumePdf: '/assets/Jungjeet_Singh_Rathore_Resume.pdf',
  resumeFile: 'Jungjeet_Singh_Rathore_Resume.pdf',
  portrait: {
    src: '/assets/portrait.webp',
    srcSet: undefined as string | undefined,
    alt: 'Portrait of Jungjeet Singh Rathore',
  },
  interests: ['Full-Stack Web Development', 'Software Engineering'],
};

export const education = [
  {
    school: 'University of Engineering & Management',
    place: 'Jaipur',
    degree: 'B.Tech — Computer Science and Engineering',
    period: 'Expected 2028',
    score: 'Class of 2028',
  },
];

export const experience: { company: string; role: string; place: string; period: string; points: string[] }[] = [];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  /** Optional screenshot shown on the card instead of generated art. */
  image?: string;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'college-management-portal',
    title: 'College Management Portal',
    year: '2026',
    genre: 'Full-Stack • React • Node.js',
    logline: 'A web-based college management project that organizes common academic and administrative workflows, with separate admin and student views.',
    stack: ['React', 'Vite', 'JavaScript', 'Node.js', 'Express.js', 'JWT', 'bcryptjs', 'PDFKit'],
    build: [
      'Built a web-based college management project focused on academic and administrative workflows, with role-based dashboards for admin and student users.',
      'A learning and portfolio project: it runs on demo data stored in local JSON files, not a production database.',
    ],
    features: [
      'Role-based dashboards for admin and student workflows',
      'Student request and approval flow',
      'Attendance tracking with duplicate-entry protection',
      'Student self check-in using browser location within a set campus radius',
      'Timetable, subject, teacher and complaint modules',
      'CSV and PDF report generation',
      'Mobile-friendly layout and API smoke tests',
    ],
    metrics: [],
    github: 'https://github.com/Jungjeetsingh9929/college-management-portal',
    live: 'https://college-management-portal-ygi9.onrender.com/',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    image: '/assets/college-portal.webp',
    motif: 'tenants',
  },
  {
    id: 'sangram-2026',
    title: 'SANGRAM 2026',
    year: '2026',
    genre: 'Frontend • Sports Fest • GitHub Pages',
    logline: 'The official-style website for the SANGRAM 2026 sports fest — a static frontend with live deployment and public source code.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    build: [
      'Created the website for SANGRAM 2026 as a static frontend with no backend, deployed on GitHub Pages with the source code public.',
    ],
    features: [
      'Landing page with event sections',
      'Registration access',
      'Gallery previews',
      'A quick-links page for key actions',
      'Responsive, mobile-first layout',
    ],
    metrics: [],
    github: 'https://github.com/Jungjeetsingh9929/sangram-2k26',
    live: 'https://jungjeetsingh9929.github.io/sangram-2k26/',
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    image: '/assets/sangram-2026.webp',
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

/** The resume lists no awards, so this stays empty and the section shows certifications only. */
export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; date: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'University of Michigan', name: 'Programming for Everybody (Getting Started with Python)', date: 'Nov 2024' },
  { issuer: 'University of North Texas', name: 'Math Prep: College & Work Ready', date: 'Nov 2024' },
  { issuer: 'Georgia Institute of Technology', name: 'Introduction to Engineering Mechanics', date: 'Nov 2024' },
  { issuer: 'University of Virginia', name: 'Design Thinking for Innovation', date: 'Oct 2024' },
  { issuer: 'University of Colorado Boulder', name: 'Quantum Mechanics', date: 'Nov 2024' },
  { issuer: 'L&T EduTech', name: 'MV Substation - An industrial approach (PART-A)', date: 'Nov 2024' },
  { issuer: 'American Museum of Natural History', name: 'The Science of Stem Cells', date: 'Nov 2024' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'JavaScript-first',
    skills: [
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'React', mono: 'Re' },
      { name: 'TypeScript', mono: 'Ts' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Version control',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects or certifications on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  JavaScript: ['College Management Portal', 'SANGRAM 2026'],
  Python: ['University of Michigan — Programming for Everybody'],
  HTML: ['SANGRAM 2026'],
  CSS: ['SANGRAM 2026'],
  React: ['College Management Portal'],
  'Node.js': ['College Management Portal'],
  'Express.js': ['College Management Portal'],
  GitHub: ['Both projects have public repositories', 'SANGRAM 2026 is deployed on GitHub Pages'],
  Git: ['Both projects have public repositories'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Wide Learning',
    period: '2024',
    synopsis: 'Seven online courses completed in October and November 2024, spanning Python, math, engineering and science.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Python Pilot',
        description: 'Programming for Everybody (Getting Started with Python) — University of Michigan.',
        tags: ['Python', 'University of Michigan'],
        runtime: 'Nov 2024',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Engineer’s Toolkit',
        description: 'Math Prep (University of North Texas) and Introduction to Engineering Mechanics (Georgia Tech).',
        tags: ['Math', 'Engineering Mechanics'],
        runtime: 'Nov 2024',
        palette: ocean,
      },
      {
        code: 'S01 E03',
        title: 'The Curious Mind',
        description: 'Design Thinking for Innovation, Quantum Mechanics, MV Substation (L&T EduTech) and The Science of Stem Cells.',
        tags: ['Design Thinking', 'Quantum Mechanics', 'Stem Cells'],
        runtime: 'Oct – Nov 2024',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: CSE',
    period: 'Now · Expected 2028',
    synopsis: 'B.Tech in Computer Science and Engineering at the University of Engineering & Management, Jaipur.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Studying Computer Science and Engineering, building engineering fundamentals for a career in software.',
        tags: ['B.Tech', 'CSE', 'UEM Jaipur'],
        runtime: 'Expected 2028',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Building in Public',
    period: '2026',
    synopsis: 'Two projects with public source code — one full-stack, one frontend — both live on the web.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Portal',
        description: 'College Management Portal — role-based dashboards, attendance, timetables and reports with React and Node.js.',
        tags: ['React', 'Node.js', 'Express.js'],
        runtime: 'Live + GitHub',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Fest',
        description: 'SANGRAM 2026 — the sports fest website, deployed on GitHub Pages.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        runtime: 'Live + GitHub',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Looking for a software development internship to work on real-world products.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Internship',
        description: 'Seeking a software development internship to contribute to real-world products and strengthen engineering fundamentals.',
        tags: ['Internship', 'Full-Stack', 'Software Engineering'],
        runtime: 'In production',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Now streaming', title: 'B.Tech CSE', detail: 'University of Engineering & Management, Jaipur', palette: crimson },
  { label: 'The full-stack Original', title: 'College Management Portal', detail: 'React • Node.js • Express.js', palette: ocean },
  { label: 'The live event', title: 'SANGRAM 2026', detail: 'Sports fest website on GitHub Pages', palette: amber },
  { label: 'Primary language', title: 'JavaScript', detail: 'Frontend and backend', palette: violet },
  { label: 'Frontend stack', title: 'React + TypeScript', detail: 'HTML • CSS • React • TypeScript', palette: jade },
  { label: 'Backend stack', title: 'Node.js', detail: 'with Express.js', palette: ocean },
  { label: 'Learning arc', title: '7 Courses', detail: 'Completed Oct – Nov 2024', palette: amber },
  { label: 'Python credential', title: 'University of Michigan', detail: 'Programming for Everybody', palette: crimson },
  { label: 'Open source', title: '2 Public Repos', detail: 'College Portal • SANGRAM 2026', palette: jade },
  { label: 'Next episode', title: 'Internship', detail: 'Software development, real-world products', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['University of Engineering & Management, Jaipur', 'Expected 2028'],
    chips: ['Class of 2028'],
  },
  {
    kicker: 'Skills',
    title: 'JavaScript first.',
    lines: ['Python · HTML, CSS, React, TypeScript', 'Node.js, Express.js · Git, GitHub'],
    chips: ['JavaScript', 'Python', 'React', 'TypeScript', 'Node.js', 'Express.js'],
  },
  {
    kicker: 'Projects',
    title: 'Two Originals',
    lines: ['College Management Portal — React, Node.js, Express.js', 'SANGRAM 2026 — sports fest website, live on GitHub Pages'],
  },
  {
    kicker: 'Learning',
    title: '7 Certifications',
    lines: ['University of Michigan · Georgia Tech · Colorado Boulder', 'University of Virginia · North Texas · L&T EduTech · AMNH'],
  },
  {
    kicker: 'Current mission',
    title: 'Looking for an internship',
    lines: ['Software development · real-world products', 'Strengthening engineering fundamentals'],
  },
];

export type ProfileId = 'jungjeet' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'jungjeet',
    name: 'Jungjeet',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, certifications & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & goals', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Certified', card: 'Certifications', meta: `${certifications.length} Certifications • 2024`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
