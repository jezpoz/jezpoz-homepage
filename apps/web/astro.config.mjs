import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import sanity from '@sanity/astro';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://jezpoz.netlify.app',
  integrations: [
    sanity({
      projectId: 'rz9y3u62',
      dataset: 'production',
      useCdn: false,
      apiVersion: "2024-09-03",
    }),
    react(),
  ],
  output: 'hybrid',
  adapter: netlify(),
});
