import { DescriptionProps } from './Description.props';
import styles from './Description.module.scss';
import cn from 'classnames';
import { Button, P } from '../../components';

export const Description = ({ ...props }: DescriptionProps): JSX.Element => {
    return (
		<div className={styles.wrapper}>
			<P tag='h1'>ACE IS NOT THE END OF LIFE</P>
			<P>блабла про людей</P>
			<Button>START QUIZ</Button>
		</div>
    );
};