const gallery = {
    type: 'object',
    name: 'gallery',
    title: 'Image Gallery',
    icon: () => '🏢',
    fields: [
        {
            type: 'array',
            name: 'items',
            of: [
                {
                    type: 'galleryImage',
                    name: 'galleryItem'
                }
            ]
        },
        {
            type: 'object',
            name: 'settings',
            fields: [
                {
                    type: 'boolean',
                    name: 'addOpacity',
                    defaultValue: true,
                    description: 'Add opacity to the other images that are not in focus.'
                },
                {
                    type: 'number',
                    name: 'peekPercent'
                },
                {
                    type: 'object',
                    name: 'ratio',
                    fields: [
                        {
                            type: 'number',
                            name: 'y'
                        },
                        {
                            type: 'number',
                            name: 'x'
                        },
                    ]
                }
            ],
            options: {
                collapsible: true,
                collapsed: true,
            },
            hidden: true
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Project Gallery',
            }
        }
    }
}

export default gallery
