const studioPage = {
    type: 'object',
    name: 'studioPage',
    fields: [
        {
            type: 'customImage',
            name: 'mainImage'
        },
        {
            type: 'string',
            name: 'title'
        },
        {
            type: 'textEditor',
            name: 'description'
        },
        {
            type: 'object',
            name: 'team',
            fields: [
                {
                    type: 'string',
                    name: 'header'
                },
                {
                    type: 'array',
                    name: 'mainTeam',
                    of: [
                        {
                            type: 'object',
                            name: 'employee',
                            fields: [
                                {
                                    type: 'string',
                                    name: 'employeeName'
                                },
                                {
                                    type: 'customImage',
                                    name: 'employeeImage'
                                },
                                {
                                    type: 'textEditor',
                                    name: 'bio'
                                }
                            ]
                        },
                    ]
                },
                {
                    type: 'object',
                    name: 'otherTeamMembers',
                    fields: [
                        {
                            type: 'array',
                            name: 'employees',
                            of: [
                                {
                                    type: 'object',
                                    name: 'employee',
                                    fields:
                                    [
                                        {
                                            type: 'string',
                                            name: 'name'
                                        },
                                        {
                                            type: 'customImage',
                                            name: 'employeeImage'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'boolean',
                            name: 'hideEmployeeImages'
                        }
                    ]
                }
            ]
        }
    ]
}

export default studioPage