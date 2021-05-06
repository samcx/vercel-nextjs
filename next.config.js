// next.config.js
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/bruh/:path*',
        destination:
          'https://www.whatismybrowser.com/detect/what-http-headers-is-my-browser-sending',
      },
    ];
  },
};
