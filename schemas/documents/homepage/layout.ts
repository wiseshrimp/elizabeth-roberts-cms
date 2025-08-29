// schemas/page.ts
import { defineType, defineField, defineArrayMember } from "sanity"

const homepageLayout = defineType({
  name: "homepageLayout",
  title: "Homepage Layout",
  type: "document",
  fields: [
    defineField({
      name: "modules",
      title: "Content Modules",
      type: "array",
      of: [
        defineArrayMember({ type: "homeImageBlock" }),
        defineArrayMember({ type: "homepageTextBlock" }),
        defineArrayMember({ type: "gallery" }),
        defineArrayMember({ type: "homepagePress", title: 'Press' }),
      ],
      validation: r => r.min(0),
    }),
  ],
  preview: {
    select: { title: "Homepage Layout" },
  },
})

export default homepageLayout