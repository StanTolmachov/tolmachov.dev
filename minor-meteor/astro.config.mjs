import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tolmachov.dev',
  integrations: [sitemap({ lastmod: new Date() })],
  build: {
    inlineStylesheets: 'always',
  },
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
