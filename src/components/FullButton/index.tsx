import React, { FC } from 'react';
import styles from './FullButton.module.scss';
import classNames from 'classnames';
import { Link } from 'react-scroll';

interface FullButton {
	children: React.ReactNode;
	className?: string;
	type: string;
}

export const FullButton: FC<FullButton> = ({ children, className, type }) => {
	const cx = classNames(className, styles.btn);
	if (type === 'link') {
		return (
			<Link
				smooth={true}
				href="#"
				duration={500}
				className={cx}
				to={'portfolio'}
			>
				{children}
			</Link>
		);
	}
	return <button className={cx}>{children}</button>;
};
