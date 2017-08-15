module.exports = {
  siteMetadata: {
    title: `Buried Seeds`,
    author: `AjH`
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // {
          //   resolve: "gatsby-remark-images",
          //   options: {
          //     linkImagesToOriginal: false
          //   }
          // }
        ] // just in case those previously mentioned remark plugins sound cool :)"gatsby-remark-images"
      }
    }
    // "gatsby-plugin-sharp"
  ]
};
