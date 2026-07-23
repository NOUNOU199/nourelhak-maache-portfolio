"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Aglic Assurances",
    type: "Actuarial intelligence",
    year: "2025",
    summary:
      "A calculation and visualization platform for six technical insurance provisions, built to turn complex Excel workflows into a clear, exportable system.",
    stack: "Python · Flask · React · Pandas",
    href: "https://github.com/NOUNOU199/Aglic-assurances",
  },
  {
    name: "Agentic Codecorrect",
    type: "Multi-agent automation",
    year: "2025",
    summary:
      "A coordinated AI refactoring pipeline where specialized agents detect errors, propose corrections, and validate the resulting code.",
    stack: "Python · OpenAI Swarm",
    href: "https://github.com/NOUNOU199/Agentic-codecorrect-project",
  },
  {
    name: "Twenty Academy",
    type: "Education ERP",
    year: "2024—Now",
    summary:
      "A modular ERP for education organizations, designed around secure exchanges, maintainable TypeScript, and systems that can grow with the institution.",
    stack: "TypeScript · Next.js",
    href: "https://github.com/NOUNOU199/TwentyAcademy-ERPeducation",
  },
  {
    name: "LMCS Labo",
    type: "Research archive",
    year: "2024",
    summary:
      "A full-stack platform that gives researchers living profiles and keeps publications current through automated scholarly-source scraping.",
    stack: "React · Express.js · Web scraping",
    href: "https://github.com/NOUNOU199/LMCSLABO",
  },
];

const capabilities = [
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "FastAPI",
  "Express.js",
  "PostgreSQL",
  "Docker",
  "AI agents",
  "Automation",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const move = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--px", `${x * 18}px`);
      hero.style.setProperty("--py", `${y * 14}px`);
      hero.style.setProperty("--rx", `${y * -2.5}deg`);
      hero.style.setProperty("--ry", `${x * 3.5}deg`);
    };
    const reset = () => {
      hero.style.setProperty("--px", "0px");
      hero.style.setProperty("--py", "0px");
      hero.style.setProperty("--rx", "0deg");
      hero.style.setProperty("--ry", "0deg");
    };

    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", reset);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <main>
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Nourelhak Maache, home">
          NM<span className="wordmark-dot">.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav id="main-nav" className={menuOpen ? "nav-open" : ""}>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            className="nav-availability"
            href="mailto:mn.maache@esi.dz"
            onClick={() => setMenuOpen(false)}
          >
            <span aria-hidden="true" />
            Available to build
          </a>
        </nav>
      </header>

      <section className="hero" id="top" ref={heroRef}>
        <div className="hero-copy">
          <p className="hero-intro">Nourelhak Maache · ESI Algiers</p>
          <h1>
            Building useful
            <span>software with intelligence.</span>
          </h1>
          <p className="hero-summary">
            Full-stack engineering, AI agents, and automation—shaped into
            products people can actually use.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a
              className="button button-quiet"
              href="/Nourelhak-Maache-CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="character-stage" aria-label="3D portrait of Nourelhak">
          <div className="stage-orbit orbit-one" aria-hidden="true" />
          <div className="stage-orbit orbit-two" aria-hidden="true" />
          <div className="character-aura" aria-hidden="true" />
          <img
            src="/assets/nourelhak-3d.png"
            alt="Stylized 3D portrait of Nourelhak Maache"
          />
          <div className="stage-label stage-label-top">AI / Automation</div>
          <div className="stage-label stage-label-bottom">Full-stack systems</div>
        </div>

        <div className="hero-foot">
          <span>Inventive</span>
          <span>Driven</span>
          <span>Precise</span>
          <span className="scroll-hint">Scroll to enter ↓</span>
        </div>
      </section>

      <section className="manifesto" aria-label="Professional statement">
        <p>
          I don’t collect technologies. I connect them into{" "}
          <strong>systems with a purpose.</strong>
        </p>
        <div className="manifesto-side">
          <span>Web applications</span>
          <span>Backend engineering</span>
          <span>Applied AI</span>
        </div>
      </section>

      <section className="fidelio" id="work">
        <div className="fidelio-copy">
          <div className="project-meta">
            <span>Flagship product</span>
            <span>Algeria · In development</span>
          </div>
          <h2>Fidelio</h2>
          <p className="fidelio-lead">
            One loyalty identity.
            <br />
            Every merchant.
          </p>
          <p className="fidelio-body">
            Fidelio is a multi-merchant digital loyalty platform built for
            Algeria. It replaces fragmented paper cards with one clear
            experience—helping customers carry every reward in their pocket
            while giving merchants a modern way to recognize loyalty.
          </p>
          <div className="fidelio-facts">
            <span>Mobile-first</span>
            <span>Multi-merchant</span>
            <span>Built for local commerce</span>
          </div>
        </div>

        <div className="loyalty-world" aria-label="Fidelio product concept">
          <div className="loyalty-signal signal-one" aria-hidden="true" />
          <div className="loyalty-signal signal-two" aria-hidden="true" />
          <div className="loyalty-card card-back" aria-hidden="true">
            <span>FIDELIO</span>
          </div>
          <div className="loyalty-card card-front">
            <div className="card-head">
              <span>FIDELIO</span>
              <span className="card-mark">F.</span>
            </div>
            <div className="card-balance">
              <span>YOUR REWARDS</span>
              <strong>All in one place.</strong>
            </div>
            <div className="card-code" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="card-foot">
              <span>Nourelhak</span>
              <span>ALGIERS / DZ</span>
            </div>
          </div>
          <p className="world-note">
            Phase 0 foundation
            <span>Web · API · Worker · Mobile · Infrastructure</span>
          </p>
        </div>
      </section>

      <section className="projects" aria-labelledby="projects-heading">
        <div className="section-heading">
          <h2 id="projects-heading">Selected systems</h2>
          <p>
            Different domains. The same instinct: understand the hard part,
            then make it usable.
          </p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a
              className="project-row"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.name}
            >
              <div className="project-title">
                <span>{project.type}</span>
                <h3>{project.name}</h3>
              </div>
              <p>{project.summary}</p>
              <div className="project-tail">
                <span>{project.stack}</span>
                <span>{project.year}</span>
                <b aria-hidden="true">↗</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-statement">
          <p className="about-label">Behind the systems</p>
          <h2>
            An engineer in motion, learning fast and{" "}
            <span>building before waiting.</span>
          </h2>
        </div>
        <div className="about-details">
          <p>
            I’m a computer science engineering student at ESI Algiers. My work
            moves between full-stack products, backend architecture, data-heavy
            tools, and a growing focus on machine learning, deep learning, and
            agentic automation.
          </p>
          <p>
            At ETIC Club, I’ve also learned that software is only half the
            work. Coordinating company visits with BNP Paribas and Yassir,
            producing media, and leading teams taught me how to communicate,
            organize, and move people toward an outcome.
          </p>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/maache-nourelhak-868115342/"
            target="_blank"
            rel="noreferrer"
          >
            More on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="capability-band" aria-label="Technical capabilities">
        <div className="capability-track">
          {[...capabilities, ...capabilities].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <i aria-hidden="true">✦</i>
            </span>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="contact-copy">
          <p>Have an internship, product, or ambitious idea?</p>
          <h2>Let’s build what’s next.</h2>
          <a href="mailto:mn.maache@esi.dz">
            mn.maache@esi.dz <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>Nourelhak Maache © {new Date().getFullYear()}</span>
          <div>
            <a
              href="https://github.com/NOUNOU199"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/maache-nourelhak-868115342/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
