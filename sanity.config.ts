import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'
import { presentationTool } from 'sanity/presentation'

export default defineConfig({
  name: 'default',
  title: 'jezpoz',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: `${location.origin}/${location.pathname}`,
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
