import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv';

export async function GET() {
  const scores = await kv.zrange('authorKudos', 0, -1, { withScores: true, rev: true });

  return NextResponse.json({ scores })
}
