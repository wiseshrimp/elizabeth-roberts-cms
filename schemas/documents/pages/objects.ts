const objectPage = {
    name: 'objectPage',
    type: 'object',
    fields: [
        {
            type: 'array',
            name: 'headerGallery',
            of: [
                {
                    name: 'featuredObject',
                    type: 'object',
                    fields: [
                        {
                            name: 'objectReference',
                            type: 'reference',
                            to: [{ type: 'objectItem' }],
                        },
                        {
                            name: 'alternateImage',
                            type: 'customImage'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'objectReference.title',
                            mainImage: 'objectReference.mainImage',
                            alternateImage: 'alternateImage'
                        },
                        prepare (data: any) {
                            return {
                                title: data.title ? data.title : 'Object',
                                media: data.alternateImage?.image ? data.alternateImage.image : data.mainImage?.image
                            }
                        }
                    }
                }
            ]
        }
    ],
    preview: {
        prepare: () => {
            return {
                title: 'Main Page'
            }
        }
    }
}

export default objectPage
