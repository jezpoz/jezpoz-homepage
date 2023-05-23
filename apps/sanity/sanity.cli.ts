/* eslint-disable turbo/no-undeclared-env-vars */

import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.VITE_STUDIO_SANITY_PROJECT_ID || 'ai3szu7q',
    dataset: process.env.VITE_STUDIO_SANITY_DATASET || 'production',
  },
})
