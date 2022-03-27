import { ArticleProps } from './Article.props';
import styles from './Article.module.scss';
import cn from 'classnames';
import { P } from '../P/P';
import { Star } from '../Star/Star';

export const Article = ({ title, children, className, ...props }: ArticleProps): JSX.Element => {
	return(
		<div>
			<div className={styles.title}>
				<P tag='h1'>{title}</P>
				<Star className={styles.titleI} />
			</div>
			<P>{children}</P>
		</div>
	);
};
