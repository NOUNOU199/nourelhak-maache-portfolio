# Design System

## Theme

A cinematic developer journey inspired by motion-led character portfolios: a pale-lilac loading stage opens into a near-black world where Nourelhak’s sculpted character anchors the story. Oversized typography, violet light, full-viewport chapters, and precise interface details make the page feel authored and alive.

## Color

Use a committed dark palette in OKLCH.

- Background: `oklch(0.08 0 0)`
- Surface: `oklch(0.15 0.018 270)`
- Surface strong: `oklch(0.21 0.035 270)`
- Ink: `oklch(0.97 0 0)`
- Muted: `oklch(0.73 0.025 270)`
- Primary indigo: `oklch(0.48 0.219 270)`
- Primary light: `oklch(0.72 0.16 270)`
- Pale stage: `oklch(0.95 0.012 293)`
- Signal chartreuse: `oklch(0.87 0.19 125)`

Violet carries the identity across large surfaces. Pale lilac creates the dramatic light-mode chapters and loading stage. Chartreuse is reserved for Fidelio so the flagship product has a distinct world without fragmenting the portfolio.

## Typography

Use Bricolage Grotesque for display and body copy, with deliberate shifts from compact heavy headlines to comfortable regular prose. Use Azeret Mono only for short technical metadata and live-status copy. Display headings stay at or above `-0.04em` letter spacing and below 96px.

## Layout

Use a responsive 12-column desktop system with single-purpose viewport chapters. The hero layers oversized naming, role typography, orbit lines, and the central character. About, capabilities, timeline, project chapters, tools, and contact each receive a distinct spatial rhythm. Avoid uniform card grids.

## Components

- Full-screen progress loader with moving role ticker
- Minimal persistent navigation with two-line hover transitions
- Interactive character stage with layered light, cursor parallax, and scroll rotation
- Full-viewport project chapters with bespoke visual systems
- Fidelio loyalty-card scene and product-system storytelling
- Technical tool cloud and two-part contact gateway

Controls use restrained 10–14px radii or full pills. Borders are structural; shadows are short and intentional.

## Motion

Use a staged progress loader, clip-path reveal, smooth native scrolling, transform-driven hero parallax, orbit motion, and deliberate object reactions within projects. Hover motion uses exponential easing with no bounce. Under `prefers-reduced-motion`, skip the loader, remove parallax and ambient motion, keep content visible, and use immediate state changes.

## Imagery

The hero uses a stylized 3D likeness generated from Nourelhak’s supplied photographs. Fidelio receives a bespoke product visualization rooted in the platform’s real multi-merchant loyalty model. Supporting photography should be used sparingly and only when it strengthens the human story.
