import styles from './Top.module.scss'
import TopProps from './Top.props'
import { Card, P, Button } from 'components'
import { CardProps } from '../../components/Card/Card.props'

export const Top = ({ variant }:CardProps): JSX.Element => {
  // тут надо заменить на данные карточек

  return (
    <div className={styles.wrapper}>
		{variant=='topic' && <P tag="h2">TOP OF TOPICS</P>}
		{variant=='article' && <P tag="h2">TOP OF ARTICLES</P>}
		{variant=='discussion' && <P tag="h2">TOP OF DISCUSSIONS</P>}

    	<div className={styles.cards}>
			{variant == 'topic' && <>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			<Card variant='topic' title={'title'}>description</Card>
			</>}
			{variant == 'article' && <>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			<Card variant='article' title={'title'}>description</Card>
			</>}
			{variant == 'discussion' && <>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			<Card variant='discussion' title={'title'}>description</Card>
			</>}
		</div>
    	<Button>VIEW ALL</Button>
    </div>
  )
}
