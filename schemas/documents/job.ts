import slug from '../reusables/slug'

const jobPage = {
    type: 'document',
    name: 'jobPage',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        slug,
        {
            name: 'description',
            type: 'textEditor'
        }
    ]
}

export default jobPage
