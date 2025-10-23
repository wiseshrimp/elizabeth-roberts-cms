import './style/studio.scss'

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import types from './schemas'
import deskStructure from './deskStructure'
import getPreviewUrl from './helpers/getPreviewUrl'
// sanity.config.ts
import { PreviewDraftAction } from './actions/getDraft'
import SLUGS from './constants/slugs'

const {theme} = (await import(
  'https://themer.sanity.build/api/hues?preset=tw-cyan&default=7a7a7a;darkest:1c1b1d&primary=3f90a6&transparent=darkest:4c4f57'
)) as {theme: import('sanity').StudioTheme}

export default defineConfig({
  name: 'default',
  title: 'Elizabeth Roberts',

  projectId: 'i9b4x4a0',
  dataset: 'production',
  basePath: '/',

  plugins: [
    visionTool(),
    structureTool({
      structure: S => deskStructure(S) as any,
    })
  ],

  document: {
    productionUrl: async (prev, context) => {
      return getPreviewUrl(context.document as any)
    },
    actions: (prev, context) => {
      // Insert PreviewDraftAction right before the publish action
      const out: typeof prev = []
      let inserted = false

      for (const action of prev) {
        if (!inserted && action.action === 'publish') {
          out.push(PreviewDraftAction)
          inserted = true
        }
        out.push(action)
      }

      // Only show for certain types? uncomment:
      // if (context.schemaType !== 'article') return prev

      if (!SLUGS[context?.schemaType as keyof typeof SLUGS]) {
        return prev
      }
      
      return out
    },
  },

  schema: {
    types,
  },
  theme
})
