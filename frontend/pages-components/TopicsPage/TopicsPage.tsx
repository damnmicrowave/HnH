import { TopicsPageProps } from './TopicsPage.props';
import styles from './TopicsPage.module.scss';
import cn from 'classnames';
import { Button, NewThread, P, Star, Thread } from '../../components';
import { Description } from '../Description/Description';
import { Top } from '../Top/Top';
import { Partners } from '../Partners/Partners';
import { WideTop } from '../WideTop/WideTop';

export const TopicsPage = ({ ...props }: TopicsPageProps): JSX.Element => {
    return (
		<div className={styles.wrapper}>
			<P tag='h1' className={styles.title}>Our topics</P>
			<WideTop className={styles.widetop} variant={'topic'} />
			<div className={styles.button}>
				<Button>VIEW MORE</Button>
			</div>
		</div>
    );
};