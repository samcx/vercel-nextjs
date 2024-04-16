import { Suspense } from 'react'

export default function TestTemplate({
  children,
}: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading Template...</div>}>
      <div>Inner Template!</div>
      <div>{children}</div>
    </Suspense>
  )
}
