import { Topic, Article, Thread } from '../../pages/app/types';
export interface TopicsPageProps {
	objects: Article[] | Topic[] | Thread[]
}