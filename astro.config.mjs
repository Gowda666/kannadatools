import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Zero-cost static site build for Cloudflare Pages / any static host
  site: 'https://kannadatools.pages.dev',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

