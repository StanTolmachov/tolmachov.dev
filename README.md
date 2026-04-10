# tolmachov.dev

Personal portfolio website for **Stanislav Tolmachov** — Backend Go Engineer & Technical Leader.

🌐 **Live:** [https://tolmachov.dev](https://tolmachov.dev)

---

## Stack

- **[Astro 6](https://astro.build/)** — static site generator
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first CSS via `@tailwindcss/vite`
- **TypeScript** — typed data layer
- **Canvas API** — animated neural-network background
- **GitHub Actions** — automated CI/CD deploy to GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Footer.astro        # Contact section + social links
│   ├── sections/
│   │   ├── Hero.astro           # Landing screen with CTA
│   │   ├── About.astro          # Bento grid — skills & bio
│   │   ├── Projects.astro       # Featured engineering projects
│   │   └── Experience.astro     # Career timeline
│   └── ui/
│       ├── ProjectCard.astro    # Project card with hover effects
│       └── AnimatedBackground.astro  # Canvas particle animation
├── data/
│   ├── projects.ts              # Typed project data
│   └── experience.ts            # Typed experience data
├── layouts/
│   └── BaseLayout.astro         # HTML shell + SEO meta tags
├── pages/
│   └── index.astro              # Page composition
└── styles/
    └── global.css               # Design system: CSS variables, base styles
public/
├── CNAME                        # Custom domain: tolmachov.dev
├── robots.txt
└── favicon.svg
.github/
└── workflows/
    └── deploy.yml               # GitHub Actions → GitHub Pages
```

## Local Development

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build

```bash
npm run build     # Output: dist/
npm run preview   # Preview built site locally
```

## Deploy

Deployment is fully automated via GitHub Actions on every push to `main`.

To set up:
1. Push this repo to GitHub
2. Go to **Settings → Pages → Source: GitHub Actions**
3. Every push to `main` triggers build and deploy automatically

Custom domain is configured via `public/CNAME` → `tolmachov.dev`.

## Contact

- **Email:** [stan@tolmachov.dev](mailto:stan@tolmachov.dev)
- **GitHub:** [github.com/StanTolmachov](https://github.com/StanTolmachov)
- **LinkedIn:** [linkedin.com/in/stan-tolmachov](https://www.linkedin.com/in/stan-tolmachov/)
- **Telegram:** [t.me/StasTolmachov](https://t.me/StasTolmachov)
