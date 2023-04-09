import React, { FC } from 'react';
import { Heading2 } from '../Heading2';
import { Heading3 } from '../Heading3';
import { Body1 } from '../Body1';
import frameworks from '../../assets/images/frameworks.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Frameworks.module.scss';
import classNames from 'classnames';
interface FrameworksProps {
	theme: string;
}

export const Frameworks: FC<FrameworksProps> = ({ theme }) => {
	const cx = classNames('container', styles.inner);
	return (
		<section className={cx}>
			<Heading2 className={styles.title} theme={theme}>
				Но давайте взглянем правде в глаза
			</Heading2>
			<div className={styles.item}>
				<div className={styles.content}>
					<Heading3 className={styles.subtitle} theme={theme}>
						Сайты уже давно переросли в нечто большее
					</Heading3>
					<Body1 theme={theme}>
						На данный момент есть “Фреймворки” - каркас для написания
						приложений, которые облегчают разработку, и дают чёткую структуру.
						Их используют в огромных компаниях. Есть 3 самых популярных
						фреймворка (1-го из них иногда называют библиотекой): VUE, REACT,
						ANGULAR
					</Body1>
				</div>
				<LazyLoadImage src={frameworks}  effect="blur" />
			</div>
		</section>
	);
};
