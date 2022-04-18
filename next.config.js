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
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
};
