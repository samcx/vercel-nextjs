import { graphql } from '@octokit/graphql'
import { NextResponse } from 'next/server'

interface RepositoryData {
  repository: {
    issues: {
      nodes: {
        title: string
        url: string
        body: string
        createdAt: string
        labels: {
          nodes: {
            name: string
          }[]
        }
      }[]
    }
  }
}

interface Issue {
  title: string
  url: string
  body: string
  createdAt: string
  labels: {
    nodes: {
      name: string
    }[]
  }
}

export async function GET() {
  if (!process.env.GITHUB_TOKEN) throw new TypeError('GITHUB_TOKEN not set')

  const owner = 'vercel'
  const name = 'next.js'
  const sinceDate = '2024-07-08T00:00:00Z'

  const response: { repository: RepositoryData['repository'] } = await graphql({
    query: `
      query($owner: String!, $name: String!, $first: Int!) {
        repository(owner: $owner, name: $name) {
          issues(first: $first, orderBy: {field: CREATED_AT, direction: DESC}) {
            nodes {
              title
              url
              body
              createdAt
              labels(orderBy: {field: NAME, direction: ASC}, last: 10) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    `,
    owner,
    name,
    first: 100, // Fetch up to 100 issues in a single request
    headers: { authorization: `token ${process.env.GITHUB_TOKEN}` },
  })

  let issues: Issue[] = response.repository.issues.nodes

  // Filter the issues client-side to ensure all issues are since the specified date
  issues = issues.filter(
    (issue) => new Date(issue.createdAt) >= new Date(sinceDate),
  )

  return NextResponse.json({ data: issues })
}
