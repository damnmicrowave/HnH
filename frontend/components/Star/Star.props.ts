import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface StarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
	isChosen?: boolean;
	setIsChosen?: (isChosen:boolean) => void;
}