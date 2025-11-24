import { StructureBuilder } from 'sanity/structure'

const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Homepage
      S.listItem()
        .id('Homepage')
        .title('Homepage')
        .icon(() => '🏠')
        .child(
            S.editor()
              .id('homepageLayout')
              .title('Home')
              .schemaType('homepageLayout')
              .documentId('homepageLayout')
        ),

      // Projects
      S.listItem()
        .id('Projects')
        .title('Projects')
        .icon(() => '🌆')
        .child(
          S.list()
            .title('Projects')
            .id('Projects')
            .items(
              [
                S.listItem()
                  .title('Main Page')
                  .showIcon(false)
                  .child(
                    S.editor()
                      .title('Main Page')
                      .id('ProjectsPage')
                      .schemaType('projectsPage')
                      .documentId('projectsPage')
                  ),
                S.listItem()
                .title('Projects')
                .id('Projects')
                .showIcon(false)
                .schemaType('project')
                .child(
                  S.documentTypeList('project')
                    .title('Project')
                ),
                S.listItem()
                .title('Settings')
                .id('projectSettings')
                .showIcon(false)
                .child(
                  S.editor()
                  .title('Project Settings')
                  .id('projectsSettings')
                  .schemaType('projectsSettingsDocument')

                )
                // S.listItem()
                //   .title('Archive')
                //   .showIcon(false)
                //   .child(
                //     S.editor()
                //       .title('Archive Page')
                //       .id('ArchivePage')
                //       .schemaType('archivePage')
                //       .documentId('archivePage')
                //   ),
              ]
            )
        ),
      S.listItem()
        .id('Object')
        .title('Objects')
        .icon(() => '🪑')
        .child(
          S.list()
            .title('Objects')
            .id('Object')
            .showIcons(false)
            .items(
              [
                S.listItem()
                  .title('Main Page')
                  .child(
                    S.editor()
                      .title('Main Page')
                      .id('ObjectPage')
                      .schemaType('objectPage')
                      .documentId('objectPage')
                  ),
                S.listItem()
                .title('Objects')
                .id('Objects')
                .schemaType('objectItem')
                .child(
                  S.documentTypeList('objectItem')
                    .title('Object')
                )
              ]
            )
        ),
        S.listItem()
          .id('Contact')
          .title('Contact')
          .icon(() => '☎️')
          .child(
            S.editor()
              .title('Contact')
              .id('Contact')
              .schemaType('contactPage')
              .documentId('contactPage')
          ),
        S.listItem()
          .id('Studio')
          .title('Studio')
          .icon(() => '👤')

          .child(
            S.editor()
              .title('Studio')
              .id('studio')
              .schemaType('studioPage')
              .documentId('studioPage')
          ),

      // Settings
      S.listItem()
        .id('settings')
        .title('Settings')
        .icon(() => '⚙️')
        .child(
          S.list()
            .title('Settings')
            .items(
              [
                S.listItem()
                  .id('Navigation')
                  .title('Navigation')
                  .showIcon(false)
                  .child(
                    S.editor()
                      .title('Navigation')
                      .id('navigation')
                      .schemaType('navigation')
                      .documentId('navigation')
                  ),
                S.listItem()
                  .id('Jobs')
                  .title('Jobs')
                  .showIcon(false)
                  .child(
                    S.editor()
                      .title('Jobs')
                      .id('job')
                      .schemaType('jobs')
                      .documentId('jobs')
                  ),
              ]
            )
        )
    ])

export default deskStructure
