import { NextResponse } from 'next/server'
import { Octokit } from '@octokit/rest'

export async function GET() {
  if (!process.env.GITHUB_TOKEN) throw new TypeError('GITHUB_TOKEN not set')

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  const owner = 'vercel'
  const repo = 'next.js'

  const { data: issue } = await octokit.issues.get({
    owner,
    repo,
    issue_number: 75783,
  })

  return NextResponse.json({ issue })
}
