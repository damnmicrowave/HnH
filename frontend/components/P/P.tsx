import { ParagraphProps } from './P.props';
import styles from './P.module.scss';
import cn from 'classnames';

export const P = ({ tag='normal', children, className, ...props }: ParagraphProps): JSX.Element => {
	return(
		<p
			className={cn(styles.p, className, {
				[styles.h1]: tag=='h1',
				[styles.h2]: tag=='h2',
				[styles.normal]: tag=='normal'
			})}
				{...props}
		>
			{children}
		</p>
	);
};