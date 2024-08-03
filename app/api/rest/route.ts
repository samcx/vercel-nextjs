import { NextResponse } from 'next/server'
import { Octokit } from '@octokit/rest'
// import { openai } from '@ai-sdk/openai'
// import { generateText } from 'ai'

export async function GET() {
  if (!process.env.GITHUB_TOKEN) throw new TypeError('GITHUB_TOKEN not set')

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  // const model = 'gpt-4o'

  const { data: issues } = await octokit.rest.issues.listForRepo({
    owner: 'vercel',
    repo: 'next.js',
    per_page: 25,
  })

  // const result = await generateText({
  //   model: openai(model),
  //   prompt: `${JSON.stringify(issues)}\nWrite a succint summary of the above issues.`,
  // })

  return NextResponse.json({ issues: `${JSON.stringify(issues)}` })
}
