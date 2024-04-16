import Link from 'next/link'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading test4 page...</div>}>
      <div>Test4 Page!</div>
      <Link href="/test2">Go to test2 page</Link>
      <Link href="/test2/test3">Go to test3 page</Link>
    </Suspense>
  )
}
