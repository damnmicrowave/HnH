import { GenericResponse } from '@api/_app'
import { User } from './core'

export type Article = {
  id: string
  datetime: number
  name: string
  author: User
  content: string
}

export type ArticlesParams = {
  response: {
    object?: Article[]
  } & GenericResponse
}

export type ArticleParams = {
  response: {
    object?: Article
  } & GenericResponse
}

export type Comment = {
  id: string
  user: User
  text: string
  datetime: number
}

export type CommentsParams = {
  response: {
    object?: Comment[]
  } & GenericResponse
}

export type CreateCommentParams = {
  request: {
    secret: string
    data: {
      articleId: string
      text: string
    }
  }
  response: {
    object?: Comment
  } & GenericResponse
}
