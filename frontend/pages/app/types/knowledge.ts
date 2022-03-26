import { GenericResponse } from '@api/_app'
import { User } from './core'

type Article = {
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

type Comment = {
  id: string
  user: User
  text: string
  datetime: string
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
