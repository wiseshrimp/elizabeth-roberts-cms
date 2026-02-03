// actions/previewDraft.ts
import type {DocumentActionComponent} from 'sanity'
import {useClient} from 'sanity'
// optional icon
import {EyeOpenIcon, EarthGlobeIcon, RevertIcon} from '@sanity/icons'
import SLUGS from '../constants/slugs'

export const PreviewDraftAction: DocumentActionComponent = (props) => {
  const hasDraft = !!props.draft
  const base =
    process.env.NODE_ENV == 'development'
      ? 'http://localhost:3000'
      : 'https://elizabethroberts.netlify.app'

  if (!hasDraft) {
    return null
  }

  return {
    label: 'Preview Draft',
    icon: EyeOpenIcon,
    title: 'Open the draft on the production site',
    onHandle: () => {
      const entry = SLUGS[props.type as keyof typeof SLUGS]
      const url = `${base}/${entry?.type}${entry?.slug ? `${''}` : ''}?draft=drafts.${encodeURIComponent(props.id)}`
      window.open(url, '_blank', 'noopener,noreferrer')
      props.onComplete()
    },
  }
}

export const PreviewPublishedAction: DocumentActionComponent = (props) => {
  const hasPublished = !!props.published
  const base =
    process.env.NODE_ENV == 'development'
      ? 'http://localhost:3000'
      : 'https://elizabethroberts.netlify.app'

  if (!hasPublished) {
    return null
  }

  return {
    label: 'Preview Published',
    icon: EarthGlobeIcon,
    title: 'Open the published version on the production site',
    onHandle: () => {
      console.log(props)
      const entry = SLUGS[props.type as keyof typeof SLUGS]
      let url = `${base}/${entry?.type}`
      if (props.type === 'objectItem') {
        url = `${base}/objects/${props.published?.slug?.current}`
      }
      window.open(url, '_blank', 'noopener,noreferrer')
      props.onComplete()
    },
  }
}

export const UnpublishAction: DocumentActionComponent = (props) => {
  const hasPublished = !!props.published
  const client = useClient({apiVersion: '2024-01-01'})

  // Only show if there's a published version
  if (!hasPublished) {
    return null
  }

  return {
    label: 'Unpublish',
    icon: RevertIcon,
    title: 'Unpublish this document (remove from live site)',
    tone: 'critical',
    onHandle: async () => {
      const confirmed = window.confirm(
        'Are you sure you want to unpublish this document? It will be removed from the live site but kept as a draft.',
      )

      if (confirmed) {
        try {
          // Delete the published version (the document without the 'drafts.' prefix)
          await client.delete(props.id)
          // The draft version (drafts.{id}) will remain
        } catch (error) {
          console.error('Error unpublishing document:', error)
          alert('Failed to unpublish document. Please try again.')
        }
      }
    },
  }
}
