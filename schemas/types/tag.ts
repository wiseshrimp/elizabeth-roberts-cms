import TagInput from "../../components/TagInput"

const tag = {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tag Name',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },

}

export default tag
