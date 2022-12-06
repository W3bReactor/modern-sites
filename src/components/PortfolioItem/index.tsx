import React, { FC } from 'react';
import styles from './PortfolioItem.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Heading3 } from '../Heading3';
import { Body2 } from '../Body2';
import classNames from 'classnames';
import { themes } from '../../redux/slices/settingsSlice/types';

interface PortfolioItemProps {
	theme: string;
	text: string;
	title: string;
	src: string;
	url: string;
}

export const PortfolioItem: FC<PortfolioItemProps> = ({
	theme,
	text,
	title,
	src,
	url,
}) => {
	const item = classNames(styles.item, {
		[styles.itemDark]: theme === themes.DARK,
		[styles.itemLight]: theme === themes.LIGHT,
	});
	const link = classNames(styles.link, {
		[styles.linkDark]: theme === themes.DARK,
		[styles.linkLight]: theme === themes.LIGHT,
	});
	return (
		<div className={item}>
			<LazyLoadImage
				width={416}
				height={300}
				className={styles.img}
				src={src}
				effect="blur"
			/>
			<div className={styles.content}>
				<Heading3 className={styles.title} theme={theme}>
					{title}
				</Heading3>
				<Body2 className={styles.text} theme={theme}>
					{text}
				</Body2>
				<a target="_blank" className={link} href={url} rel="noreferrer">
					Посмотреть в Github
				</a>
			</div>
		</div>
	);
};
