const projectsSettings = {
  name: 'projectsSettings',
  type: 'document',
  title: 'Project Settings',
  description: 'Filter settings that show up on /projects and /archive',
  fields: [
    {
      name: 'showProjectTypes',
      type: 'boolean',
      description:
        'Show project types, e.g. Residential, New Construction, Commercial, Cultural, as filters',
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
  ],
}

export default projectsSettings
