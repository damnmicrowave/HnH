import { Topic, Article, Thread } from '../../pages/app/types';
export interface ArticlesPageProps {
	objects: Article[] | Topic[] | Thread[]		
}