import Image from 'next/image'
import img from '../public/327321892_951653379152139_5900064786812746307_n.jpg'

export default function Page() {
  return (
    <div>
      <div className="author">By {process.env.NEXT_PUBLIC_AUTHOR}</div>
      <div className="author">
        NEXT_PUBLIC_VERCEL_ENV = {process.env.NEXT_PUBLIC_VERCEL_ENV}
      </div>
      <Image alt="bracelet" height={500} src={img} width={300} />
    </div>
  )
}
