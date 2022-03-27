import { Article, Thread, Topic } from 'pages/app/types'

export interface CardProps {
  object: Article | Topic | Thread
  variant: 'article' | 'topic' | 'thread'
}
