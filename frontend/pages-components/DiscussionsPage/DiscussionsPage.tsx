import { DiscussionsPageProps } from './DiscussionsPage.props';
import styles from './DiscussionsPage.module.scss';
import cn from 'classnames';
import { Button, NewThread, P, Star, Thread } from '../../components';
import { Thread as Th } from '../../pages/app/types';
import { WideTop } from '../WideTop/WideTop';

export const DiscussionsPage = ({ objects }: DiscussionsPageProps): JSX.Element => {
    return (
		<div className={styles.wrapper}>
			<P tag='h1' className={styles.title}>Our threads</P>
			<div className={styles.widetop}><WideTop objects={objects} variant='thread' /></div>
			<div className={styles.button}>
				<Button>VIEW MORE</Button>
			</div>
		</div>
    );
};