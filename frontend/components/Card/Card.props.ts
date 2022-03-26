import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    isChosen?: boolean;
    title: string;
    href?: string;
    variant: 'article' | 'topic' | 'discussion';
}
