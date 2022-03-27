import { Article, Topic, Thread } from 'pages/app/types';

export default interface WideTopProps {
	variant: 'article' | 'topic' | 'thread'
	objects: Article[] | Topic[] | Thread[]
}