import Link from 'next/link'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading test2 page...</div>}>
      <div>Test2 Page!</div>
      <Link href="/">Go home</Link>
      <Link href="/test2/test3">Go to test3 page</Link>
      <Link href="/test2/test4">Go to test4 page</Link>
    </Suspense>
  )
}
