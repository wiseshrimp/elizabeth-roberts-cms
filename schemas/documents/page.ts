import slug from "../reusables/slug"

const page = {
    type: 'document',
    name: 'page',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'mainImage',
            type: 'customImage'
        },
        slug,
        {
            name: 'description',
            type: 'textEditor'
        },
    ]
}

export default page
