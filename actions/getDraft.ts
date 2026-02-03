// actions/previewDraft.ts
import type {DocumentActionComponent} from 'sanity'
// optional icon
import {EyeOpenIcon, EarthGlobeIcon} from '@sanity/icons'
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
    process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://era-cms.netlify.app'

  if (!hasPublished) {
    return null
  }

  return {
    label: 'Preview Published',
    icon: EarthGlobeIcon,
    title: 'Open the published version on the production site',
    onHandle: () => {
      const entry = SLUGS[props.type as keyof typeof SLUGS]
      const url = `${base}/${entry?.type}`
      window.open(url, '_blank', 'noopener,noreferrer')
      props.onComplete()
    },
  }
}
