import { TopicsPageProps } from './TopicsPage.props';
import styles from './TopicsPage.module.scss';
import cn from 'classnames';
import { Button, NewThread, P, Star, Thread } from '../../components';
import { WideTop } from '../WideTop/WideTop';
import { Topic } from '../../pages/app/types';
import { useEffect, useState } from 'react';
import { api } from '../../pages/app/api';

export const TopicsPage = ({objects}:TopicsPageProps): JSX.Element => {

const [topics, setTopics] = useState<Topic[]>()

 useEffect(() => {
   ;(async () => {
       const response = await api.community.topics()
	   if (response.data === undefined) {
         return;
       }
       setTopics(response.data.object)
     })()
   })

    return (
		<div className={styles.wrapper}>
			<P tag='h1' className={styles.title}>Our topics</P>
			<div className={styles.widetop}>
				<WideTop variant='topic' objects={objects} /></div>
			<div className={styles.button}>
				<Button>VIEW MORE</Button>
			</div>
		</div>
    );
};