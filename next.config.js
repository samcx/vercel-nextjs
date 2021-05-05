// next.config.js
module.exports = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/bruv/:match*',
        destination: 'https://vercel.com/:match*',
        permanent: true,
      },
    ];
  },
};