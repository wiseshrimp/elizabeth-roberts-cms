import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import types from './schemas'
import deskStructure from './deskStructure'
import getPreviewUrl from './helpers/getPreviewUrl'

const {theme} = (await import(
  'https://themer.sanity.build/api/hues?preset=tw-cyan&default=7a7a7a;darkest:1c1b1d&primary=3f90a6&transparent=darkest:4c4f57'
)) as {theme: import('sanity').StudioTheme}

export default defineConfig({
  name: 'default',
  title: 'Elizabeth Roberts',

  projectId: 'i9b4x4a0',
  dataset: 'production',

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
    actions: (prev: any, context: any) => {
      console.log(prev)
      return prev
      // prev = prev.map((original: any) => 
      //   original.action === 'publish' ? onPublish(original) : original
      // )
      // return context.schemaType === 'broadcastLayout' ? [...prev, BroadcastAudioPreview, BroadcastVideoPreview] : prev
    } 
  },

  schema: {
    types,
  },
  theme
})
