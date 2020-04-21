module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Yobetit`,
    description: ``,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/layout/layout.jsx`)
      }
    },
  ],
}
