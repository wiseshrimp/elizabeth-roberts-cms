import { defineType } from "sanity";

const galleryImage = defineType({
    name: 'galleryImage',
    title: 'Image',
    type: 'object',
    fields: [
        {
            name: 'projectReference',
            description: "Optional – Adding a reference will automatically load the reference's main image as the gallery image and link to the reference's page. If you want to add a custom image or link, add below.",
            type: 'reference',
            to: [
                { 
                    type: 'project' 
                },
                {
                    type: 'objectItem'
                }
            ],

        },
        {
            name: 'caption',
            type: 'string'
        },
        {
            name: 'image',
            type: 'image'
        },
        {
            name: 'video',
            type: 'file',
            description: 'Uploading a video will autoplay and mute the video'
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
