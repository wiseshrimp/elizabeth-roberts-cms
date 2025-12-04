const reusable = {
    type: 'object',
    name: 'navigationItem',
    fields: [
        {
            type: 'string',
            name: 'title'
        },
        {
            type: 'string',
            name: 'link'
        },
        {
            type: 'string',
            name: 'showFeatured',
            title: 'Show Featured of Type',
            description: 'Selecting an option will show the featured projects or objects in the navigation bar when hovering over the navigation item',
            options: {
                layout: "dropdown", 
                list: [
                    {title: 'None', value: 'none'},
                    {title: 'Projects', value: 'projects'},
                    {title: 'Objects', value: 'objects'}
                ],
            }
        }
    ]
}

const navigation = {
    name: 'navigation',
    type: 'object',
    title: 'Navigation',
    preview: {
        prepare() {
            return (
                {
                    title: 'Navigation'
                }
            )
        }
    },
    fields: [
        {
            type: 'object',
            name: 'mainNavigation',
            title: 'Main Navigation',
            fields: [
                {
                    name: 'navigationItems',
                    type: 'array',
                    of: [
                        reusable
                    ]
                }
            ],
            preview: {
                prepare() {
                    return {
                        title: 'Main Navigation'
                    }
                }
            }
        },
        {
            type: 'object',
            name: 'footerNavigation',
            fields: [
                {
                    name: 'navigationItems',
                    type: 'array',
                    of: [
                        reusable
                    ]
                },
                {
                    name: 'socials',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    type: 'string',
                                    name: 'title'
                                },
                                {
                                    type: 'url',
                                    name: 'link'
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    ]
}

export default navigation
