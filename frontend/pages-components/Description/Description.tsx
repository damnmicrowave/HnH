import { DescriptionProps } from './Description.props';
import styles from './Description.module.scss';
import cn from 'classnames';
import { Button, P } from '../../components';

export const Description = ({ ...props }: DescriptionProps): JSX.Element => {
    return (
		<div className={styles.wrapper}>
			<P tag='h1'>ACE IS NOT THE END OF LIFE</P>
			<P className={styles.text}>Childhood trauma is a problem that&prime;s 
				often overlooked in the modern world. 
				There are various ways in which it manifests itself, 
				both in one&prime;s early years and adulthood. It truly impacts all spheres 
				of a person&prime;s life, from mental to physical health, from behavior to relationships. 
				Childhood trauma can ruin people&prime;s lives by making it hard for them to develop 
				and study at an average pace. It lowers one&prime;s chances of getting a good education, 
				building a strong and healthy family, and can significantly shorten an individual&prime;s life span.</P>

			<P className={styles.text}>All the terrible effects can be prevented. Paying attention to children and creating safe 
				spaces for them can save thousands of lives, as well as help improve the global quality 
				of life and ensure a greater future for everyone.</P>

			<Button>START QUIZ</Button>
		</div>
    );
};