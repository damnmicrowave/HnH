import styles from './Partners.module.scss';
import cn from 'classnames';
import { Button, P } from '../../components';

export const Partners = (): JSX.Element => {
    return (
		<div className={styles.wrapper}>
			<P tag='h1'>OUR PARTNERS</P>
			<P>Sample text about our partners</P>
		</div>
    );
};