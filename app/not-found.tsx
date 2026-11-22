import Link from "next/link";

export default function NotFound() {
  return (
    <main className="project-story page-width" id="main">
      <div className="story-heading">
        <h1>That page wandered off.</h1>
      </div>
      <p className="story-headline serif">The work is still here.</p>
      <Link className="text-link" href="/">
        Back to the portfolio
      </Link>
    </main>
  );
}
