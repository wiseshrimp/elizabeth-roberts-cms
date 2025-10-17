const archivePage = {
    name: 'archivePage',
    type: 'object',
    fields: [
        {
            type: 'array',
            name: 'archiveGallery',
            of: [
                {
                    name: 'projectReference',
                    type: 'reference',
                    to: [{ type: 'project' }],
                }
            ]
        }
    ]
}

export default archivePage
