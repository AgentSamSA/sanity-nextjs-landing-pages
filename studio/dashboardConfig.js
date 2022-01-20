export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61e8ae20910d0b5fd16d31e0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tvhwrqvw',
                  apiId: '03d20112-29ab-40c2-9f70-7e9ee45b0423'
                },
                {
                  buildHookId: '61e8ae20a155ad5cd207736f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q2bvxpyc',
                  apiId: '048fd98c-fabe-4d03-806c-10b621e195b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AgentSamSA/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q2bvxpyc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
