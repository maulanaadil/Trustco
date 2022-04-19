module.exports = {
  siteMetadata: {
    title: `trustco`,
    siteUrl: `https://trustco.vercel.app/`,
    description: `Trusco is a quality modern website creation service that
                prioritizes quality and was developed by experienced developers
                and designers.`,
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
  ],
};
