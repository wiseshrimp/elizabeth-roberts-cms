const contactPage = {
    type: 'object',
    name: 'contactPage',
    fields: [
        {
            name: 'mainImage',
            type: 'customImage'
        },
        {
            name: 'mainVideo',
            type: 'file',
            description: 'Uploading a video will replace the main image on the Contact page.'
        },
        {
            type: 'array',
            name: 'addresses',
            of: [
                {
                    type: 'object',
                    name: 'address',
                    fields: [
                        {
                            type: 'string',
                            name: 'line1',
                            title: 'Line 1'
                        },
                        {
                            type: 'string',
                            name: 'line2',
                            title: 'Line 2'
                        }
                    ]
                }
            ]
        },
        {
            type: 'string',
            name: 'phoneNumber'
        },
        {
            type: 'array',
            name: 'contacts',
            of: [
                {
                    type: 'object',
                    name: 'contact',
                    fields: [
                        {
                            type: 'string',
                            name: 'role'
                        },
                        {
                            type: 'email',
                            name: 'contactEmail'
                        }
                    ]
                }
            ]
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Contact'
            }
        }
    }
}

export default contactPage