import React, { FC } from 'react';
import styles from './Project.module.scss';
import classNames from 'classnames';
import { Heading2 } from '../Heading2';
import { TransparentButton } from '../TransparentButton';
import { themes } from '../../redux/slices/settingsSlice/types';
import { Element } from 'react-scroll';

interface WayProps {
	theme: string;
}

export const Project: FC<WayProps> = ({ theme }) => {
	const cx = classNames('container', styles.way, {
		[styles.wayDark]: theme === themes.DARK,
		[styles.wayLight]: theme === themes.LIGHT,
	});
	return (
		<Element name="way">
			<section className={cx}>
				<Heading2 className={styles.title} theme={theme}>
					Проект «Как работают современные сайты?»
				</Heading2>
				<TransparentButton href="modern-sites" type="link">
					Открыть
				</TransparentButton>
			</section>
		</Element>
	);
};
