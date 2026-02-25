# Leif Janzik – Personal CV/Portfolio Website

## Overview
A modern personal CV/portfolio website for Leif Janzik (janzik.me). All content is in German. Design is inspired by voigt.ag with a light, professional aesthetic and dark muted blue accent color.

## Architecture
- **Type**: Fully static site (no backend, no database)
- **Frontend**: React + Vite + TailwindCSS + shadcn/ui + framer-motion
- **Data**: All CV data hardcoded in `client/src/data/cv.ts`
- **Blog**: Markdown files in `content/blog/` → pre-processed to JSON at build time
- **Contact Form**: Posts to external Cloudflare Worker (URL via `VITE_CONTACT_API_URL` env var)
- **Hosting Target**: Cloudflare Pages (static deploy from `dist/public/`)

## Key Sections
- **Hero**: Name, tagline ("Menschlich führen, beschleunigt durch KI"), CTAs
- **About (Über mich)**: Profile photo, bio, key stats
- **Experience (Erfahrung)**: Timeline from `cv.ts`
- **Projects/Achievements (Erfolge)**: Cards from `cv.ts`
- **Certifications (Zertifizierungen)**: Grid from `cv.ts`
- **Skills (Kernkompetenzen)**: Pill tags from `cv.ts`
- **Blog (Aktuelle Insights)**: Markdown-based blog with individual post pages
- **Contact (Kontakt)**: Contact form → Cloudflare Worker

## Blog System
Blog posts are stored as Markdown files with YAML frontmatter in `content/blog/`.

### Adding a new blog post
Create a `.md` file in `content/blog/` with this structure:
```markdown
---
title: "Your Post Title"
date: "2024-02-20"
excerpt: "A short summary for the listing page."
---

Your markdown content here...
```

The slug is derived from the filename (e.g., `my-post.md` → `/blog/my-post`).

### How it works
- `scripts/generate-blog.ts` reads markdown files using `gray-matter` + `marked` and outputs `client/src/data/blog-posts.json`
- This JSON is imported directly by React components (no API calls)
- Build script runs blog generation before Vite build

## Build & Deploy

### Development
```bash
npm run dev
```
Runs Vite dev server directly (no Express). Blog JSON is generated on startup.

### Production Build
```bash
npm run build
```
1. Generates blog JSON from markdown
2. Runs Vite build
3. Output: `dist/public/` (ready for Cloudflare Pages)

### Deploy to Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist/public`
- SPA routing handled by `_redirects` file

## Contact Form Configuration
Set `VITE_CONTACT_API_URL` environment variable to your Cloudflare Worker endpoint URL.
If not set, falls back to `/api/contact`.

## Color Theme
- Light background (soft grey-blue)
- Deep navy foreground text
- Darker muted blue primary accent (`221 45% 25%`)
- White cards with subtle borders

## Fonts
- Body: DM Sans
- Display/Headings: Outfit

## Important Files
- `client/src/data/cv.ts` — All CV data (experiences, skills, projects, certifications)
- `client/src/data/blog-posts.json` — Auto-generated blog data (do not edit manually)
- `scripts/generate-blog.ts` — Markdown → JSON blog processor
- `content/blog/*.md` — Blog post source files
- `client/public/_redirects` — Cloudflare Pages SPA routing
- `script/build.ts` — Production build script

## Important Constraints
- All text must be in German
- No "JANZIK.ME" branding — use "LEIF JANZIK" as plain text
- CV-focused, not a freelancer/hire-me site
- Profile photo: `client/public/images/profile.jpg`
- No Express server, no PostgreSQL, no API routes — fully static
