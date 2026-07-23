"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
    name: "Fidelio",
    type: "Digital loyalty / Product",
    description:
      "Algeria’s multi-merchant digital loyalty platform—one identity for every reward, built for customers and local commerce.",
    stack: "Flutter · TypeScript · PostgreSQL · Docker",
    year: "2026",
    visual: "fidelio",
    href: "#fidelio",
  },
  {
    number: "02",
    name: "Aglic Assurances",
    type: "Actuarial intelligence",
    description:
      "A data-heavy platform that calculates, explains, and exports six technical insurance provisions from complex Excel workflows.",
    stack: "Python · Flask · React · Pandas",
    year: "2025",
    visual: "aglic",
    href: "https://github.com/NOUNOU199/Aglic-assurances",
  },
  {
    number: "03",
    name: "Agentic Codecorrect",
    type: "AI agents / Automation",
    description:
      "Specialized AI agents collaborate to detect errors, propose refactors, and validate cleaner code through one coordinated pipeline.",
    stack: "Python · OpenAI Swarm",
    year: "2025",
    visual: "agentic",
    href: "https://github.com/NOUNOU199/Agentic-codecorrect-project",
  },
  {
    number: "04",
    name: "Twenty Academy",
    type: "Education ERP",
    description:
      "A modular education operating system for learners, training programs, resources, and secure institutional workflows.",
    stack: "TypeScript · Next.js",
    year: "2024—Now",
    visual: "academy",
    href: "https://github.com/NOUNOU199/TwentyAcademy-ERPeducation",
  },
  {
    number: "05",
    name: "LMCS Labo",
    type: "Research archive",
    description:
      "A living home for researchers and publications, kept current through automated scholarly-source scraping.",
    stack: "React · Express.js · Web scraping",
    year: "2024",
    visual: "lmcs",
    href: "https://github.com/NOUNOU199/LMCSLABO",
  },
];

const tools = [
  "Python",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Flutter",
  "FastAPI",
  "Flask",
  "Express.js",
  "Django",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Docker",
  "Linux",
  "Git",
  "Pandas",
  "AI Agents",
  "REST APIs",
  "Web Scraping",
];

const experience = [
  {
    year: "NOW",
    title: "Building Fidelio",
    place: "Founder’s mindset / Product engineering",
    copy: "Turning a local loyalty problem into a scalable mobile, web, API, worker, and infrastructure system.",
  },
  {
    year: "2025",
    title: "Applied AI & actuarial systems",
    place: "Independent and academic projects",
    copy: "Exploring coordinated AI agents while shipping data-heavy software for real insurance calculations.",
  },
  {
    year: "2024",
    title: "Full-stack product development",
    place: "Project teams / ESI Algiers",
    copy: "Building education and research platforms from interface to database, with security and maintainability in mind.",
  },
  {
    year: "2022—Now",
    title: "Communication & leadership",
    place: "ETIC Club · ESI Algiers",
    copy: "Coordinating teams, institutional communication, and professional visits with BNP Paribas and Yassir.",
  },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setProgress(100);
      setLoaded(true);
      return;
    }

    document.body.classList.add("is-loading");
    const started = performance.now();
    const duration = 1350;
    const timer = window.setInterval(() => {
      const elapsed = performance.now() - started;
      const next = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(next);
      if (next === 100) {
        window.clearInterval(timer);
        window.setTimeout(() => {
          setLoaded(true);
          document.body.classList.remove("is-loading");
        }, 520);
      }
    }, 24);

    return () => {
      window.clearInterval(timer);
      document.body.classList.remove("is-loading");
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const move = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--mx", `${x * 22}px`);
      hero.style.setProperty("--my", `${y * 15}px`);
      hero.style.setProperty("--tilt-x", `${y * -2.2}deg`);
      hero.style.setProperty("--tilt-y", `${x * 3.4}deg`);
    };
    const reset = () => {
      hero.style.setProperty("--mx", "0px");
      hero.style.setProperty("--my", "0px");
      hero.style.setProperty("--tilt-x", "0deg");
      hero.style.setProperty("--tilt-y", "0deg");
    };

    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", reset);
    return () => {
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", reset);
    };
  }, [loaded]);

  return (
    <main className={loaded ? "portfolio is-ready" : "portfolio"}>
      <div className="loader" aria-hidden={loaded}>
        <div className="loader-header">
          <span>NourelhakMaache</span>
          <span className="loader-bars">
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="loader-ticker">
          <span>FULL-STACK DEVELOPER</span>
          <i>•</i>
          <span>AI BUILDER</span>
          <i>•</i>
          <span>AUTOMATION</span>
          <i>•</i>
        </div>
        <div className="loader-progress">
          <span>LOADING</span>
          <span>{progress}%</span>
          <b style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <span className="loader-welcome">Welcome</span>
      </div>

      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <header className="reference-header">
        <a className="monogram" href="#top" aria-label="Nourelhak Maache home">
          NM
        </a>
        <a className="header-email" href="mailto:mn.maache@esi.dz">
          mn.maache@esi.dz
        </a>
        <button
          type="button"
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
        <nav
          id="primary-navigation"
          className={menuOpen ? "nav-visible" : ""}
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            <span>ABOUT</span>
            <span>ABOUT</span>
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            <span>WORK</span>
            <span>WORK</span>
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <span>CONTACT</span>
            <span>CONTACT</span>
          </a>
        </nav>
        <a
          className="resume-link"
          href="/Nourelhak-Maache-CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <span>RÉSUMÉ</span>
          <span>RÉSUMÉ</span>
        </a>
      </header>

      <section className="landing" id="top" ref={heroRef}>
        <div className="landing-ring ring-a" aria-hidden="true" />
        <div className="landing-ring ring-b" aria-hidden="true" />
        <div className="landing-title">
          <p>Hello! I&apos;m</p>
          <h1>
            <span>NOURELHAK</span>
            <span>MAACHE</span>
          </h1>
        </div>
        <div className="hero-character">
          <div className="character-halo" aria-hidden="true" />
          <img
            src="/assets/nourelhak-3d.png"
            alt="Stylized 3D portrait of Nourelhak Maache"
          />
        </div>
        <div className="hero-role">
          <p>An</p>
          <div>
            <strong>FULL-STACK DEVELOPER</strong>
            <strong>AI & AUTOMATION BUILDER</strong>
          </div>
        </div>
        <p className="hero-location">ALGIERS, ALGERIA · ESI</p>
        <a className="scroll-cue" href="#about" aria-label="Scroll to about">
          <span>SCROLL</span>
          <b>↓</b>
        </a>
      </section>

      <section className="about-reference" id="about">
        <div className="about-heading">
          <p>About Me</p>
          <h2>
            BUILDING <span>INTELLIGENT</span>
            <br />
            SOFTWARE THAT
            <br />
            MOVES IDEAS FORWARD.
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m a computer science engineering student at ESI Algiers,
            focused on full-stack products, backend systems, AI agents, and
            automation.
          </p>
          <p>
            I like difficult problems with practical outcomes—from actuarial
            calculation engines to research archives and Algeria&apos;s first
            multi-merchant digital loyalty platform.
          </p>
          <a
            href="https://www.linkedin.com/in/maache-nourelhak-868115342/"
            target="_blank"
            rel="noreferrer"
          >
            MORE ABOUT ME ↗
          </a>
        </div>
        <div className="about-index" aria-hidden="true">
          01
        </div>
      </section>

      <section className="services">
        <div className="services-title">
          <h2>
            WHAT
            <br />
            <span>I DO</span>
          </h2>
          <p>
            I move between product thinking and engineering, joining the pieces
            that turn an idea into software people can use.
          </p>
        </div>
        <div className="service service-ai">
          <div className="service-number">A</div>
          <div>
            <h3>AI DEVELOPER</h3>
            <h4>Intelligent workflows & agentic automation</h4>
            <p>
              Building coordinated AI agents, automated analysis pipelines, and
              practical systems that connect language models to real work.
            </p>
          </div>
          <div className="skill-line">
            <span>Python</span>
            <span>AI Agents</span>
            <span>Automation</span>
            <span>ML / DL</span>
          </div>
        </div>
        <div className="service service-fullstack">
          <div className="service-number">B</div>
          <div>
            <h3>FULL-STACK</h3>
            <h4>Modern products & dependable systems</h4>
            <p>
              Designing responsive interfaces, APIs, data models, and
              infrastructure as one maintainable product—not disconnected
              layers.
            </p>
          </div>
          <div className="skill-line">
            <span>React</span>
            <span>Next.js</span>
            <span>FastAPI</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </section>

      <section className="career">
        <div className="career-heading">
          <p>My career &</p>
          <h2>EXPERIENCE</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-row" key={item.year}>
              <span className="timeline-year">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <h4>{item.place}</h4>
              </div>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-reference" id="work">
        <div className="work-heading">
          <p>Selected creations</p>
          <h2>MY WORK</h2>
        </div>
        <div className="work-list">
          {projects.map((project) => (
            <article
              className={`work-item visual-${project.visual}`}
              id={project.visual === "fidelio" ? "fidelio" : undefined}
              key={project.name}
            >
              <div className="work-number">{project.number}</div>
              <div className="work-info">
                <p>{project.type}</p>
                <h3>{project.name}</h3>
                <p className="work-description">{project.description}</p>
                <div className="work-tools">
                  <span>Tools and features</span>
                  <p>{project.stack}</p>
                </div>
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.href.startsWith("http") ? "noreferrer" : undefined
                  }
                >
                  VIEW PROJECT ↗
                </a>
              </div>
              <ProjectVisual type={project.visual} name={project.name} />
              <span className="work-year">{project.year}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-reference">
        <div className="stack-heading">
          <p>Technologies I use to make ideas real</p>
          <h2>TECH STACK</h2>
        </div>
        <div className="stack-cloud">
          {tools.map((tool, index) => (
            <span
              key={tool}
              style={{ "--delay": `${index * -0.22}s` } as React.CSSProperties}
            >
              <b>{tool.slice(0, 2).toUpperCase()}</b>
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section className="contact-reference" id="contact">
        <div className="contact-actions">
          <a
            href="https://github.com/NOUNOU199"
            target="_blank"
            rel="noreferrer"
          >
            EXPLORE MY CODE <span>→</span>
          </a>
          <a href="mailto:mn.maache@esi.dz">
            HIRE ME <span>→</span>
          </a>
        </div>
        <div className="contact-main">
          <p>Have an internship, collaboration, or product in mind?</p>
          <h2>
            LET&apos;S BUILD
            <br />
            SOMETHING <span>USEFUL.</span>
          </h2>
          <a href="mailto:mn.maache@esi.dz">mn.maache@esi.dz ↗</a>
        </div>
        <div className="contact-details">
          <div>
            <h3>Nourelhak Maache</h3>
            <p>Algiers, Algeria</p>
          </div>
          <div>
            <h4>Social</h4>
            <a
              href="https://github.com/NOUNOU199"
              target="_blank"
              rel="noreferrer"
            >
              Github ↗
            </a>
            <a
              href="https://www.linkedin.com/in/maache-nourelhak-868115342/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
          <div>
            <h4>Built with</h4>
            <p>Curiosity, code & intention</p>
            <p>© {new Date().getFullYear()}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectVisual({ type, name }: { type: string; name: string }) {
  return (
    <div className="project-visual" aria-label={`${name} project visualization`}>
      {type === "fidelio" && (
        <>
          <div className="fidelio-orbit" />
          <div className="fidelio-card card-purple">FIDELIO</div>
          <div className="fidelio-card card-lime">
            <span>FIDELIO</span>
            <strong>ALL YOUR REWARDS.</strong>
            <small>ALGIERS / DZ</small>
          </div>
        </>
      )}
      {type === "aglic" && (
        <div className="aglic-screen">
          <div className="aglic-nav">AGLIC / PROVISIONS</div>
          <div className="aglic-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <strong>6 MODULES</strong>
          <span>PE · PB · PPNA · SAP · PSAP · IBNR</span>
        </div>
      )}
      {type === "agentic" && (
        <div className="agent-network">
          <span>ANALYZE</span>
          <span>REFACTOR</span>
          <span>VALIDATE</span>
          <i />
          <i />
          <i />
        </div>
      )}
      {type === "academy" && (
        <div className="academy-window">
          <span>TWENTY / ACADEMY</span>
          <div className="academy-sidebar" />
          <div className="academy-lines">
            <i />
            <i />
            <i />
          </div>
          <strong>LEARN. MANAGE. GROW.</strong>
        </div>
      )}
      {type === "lmcs" && (
        <div className="research-archive">
          <span>LMCS / ARCHIVE</span>
          <strong>RESEARCH SHOULD STAY DISCOVERABLE.</strong>
          <div>
            <i>01</i>
            <i>02</i>
            <i>03</i>
          </div>
        </div>
      )}
    </div>
  );
}
