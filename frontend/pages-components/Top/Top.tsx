import styles from './Top.module.scss'
import { Card, P, Button } from 'components'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Article } from 'pages/app/types'
import { api } from 'pages/app/api'
import TopProps from 'pages-components/Top/Top.props'

export const Top = ({ variant }: TopProps): JSX.Element => {
  // тут надо заменить на данные карточек
  // const [topics, setTopics] = useState<Topic[]>()
  const [articles, setArticles] = useState<Article[]>()

  useEffect(() => {
    ;(async () => {
      if (variant === 'article') {
        const response = await api.knowledge.articles()
        setArticles(response.data.object)
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

  return (
    <div className={styles.wrapper}>
      {variant == 'topic' && <P tag="h2">TOP OF TOPICS</P>}
      {variant == 'article' && <P tag="h2">TOP OF ARTICLES</P>}
      {variant == 'thread' && <P tag="h2">TOP OF threadS</P>}

      <div className={styles.cards}>
        {/*{variant == 'topic' && (*/}
        {/*  <>*/}
        {/*    <Card variant="topic" title={'title'}>*/}
        {/*      description*/}
        {/*    </Card>*/}
        {/*    <Card variant="topic" title={'title'}>*/}
        {/*      description*/}
        {/*    </Card>*/}
        {/*    <Card variant="topic" title={'title'}>*/}
        {/*      description*/}
        {/*    </Card>*/}
        {/*  </>*/}
        {/*)}*/}
        {variant == 'article' && articleCards}
        {/*{variant == 'thread' && (*/}
        {/*  <>*/}
        {/*    <Card variant="thread" title={'title'}>*/}
        {/*      description*/}
        {/*    </Card>*/}
        {/*    <Card variant="thread" title={'title'}>*/}
        {/*      description*/}
        {/*    </Card>*/}
        {/*    <Card variant="thread" title={'title'}>*/}
        {/*      description*/}
        {/*    </Card>*/}
        {/*  </>*/}
        {/*)}*/}
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
