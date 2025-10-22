import { FaRegNewspaper } from "react-icons/fa";

const homepagePress = {
    name: 'homepagePress',
    type: 'object',
    icon: () => '📰',
    fields: [
        {
            type: 'array',
            name: 'items',
            of: [
                {
                    type: 'press',
                    name: 'pressItem'
                }
            ]
        },
        {
            type: 'number',
            name: 'speed',
            description: 'Speed of press marquee. Increase number to make marquee move more slowly.'
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Press Gallery',
            }
        }
    }
}

export default homepagePress
