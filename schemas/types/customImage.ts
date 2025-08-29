import { defineType } from "sanity";

const customImage = defineType({
    name: 'customImage',
    title: 'Image',
    type: 'object',
    fields: [
        {
            name: 'image',
            type: 'image'
        },
        {
            name: 'altText',
            type: 'string'
        }
    ]
})

export default customImage
