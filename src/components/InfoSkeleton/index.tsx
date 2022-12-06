import React, { FC, useEffect } from 'react';
import styles from './InfoSkeleton.module.scss';
import classNames from 'classnames';
import { Heading2 } from '../Heading2';
import { Body1 } from '../Body1';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ILanguage } from '../../data/types';
import { useParams } from 'react-router-dom';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min.js';
import { Video } from '../Video';

interface InfoSkeletonProps {
	theme: string;
	items: ILanguage[];
}

export const InfoSkeleton: FC<InfoSkeletonProps> = ({ theme, items }) => {
	const { content } = useParams();
	const item = items.find((obj) => obj.language === content);
	const cx = classNames('container', styles.inner);

	useEffect(() => {
		Prism.highlightAll();
		window.scrollTo(0, 0);
	}, [content]);
	if (!item) {
		return <div>Ничего не найдено:(</div>;
	}

	return (
		<section className={cx}>
			<div className={styles.top}>
				<div className={styles.content}>
					<Heading2 className={styles.title} theme={theme}>
						{item.language}
					</Heading2>
					<Body1 theme={theme}>
						<span className={styles.language}>{item.language}</span> -{' '}
						{item.description}
					</Body1>
				</div>
				<LazyLoadImage
					className={styles.img}
					src={item.image}
					height={320}
					width={300}
					effect="blur"
				/>
			</div>
			<div className={styles.middle}>
				<Body1 theme={theme}>Пример кода:</Body1>
				<pre>
					<code className={`language-${item.highlightLanguage}`}>
						{item.code}
					</code>
				</pre>
			</div>
			<div className={styles.links}>
				<Heading2 className={styles.subtitle} theme={theme}>
					Полезные материалы:
				</Heading2>
				{item.links.map((obj) => (
					<Body1 key={obj.id} className={styles.info} theme={theme}>
						<a
							className={styles.link}
							href={obj.link}
							target="_blank"
							rel="noreferrer"
						>
							{obj.link}
						</a>
						{obj.text && '- '}
						{obj.text}
					</Body1>
				))}
			</div>
			<div className={styles.links}>
				<Heading2 className={styles.subtitle} theme={theme}>
					Видеоролики:
				</Heading2>
				<ul className={styles.list}>
					{item.videos.map((obj) => (
						<li className={styles.listItem} key={obj.id}>
							<Video src={obj.link} />
						</li>
					))}
				</ul>
			</div>
			<div className={styles.note}>
				<Heading2 theme={theme}>Примечание:</Heading2>
				<Body1 theme={theme}>{item.note}</Body1>
			</div>
		</section>
	);
};
