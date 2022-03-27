import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
	children: ReactNode;
	tag?: 'h1' | 'h2' | 'normal'
}