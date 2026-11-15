# Akshay Ranganath H V — Portfolio

A responsive Cloud & DevOps Engineer portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to GitHub Pages

1. Create a GitHub repository (for example, `akshay-portfolio`) under `hvakshay93`.
2. Push this project to the repository's `main` branch.
3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds the site and deploys `dist/` automatically after each push.

The Vite base path is set to `./`, so assets work on both user/organization and project GitHub Pages URLs.

## Personalize before publishing

- Review the project descriptions and replace any details that don't accurately reflect your contribution.
- Add your actual employment dates, certifications, project links and profile photo if desired.
- Add a public GitHub repository URL to a project only after confirming that it is safe to share.
- The contact links use the email and LinkedIn profile supplied for this portfolio.

## Tech stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons
- GitHub Actions + GitHub Pages

## Personal portrait effect

The supplied profile photo is stored at `public/akshay-profile.jpg`. The hero includes a canvas-based particle swarm reconstruction animation. Use the **REBUILD WITH SWARM** control to replay it.

## Multiplayer cursor swarm effect

The homepage runs a short page-rebuild intro on first load (unless reduced motion is enabled). Multiple labelled cursor agents sweep across a tiled mask, clearing tiles to reveal the actual webpage beneath. Use **Watch swarm rebuild** in the hero section to replay the effect. This is a local visual simulation; it does not represent real multiplayer users or live network collaboration.

## Multiplayer cursor swarm tour

The homepage runs a roughly 50-second visual rebuild tour. It starts on a dark canvas, then coloured cursor agents reveal actual DOM elements in sequence while the page scrolls from the hero through the contact section. The bottom toolbar shows the active agent count and completed layer count. Visitors can switch to 2× speed, close the tour, replay it, or choose Go live when it finishes. This is a client-side visual simulation, not a real multi-user session or an AI-driven website reconstruction service.
