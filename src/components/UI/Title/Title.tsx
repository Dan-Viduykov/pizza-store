import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Title.module.scss';

type Titles = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
	className?: string;
	title?: Titles;
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