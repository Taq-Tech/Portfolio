# TaqTech — Agency Portfolio

Strategy-driven software agency website for TaqTech agency. Built with Angular 21 and Tailwind CSS v4.

## Stack

- **Angular 21** (standalone components, signals)
- **Tailwind CSS v4** (`@import "tailwindcss"`)
- **TypeScript 5.9**
- **Vitest** for tests
- Fonts: Clash Display + General Sans (via Fontshare)

## Sections

Navbar · Hero · About · Core Services · Projects · Testimonials · CTA Banner · Footer

## Getting started

```bash
npm install
npm start
```

Dev server runs at `http://localhost:4200`.

## Scripts

| Command | Purpose |
|---|---|
| `npm start` | Dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run watch` | Dev build in watch mode |
| `npm test` | Run Vitest |

## Project structure

```
src/
  app/
    components/
      navbar/  hero/  about/  services/
      projects/  testimonials/  cta-banner/  footer/
    app.ts        # root component, composes sections
  styles.css      # global tokens + Tailwind entry
  index.html
public/           # static assets (served from /)
```

Each section is a self-contained standalone component with its own `.ts` / `.html` / `.css`.

## Design system

- Dark theme (`#0a0a1a` background)
- Gradient accent: `#9723ea → #1797ff` (purple → blue)
- Glassmorphism on elevated surfaces (`rgba` + `backdrop-filter: blur`)
- CSS custom properties in `src/styles.css`:
  - `--accent-purple`, `--accent-blue`
  - `--btn-border`, `--btn-grad-start`, `--btn-grad-end`


## Deployment

Pushes to the default branch deploy automatically via Vercel. Static assets live in `public/` and are served from the site root (`/hero-bg.png`, etc.).

## License

See [LICENSE](./LICENSE).


