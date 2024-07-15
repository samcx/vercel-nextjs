import { Octokit } from '@octokit/rest'
import { NextResponse } from 'next/server'

export async function GET() {
  if (!process.env.GITHUB_TOKEN) throw new TypeError('GITHUB_TOKEN not set')

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })
  const owner = 'vercel'
  const repo = 'next.js'

  try {
    const { data } = await octokit.rest.issues.listForRepo({
      owner,
      repo,
      state: 'all',
      since: '2024-07-08',
    })

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
