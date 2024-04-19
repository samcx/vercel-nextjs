import { getOctokit } from '@actions/github'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  if (!process.env.GITHUB_TOKEN) throw new TypeError('GITHUB_TOKEN not set')

  const octoClient = getOctokit(process.env.GITHUB_TOKEN)

  const { data } = await octoClient.rest.search.issuesAndPullRequests({
    order: 'desc',
    per_page: 15,
    q: 'is:pr is:open',
    sort: 'reactions-+1',
  })

  return NextResponse.json({ data: data })
}
