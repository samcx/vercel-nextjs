import { Suspense } from 'react'
import Ditto from '@/components/Ditto'

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Ditto />
      </Suspense>
    </div>
  )
}
