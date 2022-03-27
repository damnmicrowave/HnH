import { ArticlePageProps } from './ArticlePage.props'
import styles from './ArticlePage.module.scss'
import { Article as ArticleHeader, NewThread, Thread } from '../../components'
import { Top } from '../Top/Top'
import { useEffect, useState } from 'react'
import { api } from 'pages/app/api'
import { Article, Comment } from 'pages/app/types'
import { Loading } from '../../components'


export const ArticlePage = ({ articleId }: ArticlePageProps): JSX.Element => {
  const [article, setArticle] = useState<Article>()
  const [comments, setComments] = useState<Comment[]>()

  useEffect(() => {
    ;(async () => {
      const response = await api.knowledge.article({
        query: `articleId=${articleId}`
      })
      if (response.data === undefined) {
         return;
       }
      setArticle(response.data.object)
    })();
  })

  useEffect (() => {
    ;(async () => {
      const response = await api.knowledge.comments({
      query: `articleId=${articleId}`
    })
    if (response.data === undefined) {
         return;
       }
    setComments(response.data.object)
  })();
  })

  if (!article) return <Loading />

  return (
    <div className={styles.wrapper}>
      <ArticleHeader title={article.name} className={styles.article}>
        {article.content}
      </ArticleHeader>
      <div className={styles.top}>
        <Top variant="article" />
      </div>
      <div className={styles.comments}>
        {!comments
          ? 'Loading comments...'
          : comments.map(comment => {
              const datetime = new Date()
              datetime.setMilliseconds(comment.datetime / 1000000)
              return (
                <Thread
                  key={comment.id}
                  className={styles.top}
                  username={comment.user.username}
                  date={datetime}
                  comment={comment.text}
                />
              )
            })}
        <NewThread username="user123" />
      </div>
    </div>
  )
}
