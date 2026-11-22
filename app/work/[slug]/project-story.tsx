"use client";

import Image from "next/image";
import Link from "next/link";
import { copy, projects } from "../../content";
import { Icon, SiteFooter, useSite } from "../../site-shell";

export default function ProjectStory({ index }: { index: number }) {
  const { locale } = useSite();
  const t = copy[locale];
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return (
    <>
      <main className="project-story page-width" id="main">
        <Link className="text-link back-link" href="/#work">
          <Icon name="left" />
          {t.backWork}
        </Link>
        <div className="story-heading">
          <h1>{project.name}</h1>
          <p>{project.category[locale]}</p>
        </div>
        <p className="story-headline serif">{project.headline[locale]}</p>
        <div
          className="story-screen"
          style={{ backgroundColor: project.color }}
        >
          <Image
            src={project.image}
            alt={`${project.name} — ${project.category[locale]}`}
            width={1280}
            height={850}
            priority
            sizes="(max-width: 1000px) 90vw, 1100px"
          />
        </div>
        <p className="screenshot-note">{t.screenshotNote}</p>
        <div className="story-overview">
          <p>{project.description[locale]}</p>
          <dl>
            <div>
              <dt>{t.roleLabel}</dt>
              <dd>{project.role[locale]}</dd>
            </div>
            <div>
              <dt>{t.builtWith}</dt>
              <dd>{project.stack.join(" · ")}</dd>
            </div>
          </dl>
        </div>
        <div className="story-section">
          <h2>{t.challenge}</h2>
          <p>{project.challenge[locale]}</p>
        </div>
        <div className="story-section">
          <h2>{t.approach}</h2>
          <p>{project.approach[locale]}</p>
        </div>
        <div className="story-section">
          <h2>{t.features}</h2>
          <ul>
            {project.features.map((feature) => (
              <li key={feature.en}>{feature[locale]}</li>
            ))}
          </ul>
        </div>
        <div className="story-actions">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="solid-button"
            >
              {t.live}
              <Icon name="external" />
            </a>
          )}
          <a
            href={`mailto:mn.maache@esi.dz?subject=${encodeURIComponent(project.name)}`}
            className="text-link"
          >
            {t.discuss}
            <Icon name="plus" />
          </a>
        </div>
        <Link className="next-project" href={`/work/${next.slug}`}>
          <span>{t.nextProject}</span>
          <strong>{next.name}</strong>
          <Icon name="right" />
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
