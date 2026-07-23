# Design System

## Theme

An after-hours invention studio: near-black space, deep indigo machinery, electric chartreuse signals, and a sculpted character lit like a physical collectible. The composition feels kinetic and technically assured, with generous breathing room and a few large, surprising transitions.

## Color

Use a committed dark palette in OKLCH.

- Background: `oklch(0.08 0 0)`
- Surface: `oklch(0.15 0.018 270)`
- Surface strong: `oklch(0.21 0.035 270)`
- Ink: `oklch(0.97 0 0)`
- Muted: `oklch(0.73 0.025 270)`
- Primary indigo: `oklch(0.48 0.219 270)`
- Primary light: `oklch(0.72 0.16 270)`
- Signal chartreuse: `oklch(0.87 0.19 125)`
- Warm human accent: `oklch(0.72 0.15 55)`

Indigo carries the identity across large surfaces. Chartreuse is a precise signal for active states and important links, never a wash. Warm light appears around the character and select project imagery to keep the world human.

## Typography

Use Bricolage Grotesque for display and body copy, with deliberate shifts from compact heavy headlines to comfortable regular prose. Use Azeret Mono only for short technical metadata and live-status copy. Display headings stay at or above `-0.04em` letter spacing and below 96px.

## Layout

Use a responsive 12-column desktop system with asymmetric compositions and single-purpose viewport moments. The hero pairs oversized copy with the character scene. Project stories alternate between full-width cinematic feature panels and lean editorial rows; avoid uniform card grids. Section spacing is fluid and intentionally varied.

## Components

- Floating navigation capsule with direct anchors and a high-contrast contact action
- Interactive character stage with layered light, cursor parallax, and scroll rotation
- Fidelio feature world with loyalty-card motifs and product-system storytelling
- Project index rows that expand on hover/focus without hiding essential content
- Technical capability orbit built from compact, meaningful labels
- Contact marquee and direct email/social actions

Controls use restrained 10–14px radii or full pills. Borders are structural; shadows are short and intentional.

## Motion

Use smooth native scrolling plus transform-driven section choreography. The opening sequence reveals the character, headline, and status in one orchestration. Horizontal sliding is reserved for project transitions. Cursor parallax applies only to the hero stage. Hover motion uses exponential easing with no bounce. Under `prefers-reduced-motion`, remove parallax and scroll transforms, keep content visible, and use immediate state changes or short crossfades.

## Imagery

The hero uses a stylized 3D likeness generated from Nourelhak’s supplied photographs. Fidelio receives a bespoke product visualization rooted in the platform’s real multi-merchant loyalty model. Supporting photography should be used sparingly and only when it strengthens the human story.
