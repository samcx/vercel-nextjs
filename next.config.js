// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: '/yeet',
        destination: 'https://google.com/',
      },
    ];
  },
};
