"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProjectVisualType =
  | "fidelio"
  | "aglic"
  | "agentic"
  | "academy"
  | "lmcs";

type Project = {
  number: string;
  name: string;
  type: string;
  description: string;
  stack: string;
  year: string;
  visual: ProjectVisualType;
  href?: string;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const INTERACTIVE_CURSOR_SELECTOR = "a, button, [data-cursor]";
const LOADER_DURATION_MS = 1350;

const projects: Project[] = [
  {
    number: "01",
    name: "Fidelio",
    type: "Digital loyalty / Product",
    description:
      "I’m building Fidelio to replace paper loyalty cards with one digital experience that works across different Algerian merchants.",
    stack: "Flutter · TypeScript · PostgreSQL · Docker",
    year: "2026",
    visual: "fidelio",
  },
  {
    number: "02",
    name: "Aglic Assurances",
    type: "Actuarial intelligence",
    description:
      "Built around a real actuarial workflow: upload Excel files, calculate six insurance provisions, review dashboards, and export the results.",
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
      "An experiment with specialized AI agents: one finds problems, another suggests a refactor, and another checks the result.",
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
      "A modular ERP for educational institutions, covering learners, training programs, resources, and secure client–server communication.",
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
      "A team-built research archive with researcher profiles, publication discovery, and automated updates from scholarly sources.",
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
    place: "Independent product",
    copy: "Taking a familiar local problem from rough idea to mobile app, web experience, API, worker, and deployment setup.",
  },
  {
    year: "2025",
    title: "Exploring AI and insurance software",
    place: "Personal and academic projects",
    copy: "Learning how coordinated agents behave while building software around real actuarial calculations and Excel workflows.",
  },
  {
    year: "2024",
    title: "Learning full-stack work in teams",
    place: "Twenty Academy and LMCS Labo",
    copy: "Working from interface to database on education and research tools, with maintainability and secure data flow in mind.",
  },
  {
    year: "2022—Now",
    title: "Learning to lead and communicate",
    place: "ETIC Club · ESI Algiers",
    copy: "Coordinating teams, event logistics, institutional communication, and student visits to BNP Paribas and Yassir.",
  },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLSpanElement>(null);
  const scrollProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia(REDUCED_MOTION_QUERY).matches;

    if (prefersReducedMotion) {
      const frame = window.requestAnimationFrame(() => {
        setProgress(100);
        setLoaded(true);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    document.body.classList.add("is-loading");
    const started = performance.now();
    let loadingFrame = 0;
    let finishTimer = 0;

    const updateLoader = () => {
      const elapsed = performance.now() - started;
      const next = Math.min(
        100,
        Math.round((elapsed / LOADER_DURATION_MS) * 100),
      );
      setProgress(next);

      if (next === 100) {
        finishTimer = window.setTimeout(() => {
          setLoaded(true);
          document.body.classList.remove("is-loading");
        }, 520);
        return;
      }

      loadingFrame = window.requestAnimationFrame(updateLoader);
    };

    loadingFrame = window.requestAnimationFrame(updateLoader);

    return () => {
      window.cancelAnimationFrame(loadingFrame);
      window.clearTimeout(finishTimer);
      document.body.classList.remove("is-loading");
    };
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    const label = cursorLabelRef.current;
    if (!finePointer || !dot || !ring || !label) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let frame = 0;

    const renderCursor = () => {
      ringX += (targetX - ringX) * (reduced ? 1 : 0.16);
      ringY += (targetY - ringY) * (reduced ? 1 : 0.16);
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(renderCursor);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      dot.classList.add("cursor-visible");
      ring.classList.add("cursor-visible");
    };

    const onPointerOver = (event: PointerEvent) => {
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>(INTERACTIVE_CURSOR_SELECTOR)
          : null;
      if (!target) {
        ring.classList.remove("cursor-active");
        label.textContent = "";
        return;
      }
      ring.classList.add("cursor-active");
      label.textContent = target.dataset.cursor ?? "OPEN";
    };

    const onPointerOut = (event: PointerEvent) => {
      const nextTarget =
        event.relatedTarget instanceof Element
          ? event.relatedTarget.closest<HTMLElement>(
              INTERACTIVE_CURSOR_SELECTOR,
            )
          : null;
      if (!nextTarget) {
        ring.classList.remove("cursor-active");
        label.textContent = "";
      }
    };

    const onWindowLeave = () => {
      dot.classList.remove("cursor-visible");
      ring.classList.remove("cursor-visible");
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });
    document.documentElement.addEventListener("mouseleave", onWindowLeave);
    frame = window.requestAnimationFrame(renderCursor);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.documentElement.removeEventListener("mouseleave", onWindowLeave);
    };
  }, []);

  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>(
      "[data-reveal]",
    );
    const reduced = window.matchMedia(REDUCED_MOTION_QUERY).matches;

    if (reduced || !("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.classList.add("menu-open");
    window.addEventListener("keydown", closeMenu);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeMenu);
    };
  }, [menuOpen]);

  useEffect(() => {
    const progressBar = scrollProgressRef.current;
    if (!progressBar) return;

    const update = () => {
      const available =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = available > 0 ? window.scrollY / available : 0;
      progressBar.style.transform = `scaleY(${Math.min(1, Math.max(0, ratio))})`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <main className={loaded ? "portfolio is-ready" : "portfolio"}>
      <div className="scroll-progress" aria-hidden="true">
        <div ref={scrollProgressRef} />
      </div>
      <div
        ref={cursorDotRef}
        className="cursor-dot"
        aria-hidden="true"
      />
      <div
        ref={cursorRingRef}
        className="cursor-ring"
        aria-hidden="true"
      >
        <span ref={cursorLabelRef} />
      </div>
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
          <span>STUDENT</span>
          <i>•</i>
          <span>BUILDER</span>
          <i>•</i>
          <span>EXPLORER</span>
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
          aria-label="Primary navigation"
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
          rel="noopener noreferrer"
          data-cursor="OPEN"
        >
          <span>RÉSUMÉ</span>
          <span>RÉSUMÉ</span>
        </a>
      </header>

      <section className="landing" id="top">
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
          <Image
            className="static-portrait"
            src="/assets/nourelhak-cutout.png"
            alt="Stylized 3D portrait of Nourelhak Maache"
            width={1024}
            height={1536}
            sizes="(max-width: 720px) 92vw, (max-width: 1000px) 62vw, 46vw"
            priority
          />
        </div>
        <div className="hero-role">
          <p>A</p>
          <div>
            <strong>FULL-STACK DEVELOPER</strong>
            <strong>AI & AUTOMATION BUILDER</strong>
          </div>
        </div>
        <p className="hero-location">ALGIERS, ALGERIA · ESI</p>
        <a
          className="scroll-cue"
          href="#about"
          aria-label="Scroll to about"
          data-cursor="SCROLL"
        >
          <span>SCROLL</span>
          <b>↓</b>
        </a>
      </section>

      <section className="about-reference" id="about">
        <div className="about-heading" data-reveal>
          <p>A little about me</p>
          <h2>
            CURIOUS ABOUT <span>HARD PROBLEMS.</span>
            <br />
            SERIOUS ABOUT
            <br />
            USEFUL SOFTWARE.
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m a computer science student at ESI Algiers. I build
            full-stack products and I&apos;m currently going deeper into AI
            agents, machine learning, and automation.
          </p>
          <p>
            I enjoy the messy middle of a project: understanding the problem,
            shaping the product, and making everything work from the interface
            to the API and database. That&apos;s how projects such as Fidelio
            and Aglic came to life.
          </p>
          <a
            href="https://www.linkedin.com/in/maache-nourelhak-868115342/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GET TO KNOW ME ↗
          </a>
        </div>
        <div className="about-index" aria-hidden="true">
          01
        </div>
      </section>

      <section className="services">
        <div className="services-title" data-reveal>
          <h2>
            HOW
            <br />
            <span>I BUILD</span>
          </h2>
          <p>
            I like seeing the whole system. Product decisions, interfaces,
            APIs, data, and deployment all shape whether an idea becomes useful
            software.
          </p>
        </div>
        <div className="service service-ai">
          <div className="service-number">A</div>
          <div>
            <h3>AI & AUTOMATION</h3>
            <h4>Exploring useful work for intelligent systems</h4>
            <p>
              I&apos;m exploring how coordinated agents and automated analysis
              can take repetitive technical work off people&apos;s plates
              without hiding what the system is doing.
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
            <h3>FULL-STACK ENGINEERING</h3>
            <h4>Owning the path from interface to infrastructure</h4>
            <p>
              I enjoy connecting responsive interfaces, clear APIs, thoughtful
              data models, and dependable infrastructure into one maintainable
              product.
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
        <div className="career-heading" data-reveal>
          <p>What I&apos;ve learned by shipping</p>
          <h2>MY PATH</h2>
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
        <div className="work-heading" data-reveal>
          <p>Projects I can explain line by line</p>
          <h2>SELECTED WORK</h2>
        </div>
        <div className="work-list">
          {projects.map((project) => (
            <article
              className={`work-item visual-${project.visual}`}
              id={project.visual === "fidelio" ? "fidelio" : undefined}
              key={project.name}
            >
              <div className="work-number">{project.number}</div>
              <div className="work-info" data-reveal>
                <p>{project.type}</p>
                <h3>{project.name}</h3>
                <p className="work-description">{project.description}</p>
                <div className="work-tools">
                  <span>Tools and features</span>
                  <p>{project.stack}</p>
                </div>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="VIEW"
                  >
                    VIEW THE CODE ↗
                  </a>
                ) : (
                  <span className="work-status">BUILDING IN PUBLIC · 2026</span>
                )}
              </div>
              <div className="work-visual-reveal" data-reveal>
                <ProjectVisual type={project.visual} name={project.name} />
              </div>
              <span className="work-year">{project.year}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-reference">
        <div className="stack-heading" data-reveal>
          <p>The tools I reach for</p>
          <h2>MY TOOLBOX</h2>
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
            rel="noopener noreferrer"
          >
            SEE THE CODE <span>→</span>
          </a>
          <a href="mailto:mn.maache@esi.dz">
            START A CONVERSATION <span>→</span>
          </a>
        </div>
        <div className="contact-main" data-reveal>
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
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/maache-nourelhak-868115342/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
          <div>
            <h4>Built with</h4>
            <p>Care, curiosity & plenty of debugging</p>
            <p>© {new Date().getFullYear()}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectVisual({
  type,
  name,
}: {
  type: ProjectVisualType;
  name: string;
}) {
  return (
    <div
      className="project-visual"
      role="img"
      aria-label={`${name} project visualization`}
    >
      {type === "fidelio" && (
        <>
          <div className="fidelio-orbit" />
          <div className="fidelio-card card-purple">
            FIDELIO
          </div>
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
