const projectsSettings = {
    name: 'projectsSettings',
    type: 'document',
    title: 'Project Settings',
    __experimental_formPreviewTitle: false,
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'showProjectTypes',
            type: 'boolean',
            description: 'Show project types, e.g. Residential, New Construction, Commercial, Cultural, as filters'
        },
        {
            name: 'filters',
            title: 'Filters',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ]
        },
    ],
    options: {
        __experimental_formPreviewTitle: false
    },
    preview: {
        prepare() {
            return {
                title: 'Project Settings'
            }
        }
    }
}

export default projectsSettings