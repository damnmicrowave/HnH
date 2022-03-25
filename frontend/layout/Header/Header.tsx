import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import LogoIcon from './logo.svg';
import PersonIcon from './PersonCircle.svg';
import BurgerIcon from './burger.svg';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

	return(
		<div className={cn(className, styles.header)}>
			<LogoIcon />
			
			<div className={styles.menu}>
				<a>About us</a>
				<a>Tops</a>
				<a>Our partners</a>
			</div>
			<PersonIcon className={styles.person}/>
			<BurgerIcon className={styles.burger}/>
		</div>
	);
};