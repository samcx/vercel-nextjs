import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <div className={inter.className}>
      <div className="author">By {process.env.NEXT_PUBLIC_AUTHOR}</div>
      <div className="author">
        NEXT_PUBLIC_VERCEL_ENV = {process.env.NEXT_PUBLIC_VERCEL_ENV}
      </div>
    </div>
  )
}
