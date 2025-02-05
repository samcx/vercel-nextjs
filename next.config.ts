import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
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
