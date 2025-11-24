// schemas/page.ts
import { defineType, defineField, defineArrayMember } from "sanity"
import { SplashScreenText } from "../../../components/InfoText/SplashScreen"
import { HomePageModulesText } from "../../../components/InfoText/HomePageModules"

const homepageLayout = defineType({
  name: "homepageLayout",
  title: "Homepage Layout",
  type: "document",
  fields: [
    defineField({
      name: "info",
      type: "string",
      components: {
        field: SplashScreenText
      },
      readOnly: true
    }),
    
    defineField({
      name: 'splashscreen',
      title: 'Splash Screen',
      type: 'splashscreen'
    }),
    defineField({
      name: "homepageInfo",
      type: "string",
      components: {
        field: HomePageModulesText
      },
      readOnly: true
    }),
    defineField({
      name: "modules",
      title: "Home Page Modules",
      type: "array",
      of: [
    
        defineArrayMember({ type: "homeImageBlock" }),
        defineArrayMember({ type: "homepageTextBlock" }),
        defineArrayMember({ type: "gallery" }),
        defineArrayMember({ type: "homepagePress", title: 'Press' }),
        defineArrayMember({ type: "videoBlock", title: 'Video' }),

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