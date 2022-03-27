import type { NextPage } from 'next'
import { withLayout } from '../../layout/Layout'
import { format } from 'date-fns'
import { TopicPage } from '../../pages-components'
import { useRouter } from 'next/router'
import { TopicPageProps } from '../../pages-components/TopicPage/TopicPage.props'

function Topic({objects}:TopicPageProps): JSX.Element {
  const router = useRouter()
  const { topicId } = router.query
  return <TopicPage objects={objects} topicId={topicId as string}/>
}

export default withLayout(Topic)
