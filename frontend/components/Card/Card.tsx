import { CardProps } from './Card.props';
import styles from './Card.module.scss';
import cn from 'classnames';
import { P } from '../P/P';
import { Tag } from '../Tag/Tag';
import StarIcon from './Star.svg';

export const Card = ({ children, className, ...props }: CardProps): JSX.Element => {
    return (
        <div className={styles.card}
            {...props}
        >
			<div className={styles.title}>
				<P tag='h1'>TITLE</P>
				<StarIcon />
			</div>
			<Tag className={styles.tag}>theme</Tag>
            <P className={styles.info}>{children}</P>
        </div>
    );
};