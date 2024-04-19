import { Suspense } from "react"
import NavItems from "./nav-items"
import Count from "./count"

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
