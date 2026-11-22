---
name: Nourelhak Maache Portfolio
description: A refined editorial portfolio grounded in real software.
colors:
  paper: "#f4f4f0"
  ink: "#243c32"
  secondary: "#5b665f"
  rule: "#cdd2c9"
  accent: "#285b43"
  hover: "#e8ebe3"
  about: "#243e33"
  about-ink: "#f0f2e9"
  dark-paper: "#171e1a"
  dark-ink: "#e9ede5"
  dark-secondary: "#b3bdb1"
  dark-rule: "#3f4b40"
  dark-accent: "#b8d5ab"
  dark-hover: "#263128"
  dark-about: "#263e31"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(4rem, 7vw, 6rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "1.8rem"
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.6
  label:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "0.875rem"
rounded:
  button: "2px"
  screen: "4px"
  circle: "50%"
spacing:
  compact: "0.75rem"
  base: "1rem"
  medium: "1.5rem"
  large: "2rem"
  section-gap: "3rem"
  broad: "5rem"
components:
  button-solid:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.25rem"
  button-icon:
    rounded: "{rounded.circle}"
    width: "44px"
    height: "44px"
  button-icon-hover:
    backgroundColor: "{colors.hover}"
  link-text:
    padding: "0.3rem 0"
    textColor: "{colors.ink}"
  contact-disc:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.circle}"
    width: "180px"
    height: "180px"
---

# Design System: Nourelhak Maache Portfolio

## Overview

**Creative North Star: "The Refined Studio Portfolio"**

Calm editorial composition gives Nourelhak a personal typographic identity while genuine product screens provide the visual evidence. Deep green ink, warm neutral paper, and an italic serif create character through proportion and contrast.

The interface stays open and lightly ruled. Native scrolling, manual project navigation, and quiet responses keep the work easy to explore in English and French, in light and dark themes. This records the completed direction A rebuild, replacing the retired violet portrait system.

**Key Characteristics:**

- Open editorial composition with generous gutters.
- Manrope structure paired with expressive Instrument Serif.
- Real project screenshots and restrained image depth.
- Manual interaction, visible focus, and reduced-motion support.

## Colors

Muted botanical greens frame a warm neutral ground; dark mode reverses the reading contrast without recoloring project screenshots.

### Primary

- **Deep green accent:** interactive emphasis, name punctuation, selection, and the contact disc; dark mode uses a pale leaf accent.
- **Green ink:** primary text and headings; the dark counterpart is a pale warm neutral.

### Neutral

- **Paper:** page ground, with a forest-dark counterpart.
- **Secondary:** supporting text, metadata, and descriptions.
- **Rule:** thin structural dividers and outlined controls.
- **Hover:** a subtle tonal wash on interactive rows and icon buttons.
- **About / about ink:** the sustained green section and its light text, retained across both themes.

Project stage grounds are content-specific colors defined in `app/content.ts`, not additional global brand accents. Their light backgrounds remain light in dark mode.

**The Theme Roles Rule.** Use the existing semantic CSS variables for shared surfaces and controls so both theme mappings remain coherent.

## Typography

**Display and Body Font:** self-hosted Manrope Variable, with sans-serif fallback.
**Editorial Font:** self-hosted Instrument Serif, with Georgia and serif fallbacks; regular and italic files are loaded.

The sans-serif supplies clear structure. The serif adds personal emphasis in the surname and selected heading phrases, and carries section and case-study headings. The browser resolves the serif's available regular face where the shared heading rule requests medium weight.

### Hierarchy

- **Display:** the frontmatter display role names the desktop hero. At tablet width it becomes `clamp(4.5rem, 8.5vw, 6rem)`; at phone width, `clamp(3.8rem, 15vw, 5.5rem)` with unit line height.
- **Headline:** the frontmatter headline role captures editorial section headings. Larger mixed headings use a sans-serif base with serif spans; case-study section headings use the serif at (2.5rem), reduced to (2.2rem) on phones.
- **Title:** project stage captions use the frontmatter title role; project index names scale from (1.5rem) to (2.5rem).
- **Body:** the frontmatter body role is the page default. Introductory copy rises to `clamp(1.5rem, 2.4vw, 2rem)` with (1.45) line height. Case-study prose has (1.85) line height and a maximum measure of (70ch).
- **Label:** small supporting navigation and control text uses the label role; labels remain ordinary sentence or title case.

**The Two Voices Rule.** Keep prose and controls in Manrope; reserve Instrument Serif for editorial headings and deliberate emphasis.

## Layout

A centered content width caps at (1280px). Its total horizontal inset is (8rem) on desktop, (5rem) at widths up to (1100px), and (3rem) at widths up to (700px). At (1500px) and above, the hero's top padding increases from (80px) to (100px).

Wide screens use asymmetric introductory columns and paired explanatory columns, with gaps of (3–6rem). Horizontal rules organize project lists, archive disclosures, and case-study sections. Broad sections use (7–8rem) vertical space; phones compress these to roughly (4–4.5rem) and stack the columns.

The project stage uses a wide (1.88) aspect ratio and a phone (1.15) ratio. Screens crop from the top; the phone carousel favors the top left. Dedicated case-study screens retain their intrinsic aspect ratio. Long project names wrap safely. The header becomes an expandable navigation panel below (700px).

## Elevation & Depth

The page is flat and divided by rules and tonal changes. Only product screens receive a diffuse image shadow (`0 16px 32px #14281d18`), shared by the carousel and case-study screenshots. Hover washes and a restrained screen zoom provide depth without making every section a card.

**The Screen Depth Rule.** Keep the established image shadow attached to product imagery; preserve the flat treatment of prose and project rows.

## Shapes

Stage grounds and section boundaries are rectangular. Screens have subtly eased corners via the screen radius; filled case-study links use the smaller button radius. Circular icon controls and the large circular email CTA supply the contrasting round geometry. Inline SVG strokes provide interface icons.

## Components

### Buttons and text links

Icon buttons use the frontmatter control dimensions, a circular shape, and a tonal hover wash. Theme and carousel controls carry a thin rule-colored border. Text links pair an underline with an inline SVG; hover changes the color and widens the icon gap. Filled case-study links use the accent/paper mapping and a minimum height of (50px).

Global keyboard focus is a (2px) accent outline offset by (6px), reduced to (3px) on buttons. The green about section supplies a light outline color. Existing controls have a minimum interactive height of (44px).

### Navigation

A normal-flow header uses a wordmark, understated text links, a language toggle, and a circular theme toggle. Hover draws an underline from the left. On phones the menu opens below the header with large links and closes through selection or Escape. Language and theme preferences persist locally; the locale also travels in `?lang=` links.

### Manual project stage

Previous/next buttons, named selection buttons, and Left/Right keyboard handling select the screen. Active selection combines stronger text and a dot; captions announce changes politely. There is no autoplay. Screens reveal through a directional mask over (0.7s), using `cubic-bezier(0.22, 1, 0.36, 1)`; image hover scales to (1.025).

Native scroll progress softly settles the whole stage from (0.97) to (1). Under reduced motion the stage stays at full scale and changes through a short opacity transition; CSS animations are removed. The initial name reveal uses the same restrained easing.

### Project rows and archive

Recent-project rows combine a name, a description, and a circular SVG action. A hover wash and small inset respond to the pointer; the phone layout keeps its alignment. Earlier work uses native `details`/`summary`, with the plus SVG rotating when open. Preserve semantic links and disclosures when extending these patterns.

### Contact disc

The accent-filled email circle uses the frontmatter dimensions, shrinking to (130px) on phones. A fine-pointer magnetic response uses springs (stiffness 220, damping 24) and a pointer displacement multiplier of (0.14). Reduced-motion and coarse-pointer users receive a still control. The nearby email-copy control provides success or failure feedback.

## Do's and Don'ts

### Do:

- **Do** preserve semantic theme roles and readable contrast in both themes.
- **Do** use real public project screenshots with recorded provenance.
- **Do** retain native scrolling, manual carousel control, and reduced-motion behavior.
- **Do** keep English and French content complete when extending the site.
- **Do** use rules and open space to organize prose and project lists.

### Don't:

- **Don't** reintroduce the retired generated portrait, violet lighting, or artificial loading stage.
- **Don't** replace project evidence with fabricated metrics or decorative product mockups.
- **Don't** introduce autoplay into the manual project stage.
- **Don't** turn the open editorial layout into a repetitive card grid.
