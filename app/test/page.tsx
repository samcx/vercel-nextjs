import Link from 'next/link'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading test page...</div>}>
      <div>Test page!</div>
      <Link href="/">Go home</Link>
    </Suspense>
  )
}
