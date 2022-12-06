import React, { FC } from 'react';
import styles from './Start.module.scss';
import {
	Body1,
	Body2,
	FullButton,
	Heading2,
	TransparentButton,
} from '../../components';
import frontend from '../../assets/images/frontend.png';
import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
interface StartProps {
	theme: string;
}

const Start: FC<StartProps> = ({ theme }) => {
	const cx = classNames('container', styles.introInner);

	return (
		<>
			<section className={styles.intro}>
				<div className={cx}>
					<div>
						<Heading2 className={styles.title} theme={theme}>
							Привет!
						</Heading2>
						<Body1 className={styles.desc} theme={theme}>
							Здесь находится информация про Frontend, а именно: ссылки на
							полезные материалы, обучающие видеоролики, макеты для вёрстки
						</Body1>
						<TransparentButton
							className={styles.button}
							type={'link'}
							href={'/modern-sites/frontend'}
						>
							Как работают cовременные сайты?
						</TransparentButton>
					</div>
					<LazyLoadImage src={frontend} height={252} width={252} />
				</div>
			</section>
		</>
	);
};

export default Start;
