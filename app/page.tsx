import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <div className={inter.className}>
      <div className="author">By {process.env.NEXT_PUBLIC_AUTHOR}</div>
      <div className="author">
        NEXT_PUBLIC_VERCEL_ENV = {process.env.NEXT_PUBLIC_VERCEL_ENV}
      </div>
      <Image
        src="https://chiru-transparent.s3.us-west-1.amazonaws.com/beanz/17720.png "
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  )
}
