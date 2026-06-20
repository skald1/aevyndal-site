# ÆVYNDAL WEBSITE ARCHITECTURE

## Purpose

This document defines the technical architecture for aevyndal.com.

The purpose of the architecture is to support the experience defined in the Website Design Bible.

Technology serves the experience.

Never reverse this relationship.

---

# Principles

Favor simplicity.

Favor static generation.

Favor maintainability.

Favor performance.

Favor native browser capabilities.

Avoid complexity unless complexity solves a real problem.

---

# Stack

Core:

* Astro
* TypeScript
* SCSS

Hosting:

* Cloudflare Pages

Media:

* Cloudflare R2

Search:

* Pagefind

Content:

* Astro Content Collections

Optional Future CMS:

* Sanity

---

# Philosophy

The website should feel alive.

It should not behave like an application.

It should behave like a world.

Avoid excessive client-side JavaScript.

Prefer server rendering and static generation.

Use JavaScript only when it improves the experience.

---

# Avoid

No React unless necessary.

No Tailwind dependency.

No GSAP.

No Framer Motion.

No Three.js.

No animation libraries.

No complex state management.

No Redux.

No large UI frameworks.

No component libraries.

Build only what is required.

---

# Folder Structure

src/

pages/

layouts/

components/

content/

styles/

scripts/

assets/

types/

lib/

data/

reference/

public/

---

# Pages

index.astro

ages/[slug].astro

locations/[slug].astro

lineages/[slug].astro

creatures/[slug].astro

deities/[slug].astro

articles/[slug].astro

campaigns/[slug].astro

search.astro

404.astro

---

# Layouts

BaseLayout.astro

ArticleLayout.astro

LocationLayout.astro

AgeLayout.astro

CollectionLayout.astro

---

# Components

Navigation

Hero

Cards

Sections

Search

Transitions

Media

Typography

Shared UI

Each component should be self-contained.

Favor composition over inheritance.

---

# Styles

Use SCSS.

Organize:

base/

tokens/

components/

layouts/

pages/

themes/

motion/

Typography and spacing should remain consistent across ages.

Age differences are atmospheric.

Not structural.

---

# Content Collections

ages

locations

articles

lineages

creatures

deities

campaigns

people

Each entry should relate to others.

The site is a graph.

Not a hierarchy.

---

# Search

Pagefind.

Entirely static.

Search groups:

Locations

People

Creatures

Faiths

Articles

Campaigns

Search should be available globally.

Search is one interaction away.

---

# Media

Images:

webp

Video:

webm with mp4 fallback

Poster image fallback required.

Ambient video is preferred.

Media assets should reside in Cloudflare R2.

Do not hardcode media paths.

All media should support replacement.

---

# JavaScript

Default:

None.

Use JavaScript only for:

Ghost header.

Age transitions.

Search.

Progressive enhancement.

Respect reduced motion.

Everything should function without JavaScript.

---

# Performance

Mobile-first.

Target Lighthouse:

Performance: 95+

Accessibility: 100

Best Practices: 100

SEO: 100

Avoid layout shifts.

Lazy load media.

Pause videos offscreen.

Respect bandwidth.

---

# SEO

Semantic HTML.

Structured data.

Open Graph tags.

Canonical URLs.

Static pages preferred.

Fast page loads.

Readable URLs.

---

# Accessibility

Keyboard navigation.

Visible focus states.

Reduced motion support.

Proper contrast.

ARIA only when necessary.

Use native elements first.

Accessibility is not optional.

---

# Deployment

GitHub

↓

Cloudflare Pages

↓

Cloudflare R2

↓

Global CDN

No server required unless future features demand it.

---

# Guiding Rule

The architecture exists to support a world.

The world does not exist to justify architecture.

When uncertain, choose the simpler solution.
