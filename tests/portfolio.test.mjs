import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

const projectFile = (path) => new URL(path, projectRoot);

test("keeps the portfolio identity and contact paths intact", async () => {
  const [page, layout] = await Promise.all([
    readFile(projectFile("app/page.tsx"), "utf8"),
    readFile(projectFile("app/layout.tsx"), "utf8"),
  ]);

  assert.match(page, /NOURELHAK/);
  assert.match(page, /Fidelio/);
  assert.match(page, /mn\.maache@esi\.dz/);
  assert.match(page, /github\.com\/NOUNOU199/);
  assert.match(page, /linkedin\.com\/in\/maache-nourelhak-868115342/);
  assert.match(layout, /Full-stack Developer & AI Explorer/);
});

test("ships the portfolio assets referenced by the page", async () => {
  await Promise.all([
    access(projectFile("public/assets/nourelhak-cutout.png")),
    access(projectFile("public/Nourelhak-Maache-CV.pdf")),
    access(projectFile("public/og.png")),
    access(projectFile("public/favicon.svg")),
  ]);
});

test("does not bring back retired prototype code or debug labels", async () => {
  const [page, styles] = await Promise.all([
    readFile(projectFile("app/page.tsx"), "utf8"),
    readFile(projectFile("app/globals.css"), "utf8"),
  ]);

  assert.doesNotMatch(page, /PortraitScene|console\.(log|error)|data-cursor="MOVE"/);
  assert.doesNotMatch(styles, /\.portrait-canvas|\.portrait-fallback/);
  assert.match(styles, /prefers-reduced-motion:\s*reduce/);
});
