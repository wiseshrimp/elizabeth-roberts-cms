import { defineType, defineField } from 'sanity'
import TagInput from '../../components/TagInput'
import slug from '../reusables/slug'

const project = defineType({
  name: 'project',
  title: 'Project',
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
      name: 'projectType',
  title: 'Project Type',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    // Provide allowed values; Studio renders them as a multi-select checklist
    list: [
      {title: 'Residential', value: 'residential'},
      {title: 'Cultural', value: 'cultural'},
      {title: 'Commercial', value: 'commercial'},
      {title: 'New Build', value: 'new-build'},
    ],
    layout: 'grid', // checklist UI (use 'tags' if you prefer tag chips)
    },
  },
    {
      name: 'tags',
      title: 'Tags',
      type: 'tags',
      options: {
        includeFromRelated: 'tags'
      }
    },
    {
      name: 'year',
      type: 'string',
    },
    {
      name: 'location',
      type: 'string',
    },
    {
      name: 'description',
      type: 'textEditor'
    },
    {
      name: 'snippet',
      description: 'Short description for project that appears on the Projects page',
      type: 'string'
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
        {
          type: 'file',
          name: 'video',
          preview: {
            prepare: () => {
              return {
                title: 'Video'
              }
            }
          }
        }
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

export default project
