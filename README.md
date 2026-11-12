# MARS website

The website for MARS, an open builder community for students, researchers, engineers, and makers building Amsterdam's robotics layer.

Live at **[marsrobotics.eu](https://www.marsrobotics.eu)**

## Stack

- Next.js 16 (App Router), pages prerendered as static HTML
- React 19 + TypeScript (strict)
- Plain CSS (`app/globals.css`)
- Hosted on Vercel

## Run it locally

Needs Node 20.9 or newer.

```bash
npm install
npm run dev        # dev server at http://localhost:3000
npm run build      # production build (also type checks)
npm run start      # serve the production build locally
npm run typecheck  # type check only
```

## Project layout

```
app/
  layout.tsx            html shell, font, SEO and social card metadata
  page.tsx              home page, section order
  globals.css           all styles
components/             one file per section: Nav, Hero, Features, UseCases,
                        HowItWorks, About, Team, Benefits, FAQ, CTABanner, Footer
  Reveal.tsx            scroll reveal animation
public/                 static files served as-is
  assets/images/        logos, backgrounds, team photos
```

The home page is a single scroll. To add, remove, or reorder a section, edit `app/page.tsx`.
To add a new page (for example `/events`), create `app/events/page.tsx`.

Components are server-rendered by default. Only ones that need browser state (`Nav`, `Hero`, `FAQ`, `UseCases`, `Reveal`) start with `'use client'`.

## Common edits

- **Text on a section:** open the matching file in `components/`.
- **Team members:** `components/Team.jsx`, photos go in `public/assets/images/`.
- **Colors, fonts, spacing:** `app/globals.css`.
- **Images:** put them in `public/assets/images/` and reference them as `/assets/images/<file>`.

## Deployment

Vercel deploys this repo automatically.

- Push to `master` deploys to production at [marsrobotics.eu](https://www.marsrobotics.eu) and [www.marsrobotics.eu](https://www.marsrobotics.eu).
- Every other branch and pull request gets its own preview URL.

`vercel.json` pins the framework to Next.js, so no dashboard build settings are needed.

## Contributing

1. Create a branch off `master`.
2. Make your change and check it with `npm run dev`.
3. Open a pull request and share the preview link with the team.
