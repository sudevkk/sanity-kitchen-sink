export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecdfde964c8191860774845',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jaumyyii',
                  apiId: '07b39be6-d0b5-46ef-be41-6dbc51406e85'
                },
                {
                  buildHookId: '5ecdfde9d562c639ad3d710e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-btuzf2ys',
                  apiId: 'd62e9198-ba9b-4ac3-9ebc-55f947b2dc2c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sudevkk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-btuzf2ys.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
