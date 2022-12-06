import React, { FC } from 'react';
import { SubTitle } from '../SubTitle';
import classNames from 'classnames';
import styles from './Intro.module.scss';
import { Heading1 } from '../Heading1';
import { Body1 } from '../Body1';
import { FullButton } from '../FullButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import react from '../../assets/images/react.png';
import { themes } from '../../redux/slices/settingsSlice/types';
import { Element } from 'react-scroll';

interface IntroProps {
	theme: string;
}

export const Intro: FC<IntroProps> = ({ theme }) => {
	const introInner = classNames('container', styles.introInner, {
		[styles.introInnerDark]: theme === themes.DARK,
		[styles.introInnerLight]: theme === themes.LIGHT,
	});
	const intro = classNames(styles.intro, {
		[styles.introDark]: theme === themes.DARK,
		[styles.introLight]: theme === themes.LIGHT,
	});
	const reactCx = classNames(styles.react, {
		[styles.reactDark]: theme === themes.DARK,
		[styles.reactLight]: theme === themes.LIGHT,
	});
	return (
		<section className={intro}>
			<div className={introInner}>
				<div className={styles.content}>
					<SubTitle className={styles.subTitle} theme={theme}>
						Привет, меня зовут Инсаф
					</SubTitle>
					<Heading1 className={styles.title} theme={theme}>
						Я Frontend-разработчик
					</Heading1>
					<Body1 className={styles.text} theme={theme}>
						На данный момент, мне 14 лет. Хочу за свою жизнь достигнуть{' '}
						<span>высоких</span> результатов.
					</Body1>
					<FullButton type="link">Продолжить</FullButton>
				</div>
				<div className={styles.item}>
					<div className={styles.row}>
						<LazyLoadImage effect="blur" src={html} width={152} height={140} />
						<LazyLoadImage
							className={styles.css}
							effect="blur"
							src={css}
							width={152}
							height={159}
						/>
						<LazyLoadImage
							className={styles.js}
							effect="blur"
							src={js}
							width={166}
							height={184}
						/>
					</div>
					<div className={styles.imgInner}>
						<LazyLoadImage
							className={reactCx}
							effect="blur"
							src={react}
							width={308}
							height={165}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
