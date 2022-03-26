import { Button, Card, Input, NewThread, P, Star, Tag, Textarea, Thread, Tick } from '../components'

import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout';
import { format } from 'date-fns';

function Home({  }): JSX.Element {
  return (
    <>
      <P tag='h1'>Слоган</P>
      <Button>START QUIZ</Button>
      <Tag>tag</Tag>
      <Star />
      <Card title={'TiTle'}>It is my first card</Card>
      <Input placeholder='hello' />
      <Textarea />
      <Thread username='username' date={new Date("2019-01-16")} comment='comment' />
      <NewThread username='username' />
      <Tick />
    </>
  );
}

export default withLayout(Home);
