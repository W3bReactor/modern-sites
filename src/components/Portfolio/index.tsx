import React, { FC } from 'react';
import { Heading2 } from '../Heading2';
import classNames from 'classnames';
import styles from './Portfolio.module.scss';
import { TransparentButton } from '../TransparentButton';
import github from '../../assets/images/github.png';
import exampleImage from '../../assets/images/example.png';
import { PortfolioItem } from '../PortfolioItem';
import { themes } from '../../redux/slices/settingsSlice/types';
import { Element } from 'react-scroll';
import work1 from '../../assets/images/work-1.png';
import work2 from '../../assets/images/work-2.png';
import work3 from '../../assets/images/work-3.png';
interface PortfolioProps {
	theme: string;
}

export const Portfolio: FC<PortfolioProps> = ({ theme }) => {
	const cx = classNames('container', styles.portfolio, {
		[styles.portfolioDark]: theme === themes.DARK,
		[styles.portfolioLight]: theme === themes.LIGHT,
	});
	return (
		<Element name="portfolio">
			<section className={cx}>
				<div className={styles.portfolioTop}>
					<Heading2 theme={theme}>Моё портфолио</Heading2>
					<TransparentButton
						href="https://github.com/W3bReactor"
						type="a"
						src={github}
					>
						Github
					</TransparentButton>
				</div>
				<div className={styles.grid}>
					<PortfolioItem
						theme={theme}
						src={work1}
						title="CreateX"
						text="Многостраничный сайт. Довольно долго пришлось верстать"
						url="https://w3breactor.github.io/createX/"
					/>
					<PortfolioItem
						theme={theme}
						src={work2}
						title="Blog"
						text="Сайт с канала BrainsCloud, переделал на React"
						url="https://w3breactor.github.io/React-Projects/"
					/>
					<PortfolioItem
						theme={theme}
						src={work3}
						title="MoonRiver"
						text="Довольно интересный по сетке сайт. Понравилось верстать"
						url="https://w3breactor.github.io/Moonriver/"
					/>
				</div>
			</section>
		</Element>
	);
};
