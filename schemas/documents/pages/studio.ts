const studioPage = {
    type: 'object',
    name: 'studioPage',
    fields: [
        {
            type: 'customImage',
            name: 'mainImage'
        },
        {
            type: 'file',
            name: 'mainVideo',
            description: 'Uploading a video will replace the main image.'
        },
        {
            type: 'string',
            name: 'title'
        },
        {
            type: 'textEditor',
            name: 'description'
        },
        {
            type: 'object',
            name: 'team',
            options: {
                collapsible: true,
                collapsed: true
            },
            fields: [
                {
                    type: 'string',
                    name: 'header'
                },
                {
                    type: 'array',
                    name: 'mainTeam',
                    of: [
                        {
                            type: 'object',
                            name: 'employee',
                            fields: [
                                {
                                    type: 'string',
                                    name: 'employeeName'
                                },
                                {
                                    type: 'customImage',
                                    name: 'employeeImage'
                                },
                                {
                                    type: 'textEditor',
                                    name: 'bio'
                                }
                            ]
                        },
                    ]
                },
                {
                    type: 'object',
                    name: 'otherTeamMembers',
                    fields: [
                        {
                            type: 'array',
                            name: 'employees',
                            of: [
                                {
                                    type: 'object',
                                    name: 'employee',
                                    fields:
                                        [
                                            {
                                                type: 'string',
                                                name: 'name'
                                            },
                                            {
                                                type: 'customImage',
                                                name: 'employeeImage'
                                            }
                                        ]
                                }
                            ]
                        },
                        {
                            type: 'boolean',
                            name: 'hideEmployeeImages'
                        }
                    ]
                }
            ]
        },
        {
            name: 'studioImageGallery',
            title: 'Image Gallery',
            type: 'array',
            of: [
                {
                    type: 'customImage',
                    name: 'studioImage'
                }
            ]
        },
        {
            name: 'press',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'pressItem',
                    fields: [
                        {
                            type: 'image',
                            name: 'logo'
                        },
                        {
                            type: 'textEditor',
                            name: 'text'
                        },
                        {
                            type: 'url',
                            name: 'link'
                        }
                    ],
                    preview: {
                        select: {
                            image: 'logo'
                        },
                        prepare: (preview: any) => {
                            return {
                                title: 'Press',
                                media: preview.image
                            }
                        }
                    }

                }
            ],
        }
    ]
}

export default studioPage