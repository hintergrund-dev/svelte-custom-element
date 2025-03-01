import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'hgCms',
      fileName: () => `hg-cms.js`,
      formats: ['iife'],
    },
  },
  plugins: [svelte()],
});
