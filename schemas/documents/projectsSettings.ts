import { defineType } from "sanity";

const projectSettingsDocument = defineType({
  name: 'projectsSettingsDocument',
  title: 'Project Settings',
  type: 'document',
  fields: [
    {
        name: 'projectSettings',
        type: 'projectsSettings'
    }
  ],
  preview: {
    prepare() {
        return {
            title: 'Project Settings'
        }
    }
  }
})

export default projectSettingsDocument