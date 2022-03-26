import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface NewThreadProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	username: string;
}