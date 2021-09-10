// next.config.js

module.exports = {
  async redirects() {
    return [
      {
        source: '/bruv/:slug*',
        destination: `/:slug*`, // how do I lowercase everything for :slug*
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/yeet',
        destination: 'https://samsisle.com/',
      },
    ];
  },
};
