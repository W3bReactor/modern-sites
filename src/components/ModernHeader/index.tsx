import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { themes } from '../../redux/slices/settingsSlice/types';
import styles from './ModernHeader.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moon from '../../assets/images/moon.png';
import sun from '../../assets/images/sun.png';
import { setTheme } from '../../redux/slices/settingsSlice/slice';
import classNames from 'classnames';
import { useAppDispatch } from '../../redux/hooks';

interface ModernHeaderProps {
	theme: string;
}

export const ModernHeader: FC<ModernHeaderProps> = ({ theme }) => {
	const dispatch = useAppDispatch();
	const onClickTheme = (theme: themes) => {
		dispatch(setTheme(theme));
		localStorage.setItem('theme', theme);
	};
	const header = classNames('container', styles.header, {
		[styles.headerDark]: theme === themes.DARK,
		[styles.headerLight]: theme === themes.LIGHT,
	});

	return (
		<header className={header}>
			<Link to="/">WebReactor</Link>
			<nav>
				<ul>
					<li>
						<NavLink to={'/modern-sites/html'}>
							{({ isActive }) => (
								<span className={isActive ? styles.active : undefined}>
									HTML
								</span>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink to={'/modern-sites/css'}>
							{({ isActive }) => (
								<span className={isActive ? styles.active : undefined}>
									CSS
								</span>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink to={'/modern-sites/js'}>
							{({ isActive }) => (
								<span className={isActive ? styles.active : undefined}>JS</span>
							)}
						</NavLink>
					</li>
					<li>
						<NavLink to={'/modern-sites/react'}>
							{({ isActive }) => (
								<span className={isActive ? styles.active : undefined}>
									REACT
								</span>
							)}
						</NavLink>
					</li>
				</ul>
			</nav>
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
