import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Base path for GitHub Pages.
 *
 * A project site is served from https://<user>.github.io/<repo-name>/, so every
 * asset URL and route must be prefixed with "/<repo-name>/".
 *
 * - In GitHub Actions, BASE_PATH is set automatically by the deploy workflow
 *   (from actions/configure-pages), so renaming the repo needs no code change.
 * - For local production builds, DEFAULT_BASE is used.
 * - For a custom domain or a <user>.github.io repository, set BASE_PATH="/".
 */
const REPO_NAME = 'SE423-National-Employment-Skill-Matching-Platform';
const DEFAULT_BASE = `/${REPO_NAME}/`;

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
