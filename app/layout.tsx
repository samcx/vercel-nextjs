import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './global.css'

export const metadata: Metadata = {
  title: "Vercel Next.js",
  description: "Testing Next.js on Vercel."
}

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
