import Link from 'next/link'
import { headers } from 'next/headers'

export default async function NotFound() {
  const headersList = headers()
  console.log('[test] headersList =', headersList.keys())

  return (
    <div>
      <h2>Not Found: </h2>
      <p>Could not find requested resource</p>
    </div>
  )
}
