export async function GET() {
  return Response.json({
    value: `${process.env.VERCEL}`,
    'type of': `${typeof process.env.NODE_ENV}`,
  })
}
