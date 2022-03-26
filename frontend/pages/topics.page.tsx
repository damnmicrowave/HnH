import { Button, Card, Input, NewThread, P, Star, Tag, Textarea, Thread, Tick } from '../components'
import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout';
import { format } from 'date-fns';
import { TopicsPage } from '../pages-components';

function Topics({  }): JSX.Element {
  return (
    <TopicsPage />
  );
}

export default withLayout(Topics);
