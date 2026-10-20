import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

/**
 * Base path for GitHub Pages.
 *
 * The site is served from the custom domain
 * https://software-project-management.shoug-tech.com/, so the base is "/".
 *
 * If you ever remove the custom domain and serve from
 * https://<user>.github.io/<repo-name>/ instead, build with
 * BASE_PATH="/<repo-name>/" (see README and .github/workflows/deploy.yml).
 */
const DEFAULT_BASE = '/';

function normalizeBase(value) {
  if (!value) return DEFAULT_BASE;
  let base = value.trim();
  if (!base.startsWith('/')) base = `/${base}`;
  if (!base.endsWith('/')) base = `${base}/`;
  return base;
}

/**
 * Standalone HTML pages, served at clean URLs such as /presentation.
 * GitHub Pages maps /presentation to presentation.html on its own; this plugin
 * does the same for `npm run dev` and `npm run preview`.
 */
const STANDALONE_PAGES = ['presentation', 'project-task-distribution'];

function cleanUrls() {
  const rewrite = (req, _res, next) => {
    const [path, query = ''] = req.url.split('?');
    const page = path.replace(/^\/|\/$/g, '');
    if (STANDALONE_PAGES.includes(page)) req.url = `/${page}.html${query ? `?${query}` : ''}`;
    next();
  };
  return {
    name: 'clean-urls',
    configureServer(server) {
      server.middlewares.use(rewrite);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite);
    },
  };
}

export default defineConfig(({ command }) => ({
  plugins: [react(), cleanUrls()],
  // The dev server runs at "/", production builds use the GitHub Pages subpath.
  base: command === 'serve' ? '/' : normalizeBase(process.env.BASE_PATH),
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        taskDistribution: resolve(__dirname, 'project-task-distribution.html'),
        presentation: resolve(__dirname, 'presentation.html'),
      },
    },
  },
}));
