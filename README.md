# National-Employment-Skill-Matching-Platform

SE423 project for planning a national platform that connects job seekers with employment opportunities through intelligent skill-based matching, career guidance, and workforce analytics.

This repository contains the project website: a static React + Vite site deployed to **GitHub Pages** with **GitHub Actions**.

**Live site:** https://software-project-management.shoug-tech.com/

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

- serves assets and routes from `/`, the root of the custom domain
- copies `index.html` to `404.html`, so deep links and page refreshes (for example `/planning`) still load the app on GitHub Pages
- adds `.nojekyll`
- copies `public/CNAME`, `public/robots.txt` and `public/sitemap.xml` to the site root

To preview the production build locally:

```bash
npm run preview
```

Then open http://localhost:4173/.

## 4. Enable GitHub Pages with GitHub Actions

1. Push this repository to GitHub, on the `main` branch.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push a commit to `main`, or run the workflow manually from **Actions → Deploy to GitHub Pages → Run workflow**.
5. When the workflow finishes, the site is live at https://software-project-management.shoug-tech.com/.

### Custom domain

The domain is set in [public/CNAME](public/CNAME), which is deployed with every build, so GitHub Pages keeps the custom domain after each deploy.

1. At your DNS provider for `shoug-tech.com`, add a **CNAME** record:
   - Name / host: `software-project-management`
   - Value / target: `shoug-alomran.github.io`
2. In **Settings → Pages → Custom domain**, enter `software-project-management.shoug-tech.com` and save.
3. Once the DNS check passes, tick **Enforce HTTPS**. The certificate can take a little while to be issued.

The workflow is in [.github/workflows/deploy.yml](.github/workflows/deploy.yml). It installs dependencies with `npm ci`, builds the site and deploys `dist/` using the official Pages actions.

> If the first run fails at **Configure GitHub Pages**, Pages has not been set to "GitHub Actions" yet. Complete step 3, then re-run the workflow.

## 5. Changing the domain or base path

The site is served from the root (`/`) of the custom domain, so renaming the repository needs no code change.

**To change the domain,** update it in all of these places:

- [public/CNAME](public/CNAME)
- [public/robots.txt](public/robots.txt), the `Sitemap:` line
- [public/sitemap.xml](public/sitemap.xml), every `<loc>`
- **Settings → Pages → Custom domain**, plus the DNS record

**To stop using a custom domain** and serve from `https://<username>.github.io/<repository-name>/` instead:

1. Delete `public/CNAME`.
2. In [.github/workflows/deploy.yml](.github/workflows/deploy.yml), set `BASE_PATH: ${{ steps.pages.outputs.base_path }}/`.
3. Update the URLs in `robots.txt` and `sitemap.xml`.
4. For local builds, run `BASE_PATH=/<repository-name>/ npm run build`.

**Repository link** shown in the footer and on the Team page: change `repoUrl` in [src/config.js](src/config.js).

### Sitemap and robots

[public/sitemap.xml](public/sitemap.xml) lists every page. When you add a route in [src/App.jsx](src/App.jsx), add a `<url>` entry for it too, and update `<lastmod>` when page content changes significantly. After the site is live, you can submit `https://software-project-management.shoug-tech.com/sitemap.xml` in Google Search Console.

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
public/                        Static files copied as-is (favicon, CNAME, robots.txt, sitemap.xml)
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
