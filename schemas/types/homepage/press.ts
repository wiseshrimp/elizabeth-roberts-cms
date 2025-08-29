const homepagePress = {
    name: 'homepagePress',
    type: 'object',
    fields: [
        {
            type: 'array',
            name: 'items',
            of: [
                {
                    type: 'press',
                    name: 'pressItem'
                }
            ]
        }
    ]
}

export default homepagePress
