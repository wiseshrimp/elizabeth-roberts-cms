const splashscreen = {
    type: 'document',
    name: 'splashscreen',
    title: 'Splash Screen',
    fields: [
        {
            name: 'image',
            type: 'customImage'
        }
    ],
    preview: {
        prepare() {
            return { title: 'Splash Screen' }
        },
    },
}

export default splashscreen
