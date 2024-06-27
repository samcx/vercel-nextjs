import { randomUUID } from 'node:crypto'
import { NextResponse } from 'next/server'

export const revalidate = 10

export async function GET(request: Request) {
  return NextResponse.json({ randomUUID: `${randomUUID()}` })
}
