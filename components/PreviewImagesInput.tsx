import React, {useMemo} from 'react'
import {useFormValue, useClient, set} from 'sanity'
import type {ArrayOfObjectsInputProps} from 'sanity'
import {Stack, Grid, Card, Text} from '@sanity/ui'
import {nanoid} from 'nanoid'

function buildImageUrl(assetRef: string, projectId: string, dataset: string): string {
  // assetRef format: "image-{hexId}-{WxH}-{ext}"
  const withoutPrefix = assetRef.replace('image-', '')
  const parts = withoutPrefix.split('-')
  const ext = parts.pop()
  const dims = parts.pop()
  const id = parts.join('-')
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dims}.${ext}?w=150&h=150&fit=crop`
}

interface DocImage {
  _key: string
  _label: string
  image: {asset: {_ref: string}}
  caption?: string
  altText?: string
}

export default function PreviewImagesInput(props: ArrayOfObjectsInputProps) {
  const {value = [], onChange, renderDefault} = props
  const client = useClient({apiVersion: '2024-01-01'})
  const {projectId, dataset} = client.config()

  const mainImage = useFormValue(['mainImage']) as any
  const gallery = useFormValue(['gallery']) as any[] | undefined

  const docImages = useMemo<DocImage[]>(() => {
    const images: DocImage[] = []

    if (mainImage?.image?.asset?._ref) {
      images.push({
        _key: '__mainImage',
        _label: 'Main Image',
        image: mainImage.image,
        caption: mainImage.caption,
        altText: mainImage.altText,
      })
    }

    if (gallery) {
      for (const item of gallery) {
        if (
          (item._type === 'oneImage' || item._type === 'oneImageInset') &&
          item.image?.asset?._ref
        ) {
          images.push({
            _key: item._key,
            _label: item._type === 'oneImageInset' ? 'Inset' : 'Full Width',
            image: item.image,
            caption: item.caption,
            altText: item.altText,
          })
        } else if (item._type === 'twoImages') {
          if (item.firstImage?.image?.asset?._ref) {
            images.push({
              _key: item._key + '_a',
              _label: 'Two Images (Left)',
              image: item.firstImage.image,
              caption: item.firstImage.caption,
              altText: item.firstImage.altText,
            })
          }
          if (item.secondImage?.image?.asset?._ref) {
            images.push({
              _key: item._key + '_b',
              _label: 'Two Images (Right)',
              image: item.secondImage.image,
              caption: item.secondImage.caption,
              altText: item.secondImage.altText,
            })
          }
        }
      }
    }

    return images
  }, [mainImage, gallery])

  const isSelected = (img: DocImage) =>
    (value as any[]).some((v: any) => v.image?.asset?._ref === img.image.asset._ref)

  const toggleImage = (img: DocImage) => {
    if (isSelected(img)) {
      const next = (value as any[]).filter(
        (v: any) => v.image?.asset?._ref !== img.image.asset._ref,
      )
      onChange(set(next))
    } else {
      const newItem: any = {
        _type: 'customImage',
        _key: nanoid(),
        image: img.image,
      }
      if (img.caption) newItem.caption = img.caption
      if (img.altText) newItem.altText = img.altText
      onChange(set([...(value as any[]), newItem]))
    }
  }

  return (
    <Stack space={4}>
      {docImages.length > 0 && (
        <Stack space={2}>
          <Text size={1} muted>
            Select from this document
          </Text>
          <Grid columns={5} gap={2}>
            {docImages.map((img) => {
              const selected = isSelected(img)
              const url = buildImageUrl(img.image.asset._ref, projectId!, dataset!)
              return (
                <Card
                  key={img._key}
                  padding={1}
                  radius={2}
                  tone={selected ? 'primary' : 'default'}
                  style={{
                    cursor: 'pointer',
                    outline: selected
                      ? '2px solid var(--card-focus-ring-color)'
                      : '2px solid transparent',
                  }}
                  onClick={() => toggleImage(img)}
                >
                  <img
                    src={url}
                    alt={img.altText || img._label}
                    style={{
                      width: '100%',
                      aspectRatio: '1',
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: 2,
                    }}
                  />
                </Card>
              )
            })}
          </Grid>
        </Stack>
      )}
      <Stack space={2}>
        <Text size={1} muted>
          Or upload new images
        </Text>
        {renderDefault(props)}
      </Stack>
    </Stack>
  )
}
