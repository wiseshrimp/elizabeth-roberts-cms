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
      name: 'image',
      title: 'Main Image',
      type: 'customImage',
    },
    slug,
    {
      name: 'projectType',
      type: 'string',
      options: {
        list: [
          {
            title: 'Residential',
            value: 'residential'
          },
          {
            title: 'Cultural',
            value: 'cultural'
          },
          {
            title: 'Commercial',
            value: 'commercial'
          }
        ]
      }
    },
    {
      name: 'year',
      type: 'string'
    },
    {
      name: 'location',
      type: 'string'
    },
    {
      name: 'description',
      type: 'textEditor'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
          options: {
            filter: ''
          }
        }
      ],
      hidden: true,

      components: {
        input: TagInput
      }
    }
  ],

})

export default project
