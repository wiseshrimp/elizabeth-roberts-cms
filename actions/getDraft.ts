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
      } else if (props.type === 'project') {
        url = `${base}/projects/${props.published?.slug?.current}`
      } else if (props.type === 'jobPage') {
        url = `${base}/jobs/${props.published?.slug?.current}`
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
          const draftId = `drafts.${props.id}`

          // Check if a draft already exists
          const existingDraft = await client.fetch(`*[_id == $draftId][0]`, {draftId})

          // If no draft exists, create one from the published version before deleting
          if (!existingDraft && props.published) {
            const draftDoc = {
              ...props.published,
              _id: draftId,
            }
            await client.createOrReplace(draftDoc)
          }

          // Now delete the published version
          await client.delete(props.id)
        } catch (error: any) {
          console.error('Error unpublishing document:', error)

          // Check if the error is due to references
          const errorMessage = error?.message || error?.toString() || ''
          if (errorMessage.includes('references to it from')) {
            // Extract the referring document ID from the error message
            const match = errorMessage.match(/references to it from "([^"]+)"/)
            const referringDocId = match ? match[1] : null

            if (referringDocId) {
              // Fetch the referring document to show more context
              const referringDoc = await client.fetch(
                `*[_id == $id][0]{ _id, _type, title, name }`,
                { id: referringDocId }
              )
              const label = referringDoc?.title || referringDoc?.name || referringDocId
              const type = referringDoc?._type ? ` (type: ${referringDoc._type})` : ''
              alert(
                `Cannot unpublish: this document is referenced by "${label}"${type}.\n\n` +
                  `Document ID: ${referringDocId}\n\n` +
                  `Open that document in the Studio, remove the reference, then try unpublishing again.`,
              )
            } else {
              alert(
                `Cannot unpublish this document because it is referenced by another document.\n\n` +
                  `Remove the reference first, then try again.`,
              )
            }
          } else {
            alert('Failed to unpublish document. Please try again.')
          }
        }
      }
    },
  }
}
