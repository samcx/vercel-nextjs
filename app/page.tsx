import { randomUUID } from 'node:crypto'

export const revalidate = 10

export const dynamic = 'force-static'

export default function Page() {
  return (
    <div>
      <div className="author">By {process.env.NEXT_PUBLIC_AUTHOR}</div>
      <div>UUID: {randomUUID()}</div>
    </div>
  )
}
