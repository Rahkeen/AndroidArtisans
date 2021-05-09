module.exports = {
  siteMetadata: {
    title: "Android Artisans",
  },
  plugins: [
      'gatsby-plugin-styled-components',
      {
          resolve: 'gatsby-plugin-web-font-loader',
          options: {
              google: {
                  families: ['Recursive']
              }
          }
      }
    ],
};
