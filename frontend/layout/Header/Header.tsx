import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import LogoIcon from './logo.svg';
import PersonIcon from './PersonCircle.svg';
import BurgerIcon from './burger.svg';
import Link from 'next/link';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

	return(
		<div className={cn(className, styles.header)}>
			<Link href='/' passHref><LogoIcon /></Link>
			
			<div className={styles.menu}>
				<Link href={`\\topics`}><a>Topics</a></Link>
				<Link href={`\\articles`}><a>Articles</a></Link>
				<Link href={`\\threads`}><a>Threads</a></Link>
				<Link href={`\\`}><a>Main</a></Link>
			</div>
			<PersonIcon className={styles.person}/>
			<BurgerIcon className={styles.burger}/>
		</div>
	);
};