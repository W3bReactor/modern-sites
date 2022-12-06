import React, { FC } from 'react';
import styles from './SubTitle.module.scss';
import classNames from 'classnames';
import { themes } from '../../redux/slices/settingsSlice/types';

interface SubTitleProps {
	children: React.ReactNode;
	theme: string;
	className?: string;
}

export const SubTitle: FC<SubTitleProps> = ({ className, children, theme }) => {
	const cx = classNames(className, styles.subTitle, {
		[styles.subTitleDark]: theme === themes.DARK,
		[styles.subTitleLight]: theme === themes.LIGHT,
	});
	return (
		<>
			<span className={cx}>{children}</span>
		</>
	);
};
