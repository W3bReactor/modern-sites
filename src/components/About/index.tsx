import React, { FC } from 'react';
import me from '../../assets/images/me.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames';
import styles from './About.module.scss';
import { Heading2 } from '../Heading2';
import { Body1 } from '../Body1';
import { themes } from '../../redux/slices/settingsSlice/types';
import { Element } from 'react-scroll';

interface AboutProps {
	theme: string;
}

export const About: FC<AboutProps> = ({ theme }) => {
	const cx = classNames('container', styles.about, {
		[styles.aboutDark]: theme === themes.DARK,
		[styles.aboutLight]: theme === themes.LIGHT,
	});
	return (
		<Element name="about">
			<section className={cx}>
				<LazyLoadImage className={styles.img} effect="blur" src={me} />
				<div className={styles.content}>
					<Heading2 className={styles.title} theme={theme}>
						Обо мне
					</Heading2>
					<Body1 className={styles.text} theme={theme}>
						Зовут Гарифуллин Инсаф, живу в городе Нижнекамск. Люблю
						программирование, а так-же постягать задачи. Пытаюсь прознать
						Веб-разработку, а именно Front-end часть. Нравится, то что можно
						узнать кучу нового (как-будто какая-либо наука).
					</Body1>
					<Body1 theme={theme}>
						За свой небольшой путь, смог изучить HTML, CSS (SCSS), JavaScript
						(TypeScript), React (Redux Toolkit, RTK Query).
					</Body1>
				</div>
			</section>
		</Element>
	);
};
