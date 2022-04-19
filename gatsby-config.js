module.exports = {
  siteMetadata: {
    title: `trustco`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '@styles': `src/styles`,
          config: `config/`,
          '@utils': 'src/utils/',
          '@components': 'src/components/',
        },
      },
    },
    'gatsby-plugin-postcss',
  ],
};
