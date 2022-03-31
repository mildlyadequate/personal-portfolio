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
      {
        source: '/archiv/marketing-akademie', 
        destination: '/archive/marketing-academy',
      },
      {
        source: '/archiv/:path*', 
        destination: '/archive/:path*',
      },

    ]
  },

};