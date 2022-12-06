import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Heading2.module.scss';
import { themes } from '../../redux/slices/settingsSlice/types';

interface Heading2Props {
	children: React.ReactNode;
	theme: string;
	className?: string;
}

export const Heading2: FC<Heading2Props> = ({ children, theme, className }) => {
	const cx = classNames(className, styles.title, {
		[styles.titleDark]: theme === themes.DARK,
		[styles.titleLight]: theme === themes.LIGHT,
	});

	return <h2 className={cx}>{children}</h2>;
};
