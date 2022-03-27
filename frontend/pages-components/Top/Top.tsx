import styles from './Top.module.scss'
import { Card, P, Button } from 'components'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Article, Thread, Topic } from 'pages/app/types'
import { api } from 'pages/app/api'
import TopProps from 'pages-components/Top/Top.props'

export const Top = ({ variant }: TopProps): JSX.Element => {
  const [articles, setArticles] = useState<Article[]>()
  const [topics, setTopics] = useState<Topic[]>()
  const [threads, setThreads] = useState<Thread[]>()

 useEffect(() => {
   ;(async () => {
     if (variant === 'article') {
       const response = await api.knowledge.articles()
       if (response.data === undefined) {
         return;
       }
       setArticles(response.data.object as Article[])
      }
     })()
   })
  const articleCards = articles?.map(
    article =>
      article && (
        <Card variant="article" object={article}>
          {article.content.split(' ').slice(5).join(' ')}...
        </Card>
      )
  )

  useEffect(() => {
   ;(async () => {
     if (variant === 'topic') {
       const response = await api.community.topics()
    if (response.data === undefined) {
            return;
    }
    setTopics(response.data.object as Topic[])
      }
     })()
   })
  const topicElements = topics?.map(
    topic =>
      topic && (
        <Card variant="topic" object={topic}>
          topic description
        </Card>
      )
  )

  useEffect(() => {
   ;(async () => {
     if (variant === 'thread') {
       const response = await api.community.threads()
       if (response.data === undefined) {
         return;
       }
       setThreads(response.data.object as Thread[])
      }
     })()
   })
  const threadCards = threads?.map(
    thread =>
      thread && (
        <Card variant="thread" object={thread}>
          thread description
        </Card>
      )
  )

  return (
    <div className={styles.wrapper}>
      {variant == 'topic' && <P tag="h2">TOP OF TOPICS</P>}
      {variant == 'article' && <P tag="h2">TOP OF ARTICLES</P>}
      {variant == 'thread' && <P tag="h2">TOP OF threadS</P>}

      <div className={styles.cards}>
        {variant == 'topic' && topicElements}
        {variant == 'article' && articleCards}
        {variant == 'thread' && threadCards}
      </div>
      {variant == 'topic' && (
        <Link href="/topics" passHref>
          <Button>VIEW ALL</Button>
        </Link>
      )}
      {variant == 'article' && (
        <Link href="/articles" passHref>
          <Button>VIEW ALL</Button>
        </Link>
      )}
      {variant == 'thread' && (
        <Link href="/threads" passHref>
          <Button>VIEW ALL</Button>
        </Link>
      )}
    </div>
  )
}
