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
          S.list()
            .title('Homepage')
            .items(
              [
                S.listItem()
                  .id('SplashScreen')
                  .title('Splash Screen')
                  .showIcon(false)
                  .child(
                    S.editor()
                      .title('Splash Screen')
                      .id('splashscreen')
                      .schemaType('splashscreen')
                      .documentId('splashscreen')
                  ),

                S.listItem()
                  .id('HomepageLayout')
                  .title('Homepage Layout')
                  .showIcon(false)
                  .child(
                    S.editor()
                      .id('homepageLayout')
                      .schemaType('homepageLayout')
                      .documentId('homepageLayout')
                  ),
              ],
              
            )
        ),

      // Projects
      S.listItem()
        .id('Projects')
        .title('Projects')
        .icon(() => '🏠')
        .schemaType('project')
        .child(
          S.documentTypeList('project')
            .title('Project')
        ),

      // Pages
      S.listItem()
        .id('pages')
        .title('Pages')
        .icon(() => '📄')
        .schemaType('page')
        .child(
          S.documentTypeList('page')
            .title('Pages')
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
              ]
            )
        )
    ])

export default deskStructure
