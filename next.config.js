/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/bruh',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
