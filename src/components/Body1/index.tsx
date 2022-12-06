import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Body1.module.scss';
import { themes } from '../../redux/slices/settingsSlice/types';

interface Body1Props {
	children: React.ReactNode;
	theme: string;
	className?: string;
}

export const Body1: FC<Body1Props> = ({ children, theme, className }) => {
	const cx = classNames(className, styles.text, {
		[styles.textDark]: theme === themes.DARK,
		[styles.textLight]: theme === themes.LIGHT,
	});
	return <p className={cx}>{children}</p>;
};
