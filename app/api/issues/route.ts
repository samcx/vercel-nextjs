import { graphql } from '@octokit/graphql'
import { NextResponse } from 'next/server'

interface RepositoryData {
  repository: {
    issues: {
      pageInfo: {
        hasPreviousPage: boolean
        startCursor: string
      }
      nodes: {
        title: string
        url: string
        body: string
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
  const maxPages = 3

  let issues: Issue[] = []
  let hasNextPage = true
  let endCursor = null

  for (
    let currentPage = 1;
    currentPage <= maxPages && hasNextPage;
    currentPage++
  ) {
    const response: { repository: RepositoryData['repository'] } =
      await graphql({
        query: `
        query($owner: String!, $name: String!, $last: Int!, $before: String) {
          repository(owner: $owner, name: $name) {
            issues(last: $last, before: $before) {
              pageInfo {
                hasPreviousPage
                startCursor
              }
              nodes {
                title
                url
                body
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
        last: 100,
        before: endCursor,
        headers: { authorization: `token ${process.env.GITHUB_TOKEN}` },
      })

    const { repository } = response

    issues = [...repository.issues.nodes, ...issues]
    hasNextPage = repository.issues.pageInfo.hasPreviousPage
    endCursor = repository.issues.pageInfo.startCursor
  }

  return NextResponse.json({ data: issues })
}
