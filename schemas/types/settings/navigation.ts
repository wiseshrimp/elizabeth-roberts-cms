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
