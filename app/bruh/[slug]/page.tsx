import { randomUUID } from 'node:crypto'

export const revalidate = 10

export const dynamic = 'force-static'

export default function Page() {
  return (
    <div>
      <div>UUID: {randomUUID()}</div>
    </div>
  )
}
