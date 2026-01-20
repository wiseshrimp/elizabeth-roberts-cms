const video = {
  name: 'video',
  type: 'object',
  fields: [
    {
      type: 'file',
      name: 'videoFile',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Video',
      }
    },
  },
}

export default video
