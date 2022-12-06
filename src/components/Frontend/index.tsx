import React, { FC } from 'react';
import { Heading1 } from '../Heading1';
import classNames from 'classnames';
import { Body1 } from '../Body1';
import styles from './Fronted.module.scss';
import site from '../../assets/images/site-work.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Heading2 } from '../Heading2';
import { Heading3 } from '../Heading3';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import bricks from '../../assets/images/bricks.png';
import paints from '../../assets/images/paints.png';
import house from '../../assets/images/house.png';
import cupboard from '../../assets/images/cupboard.png';
import { DoubleContent } from '../DoubleContent';
import { Frameworks } from '../Frameworks';
import { NavLink } from 'react-router-dom';
interface FrontendProps {
	theme: string;
}
export const Frontend: FC<FrontendProps> = ({ theme }) => {
	const cx = classNames('container');
	return (
		<>
			<section className={cx}>
				<div className={styles.inner}>
					<div className={styles.content}>
						<Heading1 className={styles.title} theme={theme}>
							Как работают современные сайты?
						</Heading1>
						<Body1 theme={theme}>
							О внутреннем строении сайтов -{' '}
							<span className={styles.primary}>понятным языком</span>
						</Body1>
					</div>
					<LazyLoadImage width={438} height={563} effect="blur" src={site} />
				</div>
			</section>
			<section className={classNames('container', styles.section)}>
				<Heading2 className={styles.baseTitle} theme={theme}>
					Для начала, поймём основы
				</Heading2>
				<Heading3 className={styles.subtitle} theme={theme}>
					Есть 3 важнейших элемента на странице:
				</Heading3>
				<ul className={styles.grid}>
					<li className={styles.item}>
						<figure className={styles.figure}>
							<LazyLoadImage
								effect="blur"
								src={html}
								height={195}
								width={183}
							/>
							<figcaption className={styles.figcaption}>
								<Body1 theme={theme}>HTML</Body1>
							</figcaption>
						</figure>
					</li>
					<li className={styles.item}>
						<figure className={styles.figure}>
							<LazyLoadImage effect="blur" src={css} height={195} width={200} />
							<figcaption className={styles.figcaption}>
								<Body1 theme={theme}>CSS</Body1>
							</figcaption>
						</figure>
					</li>
					<li className={styles.item}>
						<figure className={styles.figure}>
							<LazyLoadImage effect="blur" src={js} height={184} width={166} />
							<figcaption className={styles.figcaption}>
								<Body1 theme={theme}>Javascript</Body1>
							</figcaption>
						</figure>
					</li>
				</ul>
			</section>
			<DoubleContent
				theme={theme}
				title={'HTML'}
				text={
					'Является некоторыми кирпичиками из которых создаётся каркас сайта. Поэтому он и называется языком гипертекстовой разметки. Прошу заметить, что это не язык программирования, но важная часть в сфере Frontend’а и разработки сайтов'
				}
				image={bricks}
				type={'left'}
			/>
			<DoubleContent
				theme={theme}
				title={'CSS'}
				text={
					'Является краской, и думаю очевидно - им мы красим наши кирпичи, т.е HTML-код. Называются они - Каскадные Таблицы Стилей. В CSS мы можем обращаться к каждому элементу по отдельности (можем красить каждый кирпич по отдельности), а также использовать наследование (мы покрасили один кирпич, но кирпичи ниже него тоже покрасились в цвет выше стоящего кирпича). Это также не является языком программирования, но точно также является важной частью в разработке сайтов.'
				}
				image={paints}
				type={'right'}
			/>
			<DoubleContent
				theme={theme}
				title={'JAVASCRIPT'}
				text={
					'JS помогает нам в доме: сделать освещение,  водоснабжение, отопление. Если переводить на сайты, это делать их динамичными, т.е к примеру: создать поиск, модальные окна,  сортировка. Это всё - интерфейс, на всё мы можем потыкать и оно будет взаимодействовать с нами. Благодаря Javascript сайты не статичные, как раз из-за него на сайтах смогли сделать: анимации, переводы денег онлайн, игры, мнгновенно пересылать сообщения, видеоконференции и.т.д\n'
				}
				image={house}
				type={'left'}
			/>
			<Frameworks theme={theme} />
			<DoubleContent
				theme={theme}
				title={'Зачем нужны фреймворки?'}
				text={
					'В них есть одна способность. Покажу на примере: есть дом, в нём захотели добавить новый шкаф. Представим, что в этом мире, чтобы что-то добавить, изменить или удалить, нужно перестроить дом заново с изменениями. Как раз эту проблему и решает фреймворк, мы не хотим заного отрисовывать шапку сайта ( или же навигацию), нам нужно изменить только ту часть, которую мы захотели изменить. Тут на помощь приходит функция фреймворка - страница не перезагружается, в итоге мы получаем экономию ресурсов, а также быстрый отклик. \n'
				}
				image={cupboard}
				type={'left'}
			/>
			<footer className={classNames('container', styles.footer)}>
				<Heading2 className={styles.footerTitle} theme={theme}>
					Более подробно смотрите в навигации
					<NavLink to={'/modern-sites/html'}>HTML</NavLink>,
					<NavLink to={'/modern-sites/css'}>CSS</NavLink>,
					<NavLink to={'/modern-sites/js'}>JS</NavLink>,
					<NavLink to={'/modern-sites/react'}>REACT</NavLink>
				</Heading2>
			</footer>
		</>
	);
};
