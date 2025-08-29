const navigation = {
    name: 'navigation',
    type: 'object',
    fields: [
        {
            type: 'array',
            name: 'items',
            of: [
                {
                    type: 'object',
                    name: 'navigationItem',
                    fields: [
                        {
                            type: 'string',
                            name: 'title'
                        },
                        {
                            name: 'reference',
                            type: 'reference',
                            to: [
                                { type: 'page'},
                                { type: 'project' }
                            ],
                        }
                    ]
                }
            ]
        }
    ]
}

export default navigation
