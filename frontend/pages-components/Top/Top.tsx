import { TopProps } from './Top.props';
import styles from './Top.module.scss';
import cn from 'classnames';
import { Card, P, Button } from '../../components';

export const Top = ({ ...props }: TopProps): JSX.Element => {
	// тут надо заменить на данные карточек
	const numbers = [1, 2, 3, 4, 5];
	const listCards = numbers.map((number) => {
			return (
			<Card key={number} title={number.toString()}>
				{number}
			</Card>
			);
		});

    return (
		<div className={styles.wrapper}>
			<P tag='h2'>TOP OF ARTICLES</P>
			<div className={styles.cards}>
				{listCards}
			</div>
			<Button>VIEW ALL</Button>
		</div>
    );
};

