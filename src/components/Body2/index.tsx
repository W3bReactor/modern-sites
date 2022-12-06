import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Body2.module.scss';
import { themes } from '../../redux/slices/settingsSlice/types';

interface Body2Props {
	children: React.ReactNode;
	className?: string;
	theme: string;
}

export const Body2: FC<Body2Props> = ({ theme, className, children }) => {
	const cx = classNames(className, styles.text, {
		[styles.textDark]: theme === themes.DARK,
		[styles.textLight]: theme === themes.LIGHT,
	});
	return <p className={cx}>{children}</p>;
};
