const architecturePage = {
    name: 'architecturePage',
    type: 'object',
    fields: [
        {
            type: 'array',
            name: 'headerGallery',
            of: [
                {
                    name: 'featuredProject',
                    type: 'object',
                    fields: [
                        {
                            name: 'projectReference',
                            type: 'reference',
                            to: [{ type: 'project' }],
                        },
                        {
                            name: 'alternateImage',
                            type: 'customImage'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'projectReference.title',
                            mainImage: 'projectReference.mainImage',
                            alternateImage: 'alternateImage'
                        },
                        prepare (data: any) {
                            return {
                                title: data.title ? data.title : 'Project',
                                media: data.alternateImage?.image ? data.alternateImage.image : data.mainImage?.image
                            }
                        }
                    }
                }
            ]
        },
        {
            type: 'array',
            name: 'thumbnailGallery',
            of: [
                {
                    name: 'featuredProject',
                    type: 'object',
                    fields: [
                        {
                            name: 'projectReference',
                            type: 'reference',
                            to: [{ type: 'project' }],
                        },
                        {
                            name: 'alternateImage',
                            type: 'customImage'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'projectReference.title',
                            mainImage: 'projectReference.mainImage',
                            alternateImage: 'alternateImage'
                        },
                        prepare (data: any) {
                            return {
                                title: data.title ? data.title : 'Project',
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

export default architecturePage
