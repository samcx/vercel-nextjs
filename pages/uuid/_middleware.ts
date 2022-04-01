// pages/_middleware.ts

import type { NextFetchEvent, NextRequest } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log('testing logging!')
  return new Response('Hello, world!')
}