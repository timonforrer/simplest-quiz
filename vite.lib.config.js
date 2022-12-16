import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  build: {
    lib: {
      entry: './src/main.js',
      name: 'QSingle'
    }
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      }
    })
  ]
});
