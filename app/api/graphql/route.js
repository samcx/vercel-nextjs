export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { graphql } from '@octokit/graphql'
import { kv } from '@vercel/kv'

export async function GET() {
  if (!process.env.GITHUB_TOKEN) throw new TypeError('GITHUB_TOKEN not set')

  const owner = 'vercel'
  const repo = 'next.js'

  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  // 1. GraphQL query after cursor
  const query = `
    query($owner: String!, $repo: String!, $cursor: String) {
      repository(owner: $owner, name: $repo) {
        issues(first: 100, after: $cursor, orderBy: {field: CREATED_AT, direction: DESC}) {
          edges {
            node {
              number
              author {
                login
              }
              createdAt
              comments(first: 100) {
                edges {
                  node {
                    author {
                      login
                    }
                    createdAt
                  }
                }
              }
            }
          }
          pageInfo {
            hasNextPage
            startCursor
            endCursor
          }
        }
      }
    }
  `;

  // 2. Run the query by the cursor
  const response = await graphqlWithAuth({
    query,
    owner,
    repo,
    cursor: "bruh"
  });

  // 3. Process the issues and comments, and update author kudos in KV
  const issues = response.repository.issues.edges
  const authorKudos = {}
  const ignore = ['samcx', 'github-actions', 'wyattjoh', 'feedthejim', 'delbaoliveira', 'acdlite', 'unstubbable', 'lubieowoce', 'huozhi', 'devjiwonchoi', 'gnoff', 'eps1lon', 'sebmarkbage', 'shuding', 'timneutkens', 'ztanner', 'bgw', 'ForsakenHarmony', 'kdy1', 'sokra', 'wbinnssmith']

  issues.forEach(({ node: issue }) => {
    const issueAuthor = issue.author ? issue.author.login : 'unknown'

    if (!authorKudos[issueAuthor]) {
      authorKudos[issueAuthor] = 0
    }

    authorKudos[issueAuthor] += 1

    issue.comments.edges.forEach(({ node: comment }) => {
      const commentAuthor = comment.author ? comment.author.login : 'unknown'

      if (!authorKudos[commentAuthor]) {
        authorKudos[commentAuthor] = 0
      }

      authorKudos[commentAuthor] += 1
    })
  })

  // 4. Remove ignored authors
  ignore.forEach((author) => {
    delete authorKudos[author]
  })

  // 5. Update KV for author kudos
  Object.entries(authorKudos).forEach(async ([author, kudos]) => {
    const score = await kv.zscore('authorKudos', author)
    if (score) {
      await kv.zincrby('authorKudos', kudos, author)
    } else {
      await kv.zadd('authorKudos', { score: kudos, member: author })
    }
  })

  return NextResponse.json({ data: response.repository.issues })
}
