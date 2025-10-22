import { defineType, defineField } from 'sanity'
import TagInput from '../../components/TagInput'
import slug from '../reusables/slug'

const objectItem = defineType({
  name: 'objectItem',
  title: 'Object',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'customImage'
    },
    slug,
    {
      name: 'shortDescription',
      type: 'textEditor',
      description: 'Description that shows up in the objects gallery page. If left empty, description will default to the longer one below.'
    },
    {
      name: 'description',
      type: 'textEditor'
    },
    {
      name: 'gallery',
      type: 'array',
      of: [
        {
            type: 'customImage',
            name: 'oneImage',
            title: 'One Image (Full Width)',
        },
        {
          type: 'object',
          name: 'twoImages',
          fields: [
            {
              type: 'customImage',
              name: 'firstImage'
            },
            {
              type: 'customImage',
              name: 'secondImage'
            },
          ],
          preview: {
            select: {
              image: 'firstImage.image',
              secondImage: 'secondImage.image'
            },
            prepare: (data) => {
              return {
                title: 'Two Images',
                media: data.image ? data.image : data.secondImage
              }
            }
          }
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'mainImage.image'
    },
    prepare: (preview) => {
      return {
        title: preview.title,
        media: preview.image
      }
    }
  }
})

export default objectItem
