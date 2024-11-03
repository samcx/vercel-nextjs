import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
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
