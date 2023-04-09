import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { themes } from '../../redux/slices/settingsSlice/types';
import styles from './ModernHeader.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moon from '../../assets/images/moon.png';
import sun from '../../assets/images/sun.png';
import { setCloseBurger, setOpenBurger, setTheme } from '../../redux/slices/settingsSlice/slice';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectBurger } from '../../redux/slices/settingsSlice/selectors';

interface ModernHeaderProps {
	theme: string;
}

export const ModernHeader: FC<ModernHeaderProps> = ({ theme }) => {
	const dispatch = useAppDispatch();
	const burgerIsOpen = useAppSelector(selectBurger);
	const onClickTheme = (theme: themes) => {
		dispatch(setTheme(theme));
		localStorage.setItem('theme', theme);
	};
	const header = classNames('container', styles.header, {
		[styles.headerDark]: theme === themes.DARK,
		[styles.headerLight]: theme === themes.LIGHT,
	});

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
		<header className={header}>
			<Link to="/">WebReactor</Link>
			<nav className={nav}>
				<ul>
					<li>
						<NavLink to={'/modern-sites/html'} onClick={onClickCloseBurger}>
							{({ isActive }) => (
								<span className={isActive ? styles.active : undefined}>
									HTML
								</span>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink to={'/modern-sites/css'} onClick={onClickCloseBurger}>
							{({ isActive }) => (
								<span className={isActive ? styles.active : undefined}>
									CSS
								</span>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink to={'/modern-sites/js'} onClick={onClickCloseBurger}>
							{({ isActive }) => (
								<span className={isActive ? styles.active : undefined}>JS</span>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink to={'/modern-sites/react'} onClick={onClickCloseBurger}>
							{({ isActive }) => (
								<span className={isActive ? styles.active : undefined}>
									REACT
								</span>
							)}
						</NavLink>
					</li>
				</ul>
			</nav>
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
		</header>
	);
};
