// GitHub Pages has no server-side routing, so this script runs after `vite build`.
//
// 1. For every page route it writes <route>.html (a copy of index.html).
//    GitHub Pages serves /planning from planning.html with HTTP 200, so search
//    engines can index each page.
// 2. It copies index.html to 404.html so unknown URLs still load the app,
//    which then shows the "Page not found" view.
//
// Keep ROUTES in sync with src/App.jsx and public/sitemap.xml.
import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROUTES = ['project', 'methodology-risk', 'planning', 'stakeholders-metrics', 'team'];

const dist = resolve(process.cwd(), 'dist');
const index = resolve(dist, 'index.html');

if (!existsSync(index)) {
  console.error('spa-fallback: dist/index.html not found. Did the build fail?');
  process.exit(1);
}

for (const route of ROUTES) {
  copyFileSync(index, resolve(dist, `${route}.html`));
}
copyFileSync(index, resolve(dist, '404.html'));
// Disable Jekyll processing on GitHub Pages.
writeFileSync(resolve(dist, '.nojekyll'), '');
console.log(`spa-fallback: created ${ROUTES.length} route pages, 404.html and .nojekyll`);
