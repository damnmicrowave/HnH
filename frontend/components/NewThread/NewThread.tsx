import { NewThreadProps } from './NewThread.props';
import styles from './NewThread.module.scss';
import cn from 'classnames';
import UserIcon from './User.svg';
import ReplyIcon from './Reply.svg';
import { format } from 'date-fns';
import { Button } from '../Button/Button';
import { Textarea } from '../Textarea/Textarea';

export const NewThread = ({ children, username, className, ...props }: NewThreadProps): JSX.Element => {
	return(
		<div className={styles.thread}
			{...props}>
				<UserIcon className={styles.user} />
				<div className={styles.username}>{username}</div>

				<div className={styles.date}>{format(new Date(), 'dd MMMM yyyy')}</div>

				<Textarea className={styles.comment} />
				<div className={styles.submit}>
					<Button >Submit</Button>
				</div>
				
		</div>
	);
};