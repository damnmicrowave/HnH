import { ArticlesPageProps } from './ArticlesPage.props';
import styles from './ArticlesPage.module.scss';
import cn from 'classnames';
import { Button, NewThread, P, Star, Thread } from '../../components';
import { Description } from '../Description/Description';
import { Top } from '../Top/Top';
import { Partners } from '../Partners/Partners';
import { WideTop } from '../WideTop/WideTop';
import { Article } from '../../pages/app/types';

export const ArticlesPage = ({ objects }: ArticlesPageProps): JSX.Element => {
		if (objects === undefined) {
			return <></>
		}
		else {
			return (
		<div className={styles.wrapper}>
			<P tag='h1' className={styles.title}>Our articles</P>
			<div className={styles.widetop}><WideTop objects={objects} variant='article' /></div>
			<div className={styles.button}>
				<Button>VIEW MORE</Button>
			</div>
		</div>
    );
}
}