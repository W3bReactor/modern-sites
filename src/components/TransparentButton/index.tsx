import React, { FC } from 'react';
import styles from './TransparentButton.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface TransparentButtonProps {
	children: React.ReactNode;
	src?: string;
	type: string;
	href?: string;
	className?: string;
}

export const TransparentButton: FC<TransparentButtonProps> = ({
	children,
	src,
	type,
	href,
	className,
}) => {
	if (type === 'link') {
		return (
			<Link
				to={href ? href : '#'}
				className={classNames(className, styles.btn)}
			>
				{src && (
					<span>
						<LazyLoadImage width={24} height={24} effect="blur" src={src} />
					</span>
				)}
				{children}
			</Link>
		);
	}
	if (type === 'a') {
		return (
			<a href={href ? href : '#'} className={classNames(className, styles.btn)}>
				{src && (
					<span>
						<LazyLoadImage width={24} height={24} effect="blur" src={src} />
					</span>
				)}
				{children}
			</a>
		);
	}
	return (
		<button className={classNames(className, styles.btn)}>
			{src && (
				<span>
					<LazyLoadImage width={24} height={24} effect="blur" src={src} />
				</span>
			)}
			{children}
		</button>
	);
};
