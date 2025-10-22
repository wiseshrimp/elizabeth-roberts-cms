// schemas/page.ts
import { defineType, defineField, defineArrayMember } from "sanity"
import { InfoText } from "../../../components/InfoText"

const homepageLayout = defineType({
  name: "homepageLayout",
  title: "Homepage Layout",
  type: "document",
  fields: [
    defineField({
      name: "info",
      type: "string",
      components: {
        field: InfoText
      },
      readOnly: true
    }),
    
    defineField({
      name: 'splashscreen',
      title: 'Splash Screen',
      type: 'splashscreen'
    }),
    defineField({
      name: "modules",
      title: "Home Page",
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
    prepare() {
      return {
        title: 'Homepage Layout'
      }
    }
  },
})

export default homepageLayout