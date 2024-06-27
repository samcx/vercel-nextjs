import { NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'

export const revalidate = 10

export async function GET(request: Request) {
  return NextResponse.json({ randomUUID: `${randomUUID()}` })
}
