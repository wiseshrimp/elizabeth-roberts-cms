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
