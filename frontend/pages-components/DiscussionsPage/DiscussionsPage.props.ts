import { Topic, Article, Thread } from '../../pages/app/types';
export interface DiscussionsPageProps {
	objects: Article[] | Topic[] | Thread[]	
}