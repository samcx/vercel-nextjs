import { getOctokit } from '@actions/github'
import { NextResponse } from 'next/server'

export async function GET() {
  if (!process.env.GITHUB_TOKEN) throw new TypeError('GITHUB_TOKEN not set')

  const octoClient = getOctokit(process.env.GITHUB_TOKEN)

  const { data } = await octoClient.rest.search.issuesAndPullRequests({
    order: 'desc',
    per_page: 15,
    q: 'is:issue is:open',
    sort: 'reactions',
  })

  return NextResponse.json({ data: data })
}
