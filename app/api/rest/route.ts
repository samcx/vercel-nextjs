import { Octokit } from '@octokit/rest'
import { NextResponse } from 'next/server'

export async function GET() {
  if (!process.env.GITHUB_TOKEN) throw new TypeError('GITHUB_TOKEN not set')

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  const { data } = await octokit.rest.issues.listForRepo({
    owner: 'vercel',
    repo: 'next.js',
    labels: 'bug',
    per_page: 1
  })

  return NextResponse.json({ data })
}