# Leif Janzik – Personal CV/Portfolio Website

## Overview
A modern personal CV/portfolio website for Leif Janzik (janzik.me). All content is in German. Design is inspired by voigt.ag with a light, professional aesthetic and dark muted blue accent color.

## Architecture
- **Frontend**: React + Vite + TailwindCSS + shadcn/ui + framer-motion
- **Backend**: Express.js (Node.js)
- **Database**: PostgreSQL via Drizzle ORM
- **Blog Engine**: Markdown-based (Jekyll-style) — posts stored as `.md` files in `content/blog/`

## Key Sections
- **Hero**: Name, tagline ("Menschlich führen, beschleunigt durch KI"), CTAs
- **About (Über mich)**: Profile photo, bio, key stats
- **Experience (Erfahrung)**: Timeline from DB
- **Projects/Achievements (Erfolge)**: Cards from DB
- **Certifications (Zertifizierungen)**: Grid of certifications
- **Skills (Kernkompetenzen)**: Pill tags from DB
- **Blog (Aktuelle Insights)**: Markdown-based blog with individual post pages
- **Contact (Kontakt)**: Contact form saving to DB

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
- `server/blog.ts` reads and parses markdown files using `gray-matter` + `marked`
- API endpoints: `GET /api/blog` (list) and `GET /api/blog/:slug` (single post)
- Frontend: Blog listing on homepage links to `/blog/:slug` subpages

## Color Theme
- Light background (soft grey-blue)
- Deep navy foreground text
- Darker muted blue primary accent (`221 45% 25%`)
- White cards with subtle borders

## Fonts
- Body: DM Sans
- Display/Headings: Outfit

## Database Tables
- `experiences` — Professional timeline entries
- `skills` — Competency tags with proficiency
- `projects` — Achievement cards with results
- `certifications` — Professional certifications
- `blog_posts` — (schema exists but blog uses markdown files instead)
- `messages` — Contact form submissions

## Important Constraints
- All text must be in German
- No "JANZIK.ME" branding — use "LEIF JANZIK" as plain text
- CV-focused, not a freelancer/hire-me site
- Profile photo: `client/public/images/profile.jpg`
