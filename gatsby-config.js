module.exports = {
  siteMetadata: {
    title: `trustco`,
    siteUrl: `https://trustco.vercel.app/`,
    description: `Trusco is a quality modern website creation service that
                prioritizes quality and was developed by experienced developers
                and designers.`,
    author: `TrustCo`,
    keywords: `#Web Development, #Web Design, #Software Development`,
    icon: `assets/favicon.ico`,
  },
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '@styles': `src/styles`,
          config: `config/`,
          '@utils': 'src/utils/',
          '@assets': 'src/assets/',
          '@components': 'src/components/',
          '@modules': 'src/modules/',
        },
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Trustco',
        short_name: 'Trustco',
        start_url: '/',
        display: 'standalone',
        icon: 'src/assets/favicon.ico', // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
