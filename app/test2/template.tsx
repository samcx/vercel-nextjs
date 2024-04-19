import { Suspense } from "react"

export default function TestTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>Inner Template!</div>
      <div>{children}</div>
    </>
  )
}
