import styles from './WideTop.module.scss'
import { Card, P, Button } from 'components'
import WideTopProps from './WideTop.props'

export const WideTop = ({ variant, objects }: WideTopProps): JSX.Element => {
	if (objects === undefined) {
         return <></>;
    }
	else {
		return (
			<div className={styles.cards}>
				{objects.map(o => <Card key={o.id} variant={variant} object={o}>description</Card>)}
			</div>
		)
	}
}
