import { FaRegNewspaper } from "react-icons/fa";

const splashscreen = {
    type: 'document',
    name: 'splashscreen',
    title: 'Splash Screen',
    fields: [
        {
            type: 'array',
            name: 'images',
            of: [
                {
                    type: 'galleryImage',
                    name: 'galleryItem'
                }
            ],
        },
        {
            type: 'number',
            name: 'speed',
            description: 'Time (seconds) before the next slideshow image appears. Increase number if you want the splash screen slideshow to go more slowly.'
        },
            {
                type: 'object',
                name: 'ratio',
                fields: [
                    {
                        type: 'number',
                        name: 'y'
                    },
                    {
                        type: 'number',
                        name: 'x'
                    },
                ],
                options: {
                    collapsible: true,
                    collapsed: true
                },
                hidden: true
            }
    ],
    preview: {
        prepare() {
            return { title: 'Splash Screen' }
        },
    },
}

export default splashscreen
