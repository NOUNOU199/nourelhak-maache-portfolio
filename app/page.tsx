"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { archive, copy, projects } from "./content";
import { Icon, SiteFooter, useSite } from "./site-shell";

function MagneticLink({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 24 });
  const sy = useSpring(y, { stiffness: 220, damping: 24 });
  function move(event: MouseEvent<HTMLAnchorElement>) {
    if (
      reduced ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.14);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.14);
  }
  return (
    <motion.a
      href={href}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={move}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}

function ProjectStage() {
  const { locale } = useSite();
  const t = copy[locale];
  const [selected, setSelected] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduced = useReducedMotion();
  const project = projects[selected];
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "start 25%"],
  });
  const settledProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const stageScale = useTransform(settledProgress, [0, 1], [0.97, 1]);
  function select(index: number) {
    setDirection(index > selected ? 1 : -1);
    setSelected((index + projects.length) % projects.length);
  }
  return (
    <section
      id="work"
      className="selected-work section-anchor"
      aria-labelledby="work-title"
    >
      <div className="stage-toolbar">
        <h2 id="work-title">
          {t.selected}
          <span className="project-count"> / 3</span>
        </h2>
        <div className="stage-controls">
          <button
            type="button"
            className="icon-button"
            aria-label={t.previous}
            onClick={() => select(selected - 1)}
          >
            <Icon name="left" />
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label={t.next}
            onClick={() => select(selected + 1)}
          >
            <Icon name="right" />
          </button>
        </div>
      </div>
      <motion.div
        ref={stageRef}
        className="project-stage"
        style={{
          backgroundColor: project.color,
          scale: reduced ? 1 : stageScale,
        }}
        role="region"
        aria-roledescription="carousel"
        aria-label={t.selected}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            select(selected + 1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            select(selected - 1);
          }
        }}
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={project.slug}
            className="stage-slide"
            initial={
              reduced
                ? { opacity: 0 }
                : {
                    clipPath:
                      direction > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
                  }
            }
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduced ? 0.1 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={`/work/${project.slug}`}
              className="stage-image-link"
              aria-label={`${t.viewProject}: ${project.name}`}
            >
              <Image
                src={project.image}
                alt={`${project.name} — ${project.category[locale]}`}
                fill
                priority={selected === 0}
                sizes="(max-width: 700px) 90vw, 1100px"
              />
              <span className="image-open-label">
                {t.viewProject}
                <Icon name="plus" />
              </span>
            </Link>
          </motion.div>
        </AnimatePresence>
        <div
          className="stage-tabs"
          aria-label={
            locale === "en" ? "Choose a project" : "Choisir un projet"
          }
        >
          {projects.map((item, index) => (
            <button
              type="button"
              key={item.slug}
              className={
                selected === index ? "stage-tab is-active" : "stage-tab"
              }
              aria-pressed={selected === index}
              onClick={() => select(index)}
            >
              <span>{item.name}</span>
              <span className="tab-indicator" />
            </button>
          ))}
        </div>
      </motion.div>
      <div className="stage-caption" aria-live="polite" aria-atomic="true">
        <Link href={`/work/${project.slug}`} className="stage-project-name">
          {project.name}
        </Link>
        <p>{project.category[locale]}</p>
        <Link href={`/work/${project.slug}`} className="text-link">
          {t.viewProject}
          <Icon name="plus" />
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const { locale } = useSite();
  const t = copy[locale];
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("mn.maache@esi.dz");
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <>
      <main id="main">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-heading">
            <h1 id="hero-title" aria-label="Nourelhak Maache">
              <span className="name-line">Nourelhak</span>
              <span className="name-line surname">
                Maache<span className="name-period">.</span>
              </span>
            </h1>
            <div className="hero-aside">
              <span className="hero-emblem" aria-hidden="true">
                <Icon name="spark" />
              </span>
              <p>{t.role}</p>
              <p className="muted">{t.location}</p>
            </div>
          </div>
          <div className="hero-intro">
            <p>{t.intro}</p>
            <div>
              <p>{t.introBody}</p>
              <a className="text-link" href="#work">
                {t.scroll}
                <Icon name="down" />
              </a>
            </div>
          </div>
          <ProjectStage />
        </section>
        <section
          className="project-index page-width"
          aria-label={
            locale === "en" ? "Project stories" : "Histoires des projets"
          }
        >
          <p className="index-intro">{t.selectionNote}</p>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="index-row"
            >
              <span className="index-name">{project.name}</span>
              <span className="index-description">
                {project.headline[locale]}
              </span>
              <span className="index-icon">
                <Icon name="plus" />
              </span>
            </Link>
          ))}
        </section>
        <section
          className="archive-section page-width"
          aria-labelledby="archive-title"
        >
          <div className="section-heading">
            <h2 id="archive-title">{t.archive}</h2>
            <p>{t.archiveBody}</p>
          </div>
          <div className="archive-list">
            {archive.map((item) => (
              <details key={item.name} className="archive-item">
                <summary>
                  <span className="archive-name">{item.name}</span>
                  <span className="archive-category">
                    {item.category[locale]}
                  </span>
                  <Icon name="plus" />
                </summary>
                <div className="archive-content">
                  <p>{item.description[locale]}</p>
                  <div>
                    <p className="archive-stack">{item.stack}</p>
                    {item.href && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                      >
                        {t.source}
                        <Icon name="external" />
                      </a>
                    )}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>
        <section
          className="about-section section-anchor"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="page-width">
            <div className="about-heading">
              <h2 id="about-title">
                {t.aboutTitle.split("\n").map((line, index) => (
                  <span key={line} className={index === 1 ? "serif" : ""}>
                    {line}
                  </span>
                ))}
              </h2>
              <span className="about-mark" aria-hidden="true">
                <Icon name="asterisk" />
              </span>
            </div>
            <div className="about-copy">
              <p>{t.aboutBody}</p>
              <div>
                <p>{t.aboutSecond}</p>
                <a
                  className="text-link"
                  href="/Nourelhak-Maache-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.cv}
                  <Icon name="download" />
                </a>
                <span className="cv-note">{t.cvNote}</span>
              </div>
            </div>
            <div className="skills">
              <h3>{t.focus}</h3>
              <div className="skill-row">
                <h4>{t.frontend}</h4>
                <p>{t.frontendBody}</p>
              </div>
              <div className="skill-row">
                <h4>{t.backend}</h4>
                <p>{t.backendBody}</p>
              </div>
              <div className="skill-row">
                <h4>{t.ai}</h4>
                <p>{t.aiBody}</p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="contact-section page-width section-anchor"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-top">
            <h2 id="contact-title">
              {t.contactTitle.split("\n").map((line, index) => (
                <span className={index === 1 ? "serif" : ""} key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <MagneticLink
              href="mailto:mn.maache@esi.dz"
              className="contact-disc"
            >
              <Icon name="asterisk" />
              <span>{t.email}</span>
            </MagneticLink>
          </div>
          <div className="contact-bottom">
            <p>{t.contactBody}</p>
            <div>
              <div className="email-line">
                <a href="mailto:mn.maache@esi.dz">mn.maache@esi.dz</a>
                <button
                  type="button"
                  className="icon-button"
                  onClick={copyEmail}
                  aria-label={t.copyEmail}
                >
                  <Icon name={copied ? "check" : "copy"} />
                </button>
              </div>
              <p className="copy-feedback" role="status">
                {copied ? t.copied : copyError ? t.copyFailed : ""}
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
