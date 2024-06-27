import { randomUUID } from 'node:crypto'

export const revalidate = 10

export default async function Page() {
  const data = await fetch('https://next-data-api-endpoint.vercel.app/api/random', {
    next: { tags: ['thank u, next'] },
  }).then((res) => res.text())

  return (
    <div>
      <div>UUID: {randomUUID()}</div>
    </div>
  )
}
