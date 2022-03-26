import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout';
import { DiscussionPage } from '../pages-components';

function Disscussion({  }): JSX.Element {
  return (
    <DiscussionPage />
  );
}

export default withLayout(Disscussion);
