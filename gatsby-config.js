module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Yobetit`,
    description: ``,
    author: `Jaspreet Singh`,
  },
  plugins: [
    // 'gatsby-concurrent-mode',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        // isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        // allExtensions: true, // defaults to false
      },
    },
    'gatsby-plugin-tsconfig-paths',
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/layout/layout.tsx`),
      },
    },
    'gatsby-plugin-linaria',
  ],
}
