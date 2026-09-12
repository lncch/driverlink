import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset paths, so the build does not care what the repo is called.
// An absolute base broke once already when the repo was renamed; the deck uses
// hash routing, so nothing depends on the path prefix.
export default defineConfig({
  base: './',
  plugins: [react()],
});
