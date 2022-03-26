import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TickProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
	isChosen?: boolean;
	setIsChosen?: (isChosen:boolean) => void;
}