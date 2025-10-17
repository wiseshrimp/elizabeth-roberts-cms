// /schemas/singletons/projectOrder.ts
import { defineType, defineField } from 'sanity'
import ProjectOrderInput from '../../components/ProjectOrderInput'
// import {OrderIcon} from '@sanity/icons'

export default defineType({
    name: 'projectOrder',
    type: 'document',
    title: 'Project Ordering',
    fields: [
        defineField({
            name: 'ordered',
            title: 'Ordered Projects',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'project',
                    fields: [
                        {
                            name: 'projectReference',
                            type: 'reference',
                            to: [{ type: 'project' }],
                        },
                        
                        {
                            type: 'customImage', name: 'alternateImage'
                        },


                    ]
                }]
        })
    ],
})
