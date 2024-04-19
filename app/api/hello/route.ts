import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return NextResponse.json({ hello: `${process.env.VERCEL}` })
}
