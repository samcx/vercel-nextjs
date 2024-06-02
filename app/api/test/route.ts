import { Octokit } from '@octokit/rest'
import { NextResponse } from 'next/server'

export async function GET() {
  if (!process.env.GITHUB_TOKEN) throw new TypeError('GITHUB_TOKEN not set')

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })
  const owner = 'vercel'
  const repo = 'next.js'
  const query = 'type:issue state:open created:<2023-01-01'

  const { data } = await octokit.rest.search.issuesAndPullRequests({
    q: query,
    per_page: 15,
  })

  return NextResponse.json({ data: data })
}
