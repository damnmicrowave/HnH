import { GenericResponse } from '@api/_app'
import { User } from './core'

type Topic = {
  id: string
  name: string
}

export type TopicsParams = {
  response: {
    object?: Topic[]
  } & GenericResponse
}

type Thread = {
  id: string
  name: string
  user: User
  topic: Topic
  datetime: number
}

export type ThreadsParams = {
  response: {
    object?: Thread[]
  } & GenericResponse
}

type Message = {
  id: string
  text: string
  user: User
  thread: Thread
  datetime: number
}

export type MessagesParams = {
  response: {
    object?: Message[]
  } & GenericResponse
}

export type CreateMessageParams = {
  request: {
    secret: string
    data: {
      threadId: string
      text: string
    }
  }
  response: {
    object?: Message
  } & GenericResponse
}
