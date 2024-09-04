import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import sanity from '@sanity/astro';

import react from '@astrojs/react';

import { loadEnv } from "vite";
const { NODE_ENV, PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

export default defineConfig({
  site: NODE_ENV === 'development' ? 'http://locahost:4321' : 'https://jezpoz.netlify.app',
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: "2024-09-03",
      studioBasePath: '/sanity/studio',
      stega: {
        studioUrl: '/sanity/studio'
      }
    }),
    react(),
  ],
  output: 'hybrid',
  adapter: netlify(),
});
