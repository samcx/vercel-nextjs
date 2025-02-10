import { Suspense } from 'react'
import Ditto from '@/components/Ditto'

export default function Page() {
  return (
    <div>
      <div className="author">By {process.env.NEXT_PUBLIC_AUTHOR}</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Ditto />
      </Suspense>
    </div>
  )
}
