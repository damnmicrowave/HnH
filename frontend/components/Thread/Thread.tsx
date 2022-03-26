import { ThreadProps } from './Thread.props';
import styles from './Thread.module.scss';
import cn from 'classnames';
import UserIcon from './User.svg';
import ReplyIcon from './Reply.svg';
import { format } from 'date-fns';

export const Thread = ({ children, username, comment, date, className, ...props }: ThreadProps): JSX.Element => {
	return(
		<div className={styles.thread}
			{...props}>
				<UserIcon className={styles.user} />
				<div className={styles.username}>{username}</div>

				<div className={styles.date}>{format(new Date(date), 'dd MMMM yyyy')}</div>
				<div className={styles.comment}>{comment}</div>

				<div className={styles.replyBlock}>
					<div className={styles.reply}>Reply</div>
					<ReplyIcon className={styles.replyIcon} />
				</div>
		
		</div>
	);
};