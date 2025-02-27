import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    nodeMiddleware: true,
    ppr: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  reactStrictMode: true,
}

export default nextConfig
