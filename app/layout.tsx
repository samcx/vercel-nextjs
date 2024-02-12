import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import './global.css'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vercel → Next.js',
  description: 'Welcome to Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
