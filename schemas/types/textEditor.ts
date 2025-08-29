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
                        title: 'Bold', value: 'strong'
                    }
                ]
            }
        }
    ]
})

export default textEditor