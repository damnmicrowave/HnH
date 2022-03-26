import { ArticleProps } from './Article.props';
import styles from './Article.module.scss';
import cn from 'classnames';
import { P } from '../P/P';

export const Article = ({ title, children, className, ...props }: ArticleProps): JSX.Element => {
	return(
		<>
			<P tag='h2'>{title}</P>
			<P>{children}</P>
		</>
	);
};