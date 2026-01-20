import ProjectsMainPageInfoText from '../../../components/InfoText/ProjectsMainPage'

const projectsPage = {
  name: 'projectsPage',
  type: 'object',
  fields: [
    {
      name: 'projectsInfo',
      type: 'string',
      components: {
        field: ProjectsMainPageInfoText,
      },
      readOnly: true,
    },
    {
      type: 'array',
      name: 'featuredProjects',
      of: [
        {
          name: 'featuredProject',
          type: 'object',
          fields: [
            {
              name: 'projectReference',
              type: 'reference',
              to: [{type: 'project'}],
            },
            {
              name: 'caption',
              type: 'string',
              hidden: true,
            },
          ],
          preview: {
            select: {
              title: 'projectReference.title',
              mainImage: 'projectReference.mainImage',
              alternateImage: 'alternateImage',
            },
            prepare(data: any) {
              return {
                title: data.title ? data.title : 'Project',
                media: data.alternateImage?.image
                  ? data.alternateImage.image
                  : data.mainImage?.image,
              }
            },
          },
        },
      ],
    },

    {
      name: 'numberOfPreviewImages',
      description:
        'Number of preview images that cycle through on hover and mouse move on /projects. Default value is 5.',
      type: 'number',
    },

    // Retired Fields:
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
              to: [{type: 'project'}],
            },
            {
              name: 'alternateImage',
              type: 'customImage',
            },
          ],
          preview: {
            select: {
              title: 'projectReference.title',
              mainImage: 'projectReference.mainImage',
              alternateImage: 'alternateImage',
            },
            prepare(data: any) {
              return {
                title: data.title ? data.title : 'Project',
                media: data.alternateImage?.image
                  ? data.alternateImage.image
                  : data.mainImage?.image,
              }
            },
          },
        },
      ],
      hidden: true,
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
              to: [{type: 'project'}],
            },
            {
              name: 'alternateImage',
              type: 'customImage',
            },
          ],
          preview: {
            select: {
              title: 'projectReference.title',
              mainImage: 'projectReference.mainImage',
              alternateImage: 'alternateImage',
            },
            prepare(data: any) {
              return {
                title: data.title ? data.title : 'Project',
                media: data.alternateImage?.image
                  ? data.alternateImage.image
                  : data.mainImage?.image,
              }
            },
          },
        },
      ],
      hidden: true,
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Main Page',
      }
    },
  },
}

export default projectsPage
