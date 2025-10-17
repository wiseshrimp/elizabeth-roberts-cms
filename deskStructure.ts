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
        .id('Architecture')
        .title('Architecture')
        .icon(() => '🌆')
        .child(
          S.list()
            .title('Architecture')
            .id('Architecture')
            .items(
              [
                S.listItem()
                  .title('Main Page')
                  .child(
                    S.editor()
                      .title('Main Page')
                      .id('ArchitecturePage')
                      .schemaType('architecturePage')
                      .documentId('architecturePage')
                  ),
                S.listItem()
                .title('Projects')
                .id('Projects')
                .schemaType('project')
                .child(
                  S.documentTypeList('project')
                    .title('Project')
                ),
                S.listItem()
                  .title('Archive')
                  .child(
                    S.editor()
                      .title('Archive Page')
                      .id('ArchivePage')
                      .schemaType('archivePage')
                      .documentId('archivePage')
                  ),
              ]
            )
        ),

      // Pages
      // S.listItem()
      //   .id('pages')
      //   .title('Pages')
      //   .icon(() => '📄')
      //   .schemaType('page')
      //   .child(
      //     S.editor()
      //     .title('Architecture')
      //     .id('architecture')
      //     .documentId('architecture')
      //     .schemaType('architectureLayout')

      //     // S.documentTypeList('page')
      //     //   .title('Pages')
      //   ),

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
                  .id('Contact')
                  .title('Contact')
                  .showIcon(false)
                  .child(
                    S.editor()
                      .title('Contact')
                      .id('Contact')
                      .schemaType('contactPage')
                      .documentId('contactPage')
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
