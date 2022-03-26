import { Button, Card, Input, NewThread, P, Star, Tag, Textarea, Thread, Tick } from '../components'
import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout';
import { format } from 'date-fns';
import { TopicPage } from '../pages-components';

function Topic({  }): JSX.Element {
  return (
    <TopicPage />
  );
}

export default withLayout(Topic);
