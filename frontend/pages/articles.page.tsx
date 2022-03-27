import {
  Button,
  Card,
  Input,
  NewThread,
  P,
  Star,
  Tag,
  Textarea,
  Thread,
  Tick
} from '../components'
import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout'
import { format } from 'date-fns'
import { ArticlesPage } from '../pages-components'
import { TopicPageProps } from '../pages-components/TopicPage/TopicPage.props'

function Articles({objects}:TopicPageProps): JSX.Element {
  return <ArticlesPage objects={objects} />
}

export default withLayout(Articles)
