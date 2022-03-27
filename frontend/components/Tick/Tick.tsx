import { TickProps } from './Tick.props';
import styles from './Tick.module.scss';
import cn from 'classnames';
import TickIcon from './Tick.svg';
import { useState, useEffect, KeyboardEvent } from 'react';

export const Tick = ({ isChosen=false, setIsChosen, ...props }: TickProps): JSX.Element => {
	const [isChosenTick, setIsChosenTick] = useState<boolean>(isChosen);

	return(
		<div {...props}>
				<TickIcon onClick={() => setIsChosenTick(x => !x)} className={cn(styles.tick, {
						[styles.tickChosen]: isChosenTick,
					})}/>
		</div>
	);
};
