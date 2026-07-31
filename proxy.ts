import { get, has } from '@vercel/global-config'
import { type NextRequest, NextResponse } from 'next/server'

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next()
  }

  const paths = request.nextUrl.pathname.split('/')
  const globalConfigKeyExists = await has(paths[1])

  if (globalConfigKeyExists) {
    const redirect = (await get(paths[1])) as string

    if (paths[1] === 'issues' && paths[2]) {
      return NextResponse.redirect(`${redirect}/${paths[2]}`)
    }
    if (paths[1] === 'nr' && paths[2]) {
      return NextResponse.redirect(`${redirect}/tag/v${paths[2]}`)
    }
    if (paths[1] === 'blob') {
      return NextResponse.redirect(
        `${redirect}/${[...paths.slice(2)].join('/')}`,
      )
    }
    return NextResponse.redirect(redirect)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|icon.svg).*)'],
}
