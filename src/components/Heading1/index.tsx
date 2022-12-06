import React, { FC } from 'react';
import styles from './Heading1.module.scss';
import classNames from 'classnames';
import { themes } from '../../redux/slices/settingsSlice/types';
interface Heading1 {
	children: React.ReactNode;
	theme: string;
	className?: string;
}

export const Heading1: FC<Heading1> = ({ children, theme, className }) => {
	const cx = classNames(className, styles.title, {
		[styles.titleDark]: theme === themes.DARK,
		[styles.titleLight]: theme === themes.LIGHT,
	});
	return <h1 className={cx}>{children}</h1>;
};
