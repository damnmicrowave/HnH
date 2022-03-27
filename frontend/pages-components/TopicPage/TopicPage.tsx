import { TopicPageProps } from './TopicPage.props';
import styles from './TopicPage.module.scss';
import { Button, NewThread, P, Star, Thread } from '../../components';
import { WideTop } from '../WideTop/WideTop';

export const TopicPage = ({ objects }: TopicPageProps): JSX.Element => {
		if (objects === undefined) {
			return <></>
		}
		else {
			return (
		<>
			<P tag='h1' className={styles.title}>Threads about topic {objects[0].id}:</P>
					
			{objects.map(o => 
			<div key={o.id}>
				<div className={styles.widetop}><WideTop objects={objects} variant={'thread'} /></div>
				<div className={styles.button}>
					<Button>VIEW MORE</Button>
				</div>
			</div>)}
		</>
	)
}}