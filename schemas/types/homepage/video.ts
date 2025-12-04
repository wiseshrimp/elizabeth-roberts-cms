const videoBlock = {
    name: 'videoBlock',
    title: 'Video',
    type: 'object',
    icon: () => '🎥',
    fields: [
        {
            type: 'file',
            name: 'videoFile'
        },
        {
            type: 'url',
            name: 'link'
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Video',
            }
        }
    }
}

export default videoBlock
