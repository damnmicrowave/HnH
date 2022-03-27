import { DiscussionPageProps } from './DiscussionPage.props';
import styles from './DiscussionPage.module.scss';
import cn from 'classnames';
import { Button, NewThread, P, Star, Thread } from '../../components';
import { Description } from '../Description/Description';
import { Top } from '../Top/Top';
import { Partners } from '../Partners/Partners';

export const DiscussionPage = ({ ...props }: DiscussionPageProps): JSX.Element => {
    return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<P className={styles.titleP} tag='h1'>Username: TITLE</P>
				<Star className={styles.titleI} />
			</div>
			<div className={styles.top}><Top variant='discussion'/></div>
			<div className={styles.comments}>
				<Thread className={styles.top} username='user111' date={new Date()} comment='Sample thread' />
				<NewThread username='user123'></NewThread>
			</div>
		</div>
    );
};