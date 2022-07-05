export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62c467b26980f135c241a24c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-edge-browser-test-studio',
                  apiId: '5a8d6ad3-8b9a-40d5-83b2-bedcdef62f00'
                },
                {
                  buildHookId: '62c467b2818c1435056721e2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-edge-browser-test',
                  apiId: '8cdac909-8372-436c-aaa1-4a50bdf57705'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/votrebanque/sanity-nextjs-landing-pages-edge-browser-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-edge-browser-test.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
