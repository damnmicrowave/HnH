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

function Articles({}): JSX.Element {
  return <ArticlesPage />
}

export default withLayout(Articles)
