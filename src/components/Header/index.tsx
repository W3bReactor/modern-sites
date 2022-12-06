import React, { FC } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames';
import { TransparentButton } from '../TransparentButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moon from '../../assets/images/moon.png';
import sun from '../../assets/images/sun.png';
import { themes } from '../../redux/slices/settingsSlice/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
	setCloseBurger,
	setOpenBurger,
	setTheme,
} from '../../redux/slices/settingsSlice/slice';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';
import { selectBurger } from '../../redux/slices/settingsSlice/selectors';

interface HeaderProps {
	theme: string;
}

export const Header: FC<HeaderProps> = ({ theme }) => {
	const ScrollLink = Scroll.Link;
	const dispatch = useAppDispatch();
	const burgerIsOpen = useAppSelector(selectBurger);
	const header = classNames('container', styles.header, {
		[styles.headerDark]: theme === themes.DARK,
		[styles.headerLight]: theme === themes.LIGHT,
	});

	const onClickTheme = (theme: themes) => {
		dispatch(setTheme(theme));
		localStorage.setItem('theme', theme);
	};

	const onClickBurger = () => {
		if (!burgerIsOpen) {
			dispatch(setOpenBurger());
		} else {
			dispatch(setCloseBurger());
		}
	};
	const onClickCloseBurger = () => {
		dispatch(setCloseBurger());
	};

	const nav = classNames(burgerIsOpen ? styles.burgerOpen : styles.burgerClose);
	const burger = classNames(
		{
			[styles.burgerDark]: theme === themes.DARK,
			[styles.burgerLight]: theme === themes.LIGHT,
			[styles.burgerClosed]: burgerIsOpen,
		},
		styles.burger
	);

	return (
		<Element name="main">
			<header className={header}>
				<Link to="/">WebReactor</Link>
				<nav className={nav}>
					<ul>
						<li>
							<ScrollLink
								onClick={onClickCloseBurger}
								activeClass={styles.active}
								spy={true}
								duration={500}
								smooth={true}
								to={'main'}
								href="#"
							>
								Главная
							</ScrollLink>
						</li>
						<li>
							<ScrollLink
								onClick={onClickCloseBurger}
								activeClass={styles.active}
								spy={true}
								href="#"
								to="portfolio"
								smooth={true}
								duration={500}
							>
								Портфолио
							</ScrollLink>
						</li>
						<li>
							<ScrollLink
								onClick={onClickCloseBurger}
								activeClass={styles.active}
								to="about"
								spy={true}
								smooth={true}
								duration={750}
								href="#"
							>
								Обо мне
							</ScrollLink>
						</li>
						<li>
							<ScrollLink
								onClick={onClickCloseBurger}
								activeClass={styles.active}
								to="way"
								spy={true}
								smooth={true}
								duration={1000}
								href="#"
							>
								Весь путь
							</ScrollLink>
						</li>
					</ul>
				</nav>
				<div className={styles.right}>
					<button onClick={onClickBurger} className={burger}>
						<span></span>
					</button>
					{theme === themes.LIGHT && (
						<button
							onClick={() => onClickTheme(themes.DARK)}
							className={styles.img}
						>
							<LazyLoadImage height={54} effect="blur" src={moon} />
						</button>
					)}
					{theme === themes.DARK && (
						<button
							onClick={() => onClickTheme(themes.LIGHT)}
							className={styles.img}
						>
							<LazyLoadImage height={54} width={54} effect="blur" src={sun} />
						</button>
					)}
					<TransparentButton href="mailto:REAKTORYAN@yandex.ru" type="a">
						Связаться со мной
					</TransparentButton>
				</div>
			</header>
		</Element>
	);
};
