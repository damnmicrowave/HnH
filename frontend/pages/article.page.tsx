import { Button, Card, Input, NewThread, P, Star, Tag, Textarea, Thread, Tick } from '../components'
import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout';
import { format } from 'date-fns';
import { Description, MainPage, Top } from '../pages-components';
import { ArticlePage } from '../pages-components/ArticlePage/ArticlePage';

function Article({  }): JSX.Element {
  return (
    <ArticlePage />
  );
}

export default withLayout(Article);
