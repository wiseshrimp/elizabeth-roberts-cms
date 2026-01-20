import {defineType} from 'sanity'
import {GiNewspaper} from 'react-icons/gi'
import {GoVideo} from 'react-icons/go'
import {MdOutlineVideoLabel} from 'react-icons/md'

const textEditor = defineType({
  name: 'textEditor',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          {
            title: 'Bold',
            value: 'strong',
          },
          {
            title: 'Italic',
            value: 'em',
          },
          {
            title: 'Underline',
            value: 'underline',
          },
        ],
      },
    },
    {
      type: 'embed',
      icon: MdOutlineVideoLabel,
    },
    {
      type: 'video',
      icon: GoVideo,
    },
    {
      type: 'pressItem',
      icon: GiNewspaper,
    },
  ],
})

export default textEditor
