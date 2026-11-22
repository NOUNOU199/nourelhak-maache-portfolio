import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "../../content";
import ProjectStory from "./project-story";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project ? `${project.name} — Nourelhak Maache` : "Project not found",
    description: project?.description.en,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  return <ProjectStory index={index} />;
}
