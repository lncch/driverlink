import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Project page lives at https://<user>.github.io/driverlink/, so assets
// need that prefix. A custom domain later would change this to '/'.
export default defineConfig({
  base: '/driverlink/',
  plugins: [react()],
});
