import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Base.module.scss';
import { themes } from '../../redux/slices/settingsSlice/types';
import { ModernHeader } from '../ModernHeader';
import Start from '../../pages/Start';

interface BaseProps {
	theme: string;
}

export const Base: FC<BaseProps> = ({ theme }) => {
	const intro = classNames(styles.intro, {
		[styles.introDark]: theme === themes.DARK,
		[styles.introLight]: theme === themes.LIGHT,
	});

	return (
		<div className={styles.inner}>
			<ModernHeader theme={theme} />
			<main className={intro}>
				<Start theme={theme} />
			</main>
		</div>
	);
};
