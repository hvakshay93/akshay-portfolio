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
