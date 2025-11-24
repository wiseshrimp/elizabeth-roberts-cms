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
  ]
})

export default projectSettingsDocument