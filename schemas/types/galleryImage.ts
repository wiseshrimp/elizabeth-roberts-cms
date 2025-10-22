import { defineType } from "sanity";

const galleryImage = defineType({
    name: 'galleryImage',
    title: 'Image',
    type: 'object',
    fields: [
        {
            name: 'projectReference',
            description: "Optional – Adding a project reference will automatically load the project's main image as the gallery image and link to the project's page. If you want to add a custom image or link, add below.",
            type: 'reference',
            to: [
                { type: 'project' }
            ],

        },
        {
            name: 'image',
            type: 'image'
        },
        {
            name: 'link',
            type: 'url'
        }
    ],
    preview: {
        select: {
            media: 'image',
            reference: 'projectReference.mainImage',
            projectTitle: 'projectReference.title'
        },
        prepare(data) {
            return {
                title: data.projectTitle ? data.projectTitle : 'Gallery Image',
                media: data.media ? data.media : data.reference?.image 
            }
        }
    }
})

export default galleryImage
