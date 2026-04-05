import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'i9b4x4a0',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

const projectsSettings = {
  name: 'projectsSettings',
  type: 'document',
  title: 'Project Settings',
  fields: [
    {
      name: 'showProjectTypes',
      type: 'boolean',
      description:
        'Show project types, e.g. Residential, New Construction, Commercial, Cultural, as filters on the navigation of the Archive and List view.',
    },
    {
      name: 'showObjects',
      type: 'boolean',
      hidden: true,
      description:
        'Show "objects" as a filter type on the navigation of the Archive and List view.',
    },
    {
      name: 'filterTags',
      type: 'tags',
      options: {
        predefinedTags: async () => {
          const tags = await client.fetch(`*[_type == "project" && defined(tags)].tags[]`)
          // Deduplicate tags by value
          const uniqueTags = tags.reduce((acc: any[], tag: any) => {
            if (tag && !acc.find((t: any) => t.value === tag.value)) {
              acc.push(tag)
            }
            return acc
          }, [])
          return uniqueTags
        },
        allowCreate: false,
      },
      description: 'Tags to show as filters on the navigation of the Archive and List view.',
    },
    {
      name: 'searchPlaceholderText',
      type: 'string',
      description: 'Placeholder text for the search bar',
      initialValue: 'Search',
    },
    {
      name: 'filters',
      title: 'Filters',
      type: 'array',
      hidden: true,
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'isAlphabeticalOrder',
      title: 'Alphabetical Order',
      type: 'boolean',
      description: 'Order projects alphabetically on the Projects List page.',
    },
  ],
}

export default projectsSettings
