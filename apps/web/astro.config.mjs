import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://jezpoz-astro.netlify.app',
  integrations: [],
  output: 'server',
  adapter: netlify(),
});
