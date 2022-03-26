import { CardProps } from './Card.props';
import styles from './Card.module.scss';
import cn from 'classnames';
import { P } from '../P/P';
import { Tag } from '../Tag/Tag';
import { Star } from '../Star/Star';

export const Card = ({ children, isChosen=false, className, ...props }: CardProps): JSX.Element => {
    return (
        <div className={styles.card}
				{...props}
        >
            <P tag='h1' className={styles.title}>TITLE</P>
			<Star className={styles.star} />
			<Tag className={styles.tag}>theme</Tag>
            <P className={styles.info}>{children}</P>
        </div>
    );
};