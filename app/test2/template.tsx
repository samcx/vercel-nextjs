import { Suspense } from 'react'
import Count from './count'
import NavItems from './nav-items'

export default function TestTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>Inner Template</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <NavItems />
      </Suspense>
      <Count />
      <div>{children}</div>
    </>
  )
}
