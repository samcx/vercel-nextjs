import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv';

export async function GET() {
  const user = await kv.hgetall('user:me');

  return NextResponse.json({ user })
}
