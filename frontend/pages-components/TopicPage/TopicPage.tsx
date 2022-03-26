import { TopicPageProps } from './TopicPage.props';
import styles from './TopicPage.module.scss';
import cn from 'classnames';
import { Button, NewThread, P, Star, Thread } from '../../components';
import { WideTop } from '../WideTop/WideTop';

export const TopicPage = ({ ...props }: TopicPageProps): JSX.Element => {
    return (<>
		<div className={styles.wrapper}>
			<P tag='h1' className={styles.title}>Articles about topic TOPICTITLE</P>
			<WideTop className={styles.widetop} variant={'article'} />
			<div className={styles.button}>
				<Button>VIEW MORE</Button>
			</div>
		</div>
		<div className={styles.wrapper}>
			<P tag='h1' className={styles.title}>Discussions about topic TOPICTITLE</P>
			<WideTop className={styles.widetop} variant={'discussion'} />
			<div className={styles.button}>
				<Button>VIEW MORE</Button>
			</div>
		</div>
	</>
    );
};