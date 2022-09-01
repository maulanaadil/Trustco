require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'TrustcoTech',
    siteUrl: 'https://trustcotech.my.id/',
    description: `TrustcoTech is a quality modern website creation service that
                prioritizes quality and was developed by experienced developers
                and designers.`,
    author: 'TrustcoTech',
    keywords: '#Web Development, #Web Design, #Software Development',
    icon: 'assets/favicon.ico',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@styles': 'src/styles',
          '@utils': 'src/utils',
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@layouts': 'src/layouts',
          '@modules': 'src/modules',
          '@hooks': 'src/hooks',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'TrustcoTech',
        short_name: 'TrustcoTech',
        start_url: '/',
        display: 'standalone',
        icon: 'src/assets/favicon.ico', // This path is relative to the root of the site.
        crossOrigin: 'use-credentials',
      },
    },
    {
      resolve: 'gatsby-plugin-chatwoot',
      options: {
        baseUrl: 'https://app.chatwoot.com', // Required
        websiteToken: process.env.GATSBY_LIVE_CHAT_TOKEN, // Required
        includeInDevelopment: true, // Optional
        chatwootSettings: {
          position: 'right',
          type: 'standard',
        }, // Optional
      },
    },
  ],
}
