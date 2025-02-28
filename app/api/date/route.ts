export async function GET() {
  const now = Date.now()

  if (now % 2 === 0) {
    return Response.json({ timestamp: now })
  }
  return new Response('Not even timestamp', {
    status: 400, // Bad Request
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
