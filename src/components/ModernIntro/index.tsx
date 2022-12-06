import React, { FC, useState } from 'react';
import { animated, config, useSpring, useTransition } from 'react-spring';
import bg from '../../assets/images/modern-main.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './ModernIntro.module.scss';
import { Heading1 } from '../Heading1';
import classNames from 'classnames';
import { Body1 } from '../Body1';

interface ModernIntroProps {
	theme: string;
}

export const ModernIntro: FC<ModernIntroProps> = ({ theme }) => {
	const [flip, set] = useState(false);
	const words = ['Проект:', 'Как', 'Работают', 'Современные', 'Сайты?'];
	const { scroll } = useSpring({
		scroll: (words.length - 1) * 62,
		from: { scroll: 10 },
		config: { mass: 1, tension: 200, friction: 200 },
		delay: 1000,
		onRest: () => set(!flip),
	});
	const transitions = useTransition(flip, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		reverse: flip,
		delay: 200,
		config: config.molasses,
	});

	return (
		<div>
			<div className={styles.intro}>
				<div className={styles.background}>
					<LazyLoadImage
						className={styles.backgroundImage}
						src={bg}
						effect="blur"
					/>
					<div className={styles.backgroundShape}></div>
				</div>
				<Heading1 theme={theme}>
					<animated.div
						className={classNames(
							styles.title,
							flip ? styles.titleAnimate : ''
						)}
						scrollTop={scroll}
					>
						{words.map((word, i) => (
							<div
								key={`${word}_${i}`}
								style={{
									width: '100%',
									height: 60,
									textAlign: 'center',
									opacity: flip ? 0 : 1,
									transition: 'all 0.3s',
								}}
							>
								{word}
							</div>
						))}
					</animated.div>
				</Heading1>
				<div className={styles.animateContent}>
					<Heading1
						theme={theme}
						className={classNames(
							styles.title,
							styles.unVisible,
							flip ? styles.animateTitle : ''
						)}
					>
						Как работают современные сайты?
					</Heading1>
					{transitions(
						(style, item) =>
							item && (
								<Body1 className={styles.desc} theme={theme}>
									<animated.div style={style}>Scroll Down</animated.div>
								</Body1>
							)
					)}
				</div>
			</div>
		</div>
	);
};
