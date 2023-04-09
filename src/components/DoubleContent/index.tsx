import React, { FC } from 'react';
import { Heading2 } from '../Heading2';
import { Body1 } from '../Body1';
import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './DoubleContent.module.scss';
interface DoubleContentProps {
	theme: string;
	title: string;
	text: string;
	image: string;
	type: string;
}

export const DoubleContent: FC<DoubleContentProps> = ({
	theme,
	title,
	text,
	image,
	type,
}) => {
	const cx = classNames(
		'container',
		styles.inner,
		type === 'right' ? styles.innerRight : undefined
	);
	return (
		<section className={cx}>
			<div className={styles.content}>
				<Heading2 className={styles.title} theme={theme}>
					{title}
				</Heading2>
				<Body1 theme={theme}>{text}</Body1>
			</div>
			<LazyLoadImage src={image} effect={'blur'} />
		</section>
	);
};
