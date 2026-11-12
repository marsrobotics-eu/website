# MARS website

The website for MARS, an open builder community for students, researchers, engineers, and makers building Amsterdam's robotics layer.

Live at **[marsrobotics.eu](https://www.marsrobotics.eu)**

## Stack

- React 18
- Vite 5
- Plain CSS (`src/index.css`)
- Hosted on Vercel

## Run it locally

Needs Node 18 or newer.

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Project layout

```
index.html              page shell, fonts, favicon
public/                 static files served as-is
  assets/images/        logos, backgrounds, team photos
src/
  main.jsx              entry point
  App.jsx               page order (one component per section)
  index.css             all styles
  hooks/useReveal.js    scroll reveal animation
  components/           Nav, Hero, Features, UseCases, HowItWorks,
                        About, Team, Benefits, FAQ, CTABanner, Footer
```

The page is a single scroll. To add, remove, or reorder a section, edit `src/App.jsx`.

## Common edits

- **Text on a section:** open the matching file in `src/components/`.
- **Team members:** `src/components/Team.jsx`, photos go in `public/assets/images/`.
- **Colors, fonts, spacing:** `src/index.css`.
- **Images:** put them in `public/assets/images/` and reference them as `/assets/images/<file>`.

## Deployment

Vercel deploys this repo automatically.

- Push to `master` deploys to production at [marsrobotics.eu](https://www.marsrobotics.eu) and [www.marsrobotics.eu](https://www.marsrobotics.eu).
- Every other branch and pull request gets its own preview URL.

Build settings (Vite preset): build command `npm run build`, output directory `dist`.

## Contributing

1. Create a branch off `master`.
2. Make your change and check it with `npm run dev`.
3. Open a pull request and share the preview link with the team.
