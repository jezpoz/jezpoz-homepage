import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import sanity from '@sanity/astro';

import react from '@astrojs/react';
import { loadEnv } from "vite";
import { resolve } from 'path';

const {
  SANITY_PROJECT_ID,
  SANITY_DATASET_NAME,
} = loadEnv(process.env.NODE_ENV, resolve(process.cwd(), '..', '..'), 'SANITY');

export default defineConfig({
  site: 'https://jezpoz-astro.netlify.app',
  integrations: [
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET_NAME,
      useCdn: false,
      apiVersion: "2024-09-03",
    }),
    react(),
  ],
  output: 'hybrid',
  adapter: netlify(),
});
