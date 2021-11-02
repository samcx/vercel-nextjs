// pages/_middleware.ts

import { NextResponse } from 'next/server';

export function middleware() {
  console.log('[test] = test!');
  return NextResponse.next();
}
