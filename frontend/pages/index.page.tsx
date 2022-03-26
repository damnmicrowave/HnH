import { Button, Card, P, Star, Tag } from '../components'

import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout';

function Home({  }): JSX.Element {
  return (
    <>
      <P tag='h1'>Слоган</P>
      <Button>START QUIZ</Button>
      <Tag>tag</Tag>
      <Star />
      <Card title={'TiTle'}>It is my first card</Card>
    </>
  );
}

export default withLayout(Home);
