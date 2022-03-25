import { TagProps } from './Tag.props';
import styles from './Tag.module.scss';
import cn from 'classnames';

export const Tag = ({ children, className, ...props }: TagProps): JSX.Element => {
	return(
		<div className={styles.tag}
			{...props}>
		{children}
		</div>
	);
};