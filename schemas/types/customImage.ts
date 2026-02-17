import {defineType} from 'sanity'

const customImage = defineType({
  name: 'customImage',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'caption',
      type: 'string',
    },
    {
      name: 'altText',
      type: 'string',
    },
  ],
  preview: {
    select: {
      image: 'image',
      title: 'Image',
    },
    prepare: (data) => {
      return {
        title: 'Image',
        media: data.image,
      }
    },
  },
})

export default customImage
