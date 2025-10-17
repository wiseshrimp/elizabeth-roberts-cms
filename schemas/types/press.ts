const press = {
    name: 'press',
    type: 'object',
    fields: [
        {
            type: 'string',
            name: 'quote'
        },
        {
            type: 'customImage',
            name: 'logo'
        },
        {
            type: 'url',
            name: 'link'
        }
    ],
    preview: {
        select: {
            media: 'logo.image',
            title: 'quote'
        },
        prepare(data: any) {
            console.log(data)
            return {
                title: data.title,
                media: data.media
            }
        }
    }
}

export default press