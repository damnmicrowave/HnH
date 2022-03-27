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
import { DiscussionsPage } from '../pages-components'
import { TopicPageProps } from '../pages-components/TopicPage/TopicPage.props'

function Discussions({objects}:TopicPageProps): JSX.Element {
  return <DiscussionsPage objects={objects} />
}

export default withLayout(Discussions)
