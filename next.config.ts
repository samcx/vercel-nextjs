import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    newDevOverlay: true,
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
