const gallery = {
    type: 'object',
    name: 'gallery',
    title: 'Image Gallery',
    fields: [
        {
            type: 'array',
            name: 'items',
            of: [
                {
                    type: 'customImage',
                    name: 'galleryItem'
                }
            ]
        }
    ]
}

export default gallery
