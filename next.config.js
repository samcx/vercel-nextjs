// next.config.js
module.exports = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/test/:match*',
        destination: 'https://vercel.com/:match*',
        permanent: true,
      },
    ];
  },
};
