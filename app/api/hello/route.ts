import { headers } from 'next/headers'

export const dynamic = 'force-static'

export async function GET() {
  const headersList = headers()
  const referer = headersList.get('referer')

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { referer: referer },
  })
}