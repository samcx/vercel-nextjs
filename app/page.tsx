import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <div className={inter.className}>
      <div className="author">Byy {process.env.NEXT_PUBLIC_AUTHOR}</div>
    </div>
  )
}
