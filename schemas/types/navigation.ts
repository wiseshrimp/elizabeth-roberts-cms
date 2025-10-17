const navigation = {
    name: 'navigation',
    title: 'Main Navigation',
    type: 'object',
    fields: [
        {
            type: 'array',
            name: 'mainNavigation',
            of: [
                {
                    type: 'string',
                    name: 'navigationText'
                },
                {
                    type: 'url',
                    name: 'url'
                }
            ]
        },
        {
            type: 'array',
            name: 'mainNavigation',
            of: [
                {
                    type: 'string',
                    name: 'navigationText'
                },
                {
                    type: 'url',
                    name: 'url'
                }
            ]
        },
    ]
}

export default navigation