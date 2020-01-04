module.exports = {
  siteMetadata: {
    title: `Performance Marketing Athens`,
    author: `Panos Makris`,
    description: `Tips & Tricks για όλους όσους θέλουν να μάθουν τα πάντα για Performance Marketing | Digital Marketing | Ads | SEO | Google Ads | Freebies | Φτιαγμένο από marketers για marketers `,
    siteUrl: `https://optimistic-volhard-c69d07.netlify.com/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [`gatsby-plugin-netlify-cms`, `gatsby-plugin-advanced-sitemap`, `gatsby-plugin-extract-schema`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Performance Marketing Athens`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/dns_2017.png`, 
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KF2P3XT",
      },
    },

  ],
}
