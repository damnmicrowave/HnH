import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ThreadProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	username: string;
	date: Date;
	comment: string;
}