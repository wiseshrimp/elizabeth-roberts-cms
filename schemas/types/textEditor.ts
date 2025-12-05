import { defineType } from "sanity";

const textEditor = defineType({
    name: 'textEditor',
    type: 'array',
    of: [
        {
            type: 'block',
            marks: {
                decorators: [
                    {
                        title: 'Bold', value: 'strong',
                    },
                    {
                        title: 'Italic', value: 'em'
                    },
                    {
                        title: 'Underline', value: 'underline'
                    },
                ]
            }
        },
        {
            type: 'embed'
        }
    ]
})

export default textEditor
