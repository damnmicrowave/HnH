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
import { Description, MainPage, Top } from '../pages-components'

function Home({}): JSX.Element {
  return <MainPage />
}

export default withLayout(Home)
