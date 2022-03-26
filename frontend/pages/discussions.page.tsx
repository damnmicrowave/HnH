import { Button, Card, Input, NewThread, P, Star, Tag, Textarea, Thread, Tick } from '../components'
import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout';
import { format } from 'date-fns';
import { DiscussionsPage } from '../pages-components';

function Discussions({  }): JSX.Element {
  return (
    <DiscussionsPage />
  );
}

export default withLayout(Discussions);
