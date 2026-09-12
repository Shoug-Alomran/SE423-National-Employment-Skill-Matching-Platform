# National-Employment-Skill-Matching-Platform

SE423 project for planning a national platform that connects job seekers with employment opportunities through intelligent skill-based matching, career guidance, and workforce analytics.

This repository contains the project website: a static React + Vite site deployed to **GitHub Pages** with **GitHub Actions**.

**Live site:** https://shoug-alomran.github.io/SE423-National-Employment-Skill-Matching-Platform/

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/project` | Project Overview (Artifact 01) |
| `/methodology-risk` | Methodology & Risk (Artifact 02) |
| `/planning` | Estimation & Scheduling (Artifact 03) |
| `/stakeholders-metrics` | Stakeholders, Communication & Metrics (Artifact 04) |
| `/team` | Team |

## Tech stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [React Router 6](https://reactrouter.com/) for client-side routing
- [Tailwind CSS 3](https://tailwindcss.com/) for styling
- [Phosphor Icons](https://phosphoricons.com/) (`@phosphor-icons/react`)

No backend or server runtime is needed.

## 1. Install dependencies

Requires **Node.js 18+** (Node 20 recommended).

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173/). The dev server runs at `/`.

## 3. Build

```bash
npm run build
```

The production site is written to `dist/`. The build also:

- prefixes every asset and route with the GitHub Pages base path (`/SE423-National-Employment-Skill-Matching-Platform/`)
- copies `index.html` to `404.html`, so deep links and page refreshes (for example `/planning`) still load the app on GitHub Pages
- adds `.nojekyll`

To preview the production build locally:

```bash
npm run preview
```

Then open http://localhost:4173/SE423-National-Employment-Skill-Matching-Platform/.

## 4. Enable GitHub Pages with GitHub Actions

1. Push this repository to GitHub, on the `main` branch.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push a commit to `main`, or run the workflow manually from **Actions → Deploy to GitHub Pages → Run workflow**.
5. When the workflow finishes, the site is live at `https://<username>.github.io/<repository-name>/`. The URL is also shown on the workflow run and in **Settings → Pages**.

The workflow is in [.github/workflows/deploy.yml](.github/workflows/deploy.yml). It installs dependencies with `npm ci`, builds the site and deploys `dist/` using the official Pages actions.

> If the first run fails at **Configure GitHub Pages**, Pages has not been set to "GitHub Actions" yet. Complete step 3, then re-run the workflow.

## 5. Changing the repository name or base path

- **Deployments through GitHub Actions:** no change is needed. The workflow reads the correct base path from `actions/configure-pages` and passes it to the build as `BASE_PATH`. This also covers renamed repositories and custom domains.
- **Local production builds (`npm run build` / `npm run preview`):** the default comes from `REPO_NAME` in [vite.config.js](vite.config.js). Update it if you rename the repository, or override it per build:

  ```bash
  BASE_PATH=/my-other-repo/ npm run build
  BASE_PATH=/ npm run build   # custom domain or <username>.github.io repository
  ```

- **Repository link** shown in the footer and on the Team page: change `repoUrl` in [src/config.js](src/config.js).

## Editing content

Page content is kept in data files, separate from the layout:

| File | Content |
| --- | --- |
| [src/config.js](src/config.js) | Site name, course, repository URL, navigation |
| [src/data/methodologyRisk.js](src/data/methodologyRisk.js) | Methodology comparison, selected methodology, risk register. The risk counts and the risk matrix are calculated from this file. |
| [src/data/planning.js](src/data/planning.js) | WBS, estimates, assumptions, sprints, Gantt rows, milestones |
| [src/data/stakeholders.js](src/data/stakeholders.js) | Stakeholder analysis, power–interest matrix, communication plan, metrics |
| [src/data/team.js](src/data/team.js) | Team members, roles, GitHub/LinkedIn links (use `''` to hide an icon), tools |

Home and Project page text lives directly in [src/pages/Home.jsx](src/pages/Home.jsx) and [src/pages/Project.jsx](src/pages/Project.jsx).

## Project structure

```
.github/workflows/deploy.yml   GitHub Pages build and deploy
public/                        Static files copied as-is (favicon)
scripts/spa-fallback.js        Creates 404.html for deep-link support
src/
  components/                  Layout, Navbar, Footer, shared UI
  data/                        Editable page content
  pages/                       One component per route
  config.js                    Site-wide settings
  App.jsx                      Routes
  main.jsx                     Entry point (router basename)
index.html
vite.config.js                 Base path configuration
tailwind.config.js             Design tokens (Saudi green, charcoal)
```
