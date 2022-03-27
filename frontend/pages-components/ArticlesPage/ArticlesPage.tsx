import { ArticlesPageProps } from './ArticlesPage.props';
import styles from './ArticlesPage.module.scss';
import cn from 'classnames';
import { Button, NewThread, P, Star, Thread } from '../../components';
import { Description } from '../Description/Description';
import { Top } from '../Top/Top';
import { Partners } from '../Partners/Partners';
import { WideTop } from '../WideTop/WideTop';

export const ArticlesPage = ({ ...props }: ArticlesPageProps): JSX.Element => {
    return (
		<div className={styles.wrapper}>
			<P tag='h1' className={styles.title}>Our articles</P>
			<WideTop className={styles.widetop} variant={'article'} />
			<div className={styles.button}>
				<Button>VIEW MORE</Button>
			</div>
		</div>
    );
};