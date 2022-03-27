import styles from './WideTop.module.scss'
import { Card, P, Button } from 'components'
import { CardProps } from '../../components/Card/Card.props'

export const WideTop = ({ variant }:CardProps): JSX.Element => {

  return (
    	<div className={styles.cards}>
			{variant == 'topic' && <>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			
			</>}
			{variant == 'article' && <>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			</>}
			{variant == 'discussion' && <>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			</>}
		</div>
  )
}
