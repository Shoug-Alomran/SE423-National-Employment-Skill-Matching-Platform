// GitHub Pages has no server-side routing. When someone opens or refreshes a
// deep link such as /<repo>/planning, Pages serves 404.html. Copying the built
// index.html to 404.html lets the React app boot and render the right route.
import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve(process.cwd(), 'dist');
const index = resolve(dist, 'index.html');

if (!existsSync(index)) {
  console.error('spa-fallback: dist/index.html not found. Did the build fail?');
  process.exit(1);
}

copyFileSync(index, resolve(dist, '404.html'));
// Disable Jekyll processing on GitHub Pages.
writeFileSync(resolve(dist, '.nojekyll'), '');
console.log('spa-fallback: created dist/404.html and dist/.nojekyll');
