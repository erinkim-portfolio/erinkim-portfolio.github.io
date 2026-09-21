# Erin Kim | Business Intelligence & Analytics Portfolio

Source code for Erin Kim's business intelligence and analytics portfolio.

## Stack

- Next.js 16
- React 19
- TypeScript
- Lucide React
- Static export for GitHub Pages

## Local development

Requires Node.js 22.

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
```

Next.js writes the static site to `out/`.

## GitHub Pages deployment

This repository includes `.github/workflows/deploy-pages.yml`. A push to `main` installs dependencies, builds the static export, and deploys the `out/` directory to GitHub Pages.

This copy is configured for a GitHub **user site** repository named exactly:

`YOUR-GITHUB-USERNAME.github.io`

That publishes the portfolio at the root URL `https://YOUR-GITHUB-USERNAME.github.io/`, which matches the site's existing root-relative routes and image paths.

After uploading the project, open the repository on GitHub and go to **Settings > Pages**. Under **Build and deployment**, select **GitHub Actions** if it is not already selected.

## Notes

- The original ChatGPT Sites / Cloudflare scaffolding has been removed.
- Portfolio images are stored locally in `public/images/`.
- No database is required.
- The site's client-side animations and interactions remain part of the React application and work with static hosting.
