import { registerEndpoint } from './endpoints'
import {
  LoginParams,
  SignupParams,
  ArticlesParams,
  CommentsParams,
  CreateCommentParams,
  TopicsParams,
  ThreadsParams,
  MessagesParams,
  CreateMessageParams
} from './types'

export const api = {
  auth: {
    login: registerEndpoint<LoginParams>('auth/login', 'post'),
    signup: registerEndpoint<SignupParams>('auth/signup', 'post')
  },
  knowledge: {
    articles: registerEndpoint<ArticlesParams>('knowledge/articles', 'get'),
    comments: registerEndpoint<CommentsParams>('knowledge/comments', 'get'),
    createComment: registerEndpoint<CreateCommentParams>(
      'knowledge/comments',
      'post'
    )
  },
  community: {
    topics: registerEndpoint<TopicsParams>('community/topics', 'get'),
    threads: registerEndpoint<ThreadsParams>('community/threads', 'get'),
    messages: registerEndpoint<MessagesParams>('community/messages', 'get'),
    createMessage: registerEndpoint<CreateMessageParams>(
      'community/messages',
      'post'
    )
  }
}
