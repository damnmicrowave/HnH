import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { withLayout } from '../../layout/Layout'
import { DiscussionPage } from '../../pages-components'

function Disscussion({}): JSX.Element {
  const router = useRouter()
  const { threadId } = router.query
  return <DiscussionPage threadId={threadId as string}/>
}

export default withLayout(Disscussion)
