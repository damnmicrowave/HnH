import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ArticleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
	children: ReactNode;
	title: string;
}