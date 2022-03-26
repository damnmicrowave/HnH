import { ArticlePageProps } from './ArticlePage.props';
import styles from './ArticlePage.module.scss';
import cn from 'classnames';
import { Article, Button, NewThread, P, Thread } from '../../components';
import { Description } from '../Description/Description';
import { Top } from '../Top/Top';
import { Partners } from '../Partners/Partners';

export const ArticlePage = ({ ...props }: ArticlePageProps): JSX.Element => {
    return (
		<div className={styles.wrapper}>
			<Article title='Article title' className={styles.article}>Article body</Article>
			<div className={styles.top}><Top/></div>
			<div className={styles.comments}>
				<Thread className={styles.top} username='user111' date={new Date()} comment='Sample thread' />
				<NewThread username='user123'></NewThread>
			</div>
		</div>
    );
};