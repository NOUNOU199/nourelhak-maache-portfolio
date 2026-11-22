# Nourelhak Maache — Portfolio

A bilingual portfolio for freelance clients, recruiters, and collaborators. It presents MEDTresor, Madrasatuk, and MATENSANICH through real product screens and dedicated case studies, with earlier work preserved in an expandable archive.

The interface uses self-hosted Manrope and Instrument Serif, light and dark themes, native scrolling, a manual project carousel, and reduced-motion support. English is the default; French covers the homepage and case studies. Language and theme preferences persist locally.

## Run locally

Use Node.js 22.13.0 or newer.

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). No database or application secrets are required.

## Quality checks

```bash
npm run lint
npm run build
node --test tests/portfolio.test.mjs
```

`npm test` runs all three checks. Browser verification should cover 390px, 768px, and 1440px in both themes, French copy, keyboard navigation, carousel selection, and the case-study routes. Review captures are kept under `.impeccable/review/`.

## Source and content

- `app/page.tsx`: homepage, project stage, archive, and contact interactions.
- `app/content.ts`: English/French copy, featured project data, and earlier projects.
- `app/site-shell.tsx`: navigation, inline SVG icons, locale/theme state, and footer.
- `app/work/[slug]/page.tsx`: generated project routes and metadata.
- `app/work/[slug]/project-story.tsx`: bilingual case-study presentation.
- `app/globals.css`: semantic palette, typography, responsive layout, and CSS motion.
- `app/layout.tsx`: self-hosted fonts, global metadata, and initial theme setup.
- `app/opengraph-image.tsx`: social preview image.
- `public/projects/`: public project screenshots; `sources.json` records their provenance.
- `public/Nourelhak-Maache-CV.pdf`: downloadable résumé.
- `DESIGN.md` and `.impeccable/design.json`: the shipped design system and preview extensions.

Featured routes are `/work/medtresor`, `/work/madrasatuk`, and `/work/matensanich`. Append `?lang=fr` for French, or use the language control.

## Deployment

Continue deploying to the existing Vercel project linked in `.vercel/project.json`. Keep project linkage local and do not commit authentication material. The stable production alias is [portfolionounou.vercel.app](https://portfolionounou.vercel.app); new production deployments update that alias. Deployment-specific URLs identify individual deployments and are separate from the stable alias.

From the linked project directory, use `vercel --prod` with an authenticated Vercel CLI. The app needs no application secrets. Vercel supplies `VERCEL_PROJECT_PRODUCTION_URL` for the metadata origin; `NEXT_PUBLIC_SITE_URL` can explicitly override it, and local development falls back to `http://localhost:3000`.
