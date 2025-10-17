const splashscreen = {
    type: 'document',
    name: 'splashscreen',
    title: 'Splash Screen',
    fields: [
        {
            type: 'array',
            name: 'images',
            of: [
                {
                    type: 'galleryImage',
                    name: 'galleryItem'
                }
            ],
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
                ],
                options: {
                    collapsible: true,
                    collapsed: true
                },
                hidden: true
            }
    ],
    preview: {
        prepare() {
            return { title: 'Splash Screen' }
        },
    },
}

export default splashscreen
