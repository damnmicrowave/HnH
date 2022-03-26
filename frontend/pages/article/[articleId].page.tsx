import { ArticlePage } from 'pages-components/ArticlePage/ArticlePage'
import { withLayout } from 'layout/Layout'
import { useRouter } from 'next/router'

function Article({}): JSX.Element {
  const router = useRouter()
  const { articleId } = router.query
  return <ArticlePage articleId={articleId as string} />
}

export default withLayout(Article)
