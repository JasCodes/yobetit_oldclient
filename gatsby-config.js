module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Yobetit`,
    description: ``,
    author: `Jaspreet Singh`,
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     custom: {
    //       families: ['Expressway:n4,n7,n9'],
    //       urls: ['/fonts/fonts.css'],
    //     },
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'fonts',
    //     path: `${__dirname}/src/fonts/`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        // isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        // allExtensions: true, // defaults to false
      },
    },
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-linaria',
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/layout/layout.tsx`),
      },
    },
  ],
}
