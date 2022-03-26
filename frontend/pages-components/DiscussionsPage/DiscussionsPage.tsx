import { DiscussionsPageProps } from './DiscussionsPage.props';
import styles from './DiscussionsPage.module.scss';
import cn from 'classnames';
import { Button, NewThread, P, Star, Thread } from '../../components';
import { Description } from '../Description/Description';
import { Top } from '../Top/Top';
import { Partners } from '../Partners/Partners';
import { WideTop } from '../WideTop/WideTop';

export const DiscussionsPage = ({ ...props }: DiscussionsPageProps): JSX.Element => {
    return (
		<div className={styles.wrapper}>
			<P tag='h1' className={styles.title}>Our discussions</P>
			<WideTop className={styles.widetop} variant={'discussion'} />
			<div className={styles.button}>
				<Button>VIEW MORE</Button>
			</div>
		</div>
    );
};