import { NextResponse } from 'next/server'

export async function GET() {
  try {
    throw new Error('Something went wrong')
  } catch (error) {
    return NextResponse.error()
  }
}
