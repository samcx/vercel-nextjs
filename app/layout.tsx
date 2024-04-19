'use client'

import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'

import './global.css'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, set] = useState(0)

  return (
    <html lang="en" className={inter.className}>
      <body>
        <div>count: {count}</div>
        <button onClick={() => set(count + 1)} type="button">
          Increment+
        </button>
        <Link href="/test">Go to test</Link>
        <Link href="/test2">Go to test2</Link>

        <main>{children}</main>
      </body>
    </html>
  )
}
