import { DBResponse, getClient, promise, query } from '@api/_app'
import q from 'faunadb'

type User = {
  id: string
  username: string
}

type Article = {
  id: string
  datetime: number
  name: string
  author: User
  content: string
}

export type Articles = DBResponse<Article>[]

export const getArticles = async () => {
  const client = getClient()
  const articlesQuery = query<DBResponse<Articles>>(
    client,
    q.Map(
      q.Paginate(q.Documents(q.Collection('articles'))),
      q.Lambda(
        'articleRef',
        q.Let(
          {
            article: q.Get(q.Var('articleRef')),
            datetime: q.Select(['ts'], q.Var('article')),
            name: q.Select(['data', 'name'], q.Var('article')),
            author: q.Get(q.Select(['data', 'author'], q.Var('article'))),
            content: q.Select(['data', 'content'], q.Var('article'))
          },
          {
            id: q.Select(['id'], q.Var('articleRef')),
            datetime: q.Var('datetime'),
            name: q.Var('name'),
            author: {
              id: q.Select(['ref', 'id'], q.Var('author')),
              username: q.Select(['data', 'username'], q.Var('author'))
            },
            content: q.Var('content')
          }
        )
      )
    )
  )
  return await promise<DBResponse<Articles>>(articlesQuery)
}

export const getArticle = async (articleId: string) => {
  const client = getClient()
  const articleQuery = query<DBResponse<Article>>(
    client,
    q.Get(q.Ref(q.Collection('articles'), articleId))
  )
  return await promise<DBResponse<Article>>(articleQuery)
}

export type Comment = {
  id: string
  user: User
  text: string
  datetime: string
}

export type Comments = DBResponse<Comment>[]

export const getComments = async (articleId: string) => {
  const client = getClient()
  const commentsQuery = query<DBResponse<Comments>>(
    client,
    q.Map(
      q.Paginate(
        q.Match(
          q.Index('comments_by_article'),
          q.Ref(q.Collection('articles'), articleId)
        )
      ),
      q.Lambda(
        'commentRef',
        q.Let(
          {
            comment: q.Get(q.Var('commentRef')),
            datetime: q.Select(['ts'], q.Var('comment')),
            user: q.Get(q.Select(['data', 'user'], q.Var('comment'))),
            text: q.Select(['data', 'text'], q.Var('comment'))
          },
          {
            id: q.Select(['id'], q.Var('commentRef')),
            datetime: q.Var('datetime'),
            user: {
              id: q.Select(['ref', 'id'], q.Var('user')),
              username: q.Select(['data', 'username'], q.Var('user'))
            },
            text: q.Var('text')
          }
        )
      )
    )
  )
  return await promise<DBResponse<Comments>>(commentsQuery)
}

type NewCommentData = {
  secret: string
  articleId: string
  text: string
}

export const createComment = async (data: NewCommentData) => {
  const { secret, articleId, text } = data

  const client = getClient(secret)

  const createCommentQuery = query<Comment>(
    client,
    q.Let(
      {
        userId: q.Select(['id'], q.CurrentIdentity()),
        comment: q.Create(q.Collection('comments'), {
          data: {
            article: q.Ref(q.Collection('articles'), articleId),
            user: q.Ref(q.Collection('users'), q.Var('userId')),
            text
          }
        }),
        id: q.Select(['ref', 'id'], q.Var('comment')),
        text: q.Select(['data', 'text'], q.Var('comment')),
        datetime: q.Select(['ts'], q.Var('comment'))
      },
      {
        id: q.Var('id'),
        datetime: q.Var('datetime'),
        user: {
          id: q.Var('userId'),
          username: q.Select(
            ['data', 'username'],
            q.Get(q.Ref(q.Collection('users'), q.Var('userId')))
          )
        },
        text: q.Var('text')
      }
    )
  )
  return await promise<Comment>(createCommentQuery)
}
