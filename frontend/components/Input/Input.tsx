import { InputProps } from './Input.props';
import styles from './Input.module.scss';
import cn from 'classnames';

export const Input = ({ className, placeholder, ...props }: InputProps): JSX.Element => {
    return (
        <input className={cn(className, styles.input)} placeholder={placeholder} {...props} />
    );
};