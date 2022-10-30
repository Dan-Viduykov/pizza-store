import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Title.module.scss';

const enum TextTypes {
    'display',
    'ft__8',
    'ft__7',
    'ft__6',
    'ft__5',
    'ft__4',
    'ft__3',
    'ft__2',
    'ft__1',
    'subtitle',
    'body_large',
    'body_middle',
    'body_small',
}

type Titles = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
	className?: string;
	title?: Titles;
	textStyle?: keyof typeof TextTypes;
}

const Title: FC<PropsWithChildren<TitleProps>> = ({className, title, children, ...props}) => {
	const Tag = `${title}` as keyof JSX.IntrinsicElements;

	return (
		<Tag className={`${styles.title} ${className}`} {...props}>
			{children}
		</Tag>
    )
}

export default Title