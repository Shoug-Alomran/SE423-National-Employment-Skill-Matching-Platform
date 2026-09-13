import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // The dev server runs at "/", production builds use the GitHub Pages subpath.
  base: command === 'serve' ? '/' : normalizeBase(process.env.BASE_PATH),
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
}));
