const jobs = {
    type: 'object',
    name: 'jobs',
    fields: [
        {
            type: 'array',
            name: 'list',
            of: [
                {
                    type: 'string',
                    name: 'role'
                }
            ]

        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Jobs'
            }
        }
    }
}

export default jobs
