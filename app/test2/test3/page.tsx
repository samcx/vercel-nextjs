import Link from 'next/link'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading test3 page...</div>}>
      <div>Test3 Page!</div>
      <Link href="/test2">Go to test2 page</Link>
      <Link href="/test2/test4">Go to test4 page</Link>
    </Suspense>
  )
}
