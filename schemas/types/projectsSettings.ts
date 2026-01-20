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
      name: 'filters',
      title: 'Filters',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}

export default projectsSettings
