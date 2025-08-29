import { defineField } from "sanity"

const homeImageBlock = {
    name: 'homeImageBlock',
    title: 'Image Block',
    type: 'object',
    fields: [
        {
            name: "image",
            type: "image",
            title: "Image",
            options: { hotspot: true },
            validation: (rule: any) => rule.required(),
        },
        defineField({
            name: "alt",
            type: "string",
            title: "Alt text",
            // validation: r => r.required().min(3),
        }),
        defineField({
            name: "size",
            type: "string",
            title: "Size",
            options: {
                list: [
                    { title: "Full", value: "full" },
                    { title: "3/4", value: "partial" },
                ],
                layout: "dropdown", // 👈 this makes it a dropdown (instead of radios)
            },
            initialValue: 'full',
        }),
        defineField({
            name: "caption",
            type: "string",
            title: "Caption",
        }),
    ],
    preview: {
        select: { media: "image", caption: "caption", alt: "alt" },
        prepare({ media, caption, alt }: any) {
            return {
                title: caption || alt || "Image",
                subtitle: "Module • Image",
                media,
            }
        },
    },
}
export default homeImageBlock
