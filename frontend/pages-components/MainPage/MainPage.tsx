import { MainPageProps } from './MainPage.props';
import styles from './MainPage.module.scss';
import cn from 'classnames';
import { Button, P } from '../../components';
import { Description } from '../Description/Description';
import { Top } from '../Top/Top';
import { Partners } from '../Partners/Partners';

export const MainPage = ({ ...props }: MainPageProps): JSX.Element => {
    return (
		<div className={styles.wrapper}>
			<Description />
			<div className={styles.tops}>
				<Top variant='topic' />
				<Top variant='article' />
				<Top variant='discussion' />
			</div>
			<Partners />
		</div>
    );
};