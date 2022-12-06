import React, { FC } from 'react';
import styles from './Heading3.module.scss';
import classNames from 'classnames';
import { themes } from '../../redux/slices/settingsSlice/types';

interface Heading3Props {
	children: React.ReactNode;
	theme: string;
	className?: string;
}

export const Heading3: FC<Heading3Props> = ({ children, theme, className }) => {
	const cx = classNames(className, styles.title, {
		[styles.titleDark]: theme === themes.DARK,
		[styles.titleLight]: theme === themes.LIGHT,
	});
	return <h3 className={cx}>{children}</h3>;
};
