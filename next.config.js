/** @type {import('next').NextConfig} */
module.exports = {

  reactStrictMode: true,

  i18n:{
    locales: ['en','de'],
    defaultLocale: 'de',
    localeDetection: true,
  },
  trailingSlash: true,

  async rewrites() {
    return [
      
      {
        source: '/archiv', 
        destination: '/archive',
      },

      // Order matters -> first the specific translations for every project page that needs translating
      {
        source: '/projekt/marketing-akademie', 
        destination: '/project/marketing-academy',
      },

      // Then the general path translation in case the name stays the same
      {
        source: '/projekt/:path*', 
        destination: '/project/:path*',
      },

    ]
  },

};