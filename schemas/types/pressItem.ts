const pressItem = {
  name: 'pressItem',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'company',
    },
    {
      type: 'image',
      name: 'logo',
      options: {
        hotspot: true,
      },
    },
    {
      type: 'number',
      name: 'scale',
      description: 'Scale the logo up or down. 1 is default.',
    },
    {
      type: 'string',
      name: 'titleOfArticle',
    },
    {
      type: 'url',
      name: 'link',
    },
  ],
}

export default pressItem
