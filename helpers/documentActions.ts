import { DocumentActionProps } from 'sanity'

export const viewDraft = (props: DocumentActionProps) => {
  const { draft } = props
  console.log(props)

  if (!draft) return null

  const slug = draft?.slug?.current
  console.log(slug)
  if (!slug) return null

  const previewUrl = `https://your-frontend-site.com/api/preview?slug=${slug}`

  return {
    name: 'View Draft',
    label: 'View Draft',
    icon: () => '🔍', // or use an actual icon
    onHandle: () => {
      window.open(previewUrl, '_blank')
    }
  }
}
