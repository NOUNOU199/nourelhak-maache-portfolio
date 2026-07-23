# Nourelhak Maache — Portfolio

My personal portfolio, built to introduce who I am before listing what I use.
It brings together my work in full-stack development, AI experiments,
automation, and student projects at ESI Algiers.

## Highlights

- A cinematic, responsive portfolio with a custom cursor and reduced-motion mode
- A transparent portrait treatment with restrained hover depth
- Individual visual worlds for Fidelio, Aglic Assurances, Agentic Codecorrect,
  Twenty Academy, and LMCS Labo
- Direct links to my résumé, GitHub, LinkedIn, and email

## Run locally

You need Node.js `22.13.0` or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
npm test
```

## Project structure

- `app/page.tsx` contains the portfolio content and interactions.
- `app/globals.css` contains the visual system, responsive layout, and motion.
- `app/layout.tsx` contains fonts and social metadata.
- `public/assets/` contains the portrait artwork.
- `public/Nourelhak-Maache-CV.pdf` is the downloadable résumé.

## Deploy

This is a standard Next.js application and can be imported directly into
Vercel. No database or environment variables are required.
