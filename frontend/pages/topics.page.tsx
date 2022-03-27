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
import { TopicsPage } from '../pages-components'
import { TopicPageProps } from '../pages-components/TopicPage/TopicPage.props'

function Topics({objects}:TopicPageProps): JSX.Element {
  return <TopicsPage objects={objects}/>
}

export default withLayout(Topics)
