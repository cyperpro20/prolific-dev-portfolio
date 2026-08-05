import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const skills = [
  { category: 'Frontend',  items: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS'] },
  { category: 'Backend',   items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'] },
  { category: 'Tooling',   items: ['Git & GitHub', 'Webpack', 'NPM / Yarn', 'VS Code'] },
  { category: 'Design',    items: ['UI/UX Principles', 'Figma', 'CSS Animations', 'Accessibility'] },
];

const stats = [
  { value: '4+',   label: 'Years' },
  { value: '20+',  label: 'Projects' },
  { value: '100%', label: 'Satisfaction' },
];

const roles = ['Full Stack Dev', 'React Engineer', 'Node.js Builder', 'UI Craftsman'];

const WordCycler = ({ isDarkMode }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === current.length) {
      // Pause at full word
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 45);
    } else if (isDeleting && displayed.length === 0) {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <span className={`inline-flex items-center font-black text-4xl sm:text-5xl md:text-7xl leading-tight tracking-tight text-blue-500`}>
      {displayed}
      <span
        className="ml-[2px] inline-block w-[3px] rounded-sm bg-blue-500"
        style={{
          height: '0.85em',
          animation: 'cursorBlink 1s step-end infinite',
          verticalAlign: 'middle',
        }}
      />
    </span>
  );
};

const Home = ({ isDarkMode }) => {
  const bg     = isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black';
  const muted  = isDarkMode ? 'text-white/50'            : 'text-black/50';
  const border = isDarkMode ? 'border-white/10'          : 'border-black/10';
  const cardBg = isDarkMode ? 'bg-white/5'               : 'bg-black/5';
  const strong = isDarkMode ? 'text-white font-medium'   : 'text-black font-medium';

  return (
    <div className={`${bg} transition-colors duration-300`}>

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-24 pb-12 overflow-hidden">

        {/* Animated background orbs */}
        <div className="hero-bg">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        {/* Content wrapper — keeps max-width constraint */}
        <div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col items-center">

        {/* Profile Avatar */}
        <div className="mb-6 animate-slide-up-fade-1">
          <img
            src="/favicon.png"
            alt="ProlificDev Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white/10 shadow-[0_0_24px_rgba(0,102,255,0.4)]"
          />
        </div>

        {/* Status badge */}
        <div className="mb-6 animate-slide-up-fade-1">
          <span className={`
            inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase border
            ${isDarkMode ? 'border-white/10 text-white/40' : 'border-black/10 text-black/40'}
          `}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work · Worldwide
          </span>
        </div>

        {/* Greeting */}
        <div className="mb-2 animate-slide-up-fade-2">
          <p className={`text-sm md:text-base font-mono ${muted}`}>
            Ifechukwu Awuzie · aka <span className="text-blue-500 font-semibold">ProlificDev</span>
          </p>
        </div>

        {/* Big name + word cycler */}
        <div className="animate-slide-up-fade-3 w-full text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight mb-2">
            Ifechukwu Awuzie
          </h1>
          <div className="flex items-center justify-center min-h-[1.2em]">
            <WordCycler isDarkMode={isDarkMode} />
          </div>
        </div>

        {/* Sub-line */}
        <p className={`text-sm md:text-base max-w-md leading-relaxed mt-6 mb-8 animate-slide-up-fade-4 ${muted}`}>
          I'm <span className={strong}>Ifechukwu Awuzie</span> — a full stack developer
          with <span className={strong}>4 years</span> of professional experience
          designing and building high-performance web applications, end to end. I go by{' '}
          <span className="text-blue-500 font-semibold">ProlificDev</span> — a name
          that reflects my commitment to shipping quality work, consistently.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full animate-slide-up-fade-5">
          <Link
            to="/works"
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,102,255,0.4)]"
          >
            View my work ↗
          </Link>
          <Link
            to="/contact"
            className={`w-full sm:w-auto px-6 py-2.5 text-sm font-semibold rounded-full border transition-all duration-200 ${
              isDarkMode
                ? 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
                : 'border-black/20 text-black/70 hover:border-black/50 hover:text-black'
            }`}
          >
            Get in touch
          </Link>
          <a
            href="/Ifechukwu_Awuzie_CV.pdf"
            download
            className={`w-full sm:w-auto px-6 py-2.5 text-sm font-semibold rounded-full border transition-all duration-200 inline-flex items-center justify-center gap-2 ${
              isDarkMode
                ? 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
                : 'border-black/20 text-black/70 hover:border-black/50 hover:text-black'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
            </svg>
            Download CV
          </a>
        </div>

        {/* Scroll hint */}
        <div className={`mt-14 flex items-center justify-center gap-3 animate-slide-up-fade-5 ${muted}`}>
          <div className={`w-8 h-px ${isDarkMode ? 'bg-white/20' : 'bg-black/20'}`} />
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to explore</span>
          <div className={`w-8 h-px ${isDarkMode ? 'bg-white/20' : 'bg-black/20'}`} />
        </div>
        </div>{/* end content wrapper */}
      </section>

      {/* ══ STATS ══ */}
      <section className={`border-y ${border} py-8 px-4`}>
        <div className={`max-w-3xl mx-auto grid grid-cols-3 divide-x ${border}`}>
          {stats.map(({ value, label }) => (
            <div key={label} className="px-3 sm:px-6 first:pl-0 last:pr-0 text-center">
              <p className="text-2xl sm:text-4xl font-black text-blue-500 mb-1">{value}</p>
              <p className={`text-[10px] sm:text-xs font-mono tracking-widest uppercase ${muted}`}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section className="py-16 px-5 max-w-2xl mx-auto text-center">
        <p className={`text-[10px] font-mono tracking-widest uppercase mb-4 ${muted}`}>About</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-8">
          Turning ideas into{' '}
          <span className="text-blue-500">polished products.</span>
        </h2>
        <div className={`space-y-4 text-sm leading-relaxed ${muted}`}>
          <p>
            I'm <span className={strong}>Ifechukwu Awuzie</span>, a full stack developer
            known professionally as <span className="text-blue-500 font-semibold">ProlificDev</span>.
            Over the past 4 years, I've built and shipped production-ready web applications
            for real clients — from e-commerce platforms to SaaS products, handling everything
            from database to UI.
          </p>
          <p>
            My stack spans <span className={strong}>React, Node.js, Express, and MongoDB</span> on the
            backend, paired with a sharp eye for UI design and a relentless focus on performance.
            I don't just write code — I architect full products that feel intuitive, look great, and scale.
          </p>
          <p>
            I work remotely and collaborate with clients and teams across the globe.
            Whether you need a full product built from scratch or an existing codebase
            improved, I bring professionalism, clear communication, and clean code to every project.
          </p>
        </div>
      </section>

      {/* ══ EXPERIENCE ══ */}
      <section className={`border-t ${border} py-16 px-5`}>
        <div className="max-w-2xl mx-auto">
          <p className={`text-[10px] font-mono tracking-widest uppercase mb-8 text-center ${muted}`}>Work Experience</p>

          {/* FomOwl */}
          <div className={`rounded-2xl p-6 sm:p-8 border relative overflow-hidden mb-4 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/[0.02] border-black/10'}`}>
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-2xl" />
            <div className="pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className={`text-lg font-black ${isDarkMode ? 'text-white' : 'text-black'}`}>Full Stack Developer</h3>
                  <p className="text-blue-500 font-semibold text-sm">FomOwl</p>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border self-start sm:self-auto
                  ${isDarkMode ? 'border-green-500/30 bg-green-500/10 text-green-400' : 'border-green-500/30 bg-green-50 text-green-600'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  July 2026 — Present
                </span>
              </div>
              <ul className={`space-y-3 text-sm leading-relaxed ${muted}`}>
                {[
                  'Architect and build scalable full stack web applications from database schema to pixel-perfect UI.',
                  'Design and develop RESTful APIs using Node.js and Express, consumed by React frontends.',
                  'Manage and optimise MongoDB and SQL databases for performance and reliability.',
                  'Implement authentication systems, role-based access control, and security best practices.',
                  'Collaborate with cross-functional teams to ship features on tight deadlines.',
                  'Write clean, maintainable code with a focus on performance, scalability, and developer experience.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Tailwind CSS', 'Git'].map((tech) => (
                  <span key={tech} className={`px-3 py-1 rounded-full text-xs font-semibold ${isDarkMode ? 'bg-white/10 text-white/70' : 'bg-black/8 text-black/70'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Codex Inc Enterprise */}
          <div className={`rounded-2xl p-6 sm:p-8 border relative overflow-hidden ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/[0.02] border-black/10'}`}>
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 rounded-l-2xl" />
            <div className="pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className={`text-lg font-black ${isDarkMode ? 'text-white' : 'text-black'}`}>Tech Lead <span className={`text-sm font-medium ${muted}`}>(Architect)</span></h3>
                  <p className="text-purple-400 font-semibold text-sm">Codex Inc Enterprise</p>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border self-start sm:self-auto
                  ${isDarkMode ? 'border-green-500/30 bg-green-500/10 text-green-400' : 'border-green-500/30 bg-green-50 text-green-600'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  June 2026 — Present
                </span>
              </div>
              <ul className={`space-y-3 text-sm leading-relaxed ${muted}`}>
                {[
                  'Lead the technical vision and architecture of all engineering projects across the organisation.',
                  'Define system design patterns, tech stack decisions, and development standards for the team.',
                  'Mentor junior and mid-level developers, conducting code reviews and driving engineering best practices.',
                  'Oversee full stack development lifecycle — from requirements gathering to production deployment.',
                  'Bridge the gap between business requirements and technical execution with clear architectural plans.',
                  'Drive performance optimisation, security hardening, and scalability across all company platforms.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-purple-500 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {['System Architecture', 'React', 'Node.js', 'MongoDB', 'Team Leadership', 'Code Review', 'DevOps'].map((tech) => (
                  <span key={tech} className={`px-3 py-1 rounded-full text-xs font-semibold ${isDarkMode ? 'bg-white/10 text-white/70' : 'bg-black/8 text-black/70'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESLA / ORIGIN STORY ══ */}
      <section className={`border-t ${border} py-16 px-5`}>
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 flex flex-col items-center">
            <img
              src="/favicon.png"
              alt="ProlificDev Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-full object-cover border-2 border-blue-500/30 shadow-[0_0_16px_rgba(0,102,255,0.2)]"
            />
            <p className={`text-[10px] font-mono tracking-widest uppercase mb-4 ${muted}`}>The Mind Behind the Code</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              Wired differently.{' '}
              <span className="text-blue-500">By design.</span>
            </h2>
          </div>

          {/* Tesla quote card */}
          <div className={`rounded-2xl p-6 sm:p-8 mb-10 relative overflow-hidden ${
            isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-black/[0.03] border border-black/10'
          }`}>
            {/* Big decorative quote mark */}
            <span className="absolute top-4 left-5 text-7xl font-black text-blue-500 opacity-10 leading-none select-none">"</span>
            <blockquote className="relative z-10 text-center">
              <p className={`text-base sm:text-lg font-medium leading-relaxed italic mb-4 ${isDarkMode ? 'text-white/80' : 'text-black/80'}`}>
                "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration."
              </p>
              <footer className={`text-xs font-mono tracking-widest uppercase ${muted}`}>
                — Nikola Tesla · Inventor, Physicist, Visionary
              </footer>
            </blockquote>
          </div>

          {/* Story paragraphs */}
          <div className={`space-y-5 text-sm leading-relaxed ${muted}`}>
            <p>
              Before Ifechukwu ever wrote a line of code, he was obsessed with something else entirely —
              the invisible forces that govern reality. <span className={strong}>Physics and mathematics</span> weren't
              just school subjects. They were puzzles that kept him up at night, the same way a stubborn
              bug does today.
            </p>
            <p>
              His mentor? <span className={strong}>Nikola Tesla</span> — a man who didn't just think about electricity,
              he <em>felt</em> it. Tesla could visualise entire machines in his mind before touching a single
              component. That obsession with mental models, with understanding systems at their core before
              building them, is something Ifechukwu carries into every project.
            </p>
            <p>
              When Ifechukwu looks at a UI, he doesn't just see buttons and divs. He sees{' '}
              <span className={strong}>systems of energy</span> — state flowing through components like current
              through a circuit, server responses travelling like signals across a network, animations
              obeying the same laws as oscillating waves.
            </p>
            <p>
              Tesla once said the present is theirs, but the future belongs to those who build it.
              Ifechukwu builds for the future — full stack, end to end.
            </p>
          </div>

          {/* Fun facts row */}
          <div className={`mt-10 grid grid-cols-3 gap-px ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}>
            {[
              { icon: '⚡', label: 'Tesla fan', sub: 'since age 14' },
              { icon: '∑', label: 'Maths lover', sub: 'calculus to logic' },
              { icon: '🌊', label: 'Physics mind', sub: 'waves & systems' },
            ].map(({ icon, label, sub }) => (
              <div key={label} className={`${cardBg} p-4 text-center`}>
                <div className="text-2xl mb-2">{icon}</div>
                <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>{label}</p>
                <p className={`text-[10px] font-mono ${muted}`}>{sub}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section className={`border-t ${border} py-16 px-5`}>
        <div className="max-w-3xl mx-auto">
          <p className={`text-[10px] font-mono tracking-widest uppercase mb-8 text-center ${muted}`}>Skills & Technologies</p>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-px ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}>
            {skills.map(({ category, items }) => (
              <div key={category} className={`${cardBg} p-4 sm:p-6 text-center`}>
                <h3 className="text-xs font-bold text-blue-500 mb-4 tracking-wide">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className={`text-xs sm:text-sm ${muted}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED PROJECT ══ */}
      <section className={`border-t ${border} py-16 px-5`}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className={`text-[10px] font-mono tracking-widest uppercase mb-1 ${muted}`}>Featured Work</p>
              <h2 className="text-xl sm:text-2xl font-black">Latest project.</h2>
            </div>
            <Link
              to="/works"
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                isDarkMode
                  ? 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                  : 'border-black/20 text-black/60 hover:border-black/50 hover:text-black'
              }`}
            >
              View all ↗
            </Link>
          </div>

          {/* Featured card — NumShift */}
          <a
            href="https://numshift.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className={`group block rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,102,255,0.15)] ${
              isDarkMode ? 'border-white/10 hover:border-blue-500/30' : 'border-black/10 hover:border-blue-500/30'
            }`}
          >
            {/* Screenshot */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src="/images/numshift.jpg"
                alt="NumShift screenshot"
                className="relative w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-blue-500/90 text-white">SaaS</span>
              </div>
            </div>

            {/* Info */}
            <div className={`p-5 flex items-center justify-between ${isDarkMode ? 'bg-white/5' : 'bg-black/[0.02]'}`}>
              <div>
                <h3 className="font-black text-lg mb-0.5">NumShift</h3>
                <p className={`text-xs ${muted}`}>WhatsApp account recovery · Bulk SMS · Voice note verification</p>
              </div>
              <span className={`text-xs font-semibold shrink-0 ml-4 transition-transform duration-200 group-hover:translate-x-1 ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>↗</span>
            </div>
          </a>

          {/* View more button */}
          <div className="mt-6 text-center">
            <Link
              to="/works"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,102,255,0.4)]"
            >
              View all projects
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <div className={`rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center gap-6 ${
            isDarkMode
              ? 'bg-blue-500/10 border border-blue-500/20'
              : 'bg-blue-50 border border-blue-100'
          }`}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black mb-2">Let's build something great.</h2>
              <p className={`text-sm ${muted}`}>
                Have a project in mind? I'm <span className={strong}>Ifechukwu Awuzie</span> — and I'm ready to bring it to life.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,102,255,0.4)] text-sm"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
