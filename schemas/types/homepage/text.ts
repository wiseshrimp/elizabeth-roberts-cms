const homepageTextBlock = {
    name: 'homepageTextBlock',
    title: 'Text Block',
    type: 'object',
    icon: () => '🌟',
    fields: [
        {
            type: 'string',
            name: 'header'
        },
        {
            type: 'textEditor',
            name: 'text'
        }
    ]
}

export default homepageTextBlock