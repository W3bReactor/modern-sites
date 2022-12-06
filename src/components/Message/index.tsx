import React, { FC, useRef } from 'react';
import { Body2 } from '../Body2';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Message.module.scss';
import classNames from 'classnames';
import { MessageLoader } from '../MessageLoader';
import { Heading2 } from '../Heading2';
import ReactPlayer from 'react-player';
import { TransparentButton } from '../TransparentButton';
import { useAppDispatch } from '../../redux/hooks';
import { setModalOpen, setUrl } from '../../redux/slices/modalSlice/slice';

interface MessageProps {
	text?: string;
	from?: string;
	theme: string;
	src?: string;
	title?: string;
	image?: string;
	video?: string;
	link?: string;
}

export const Message: FC<MessageProps> = ({
	text,
	from,
	theme,
	src,
	title,
	image,
	video,
	link,
}) => {
	const dispatch = useAppDispatch();
	const cx = classNames(
		styles.message,
		from === 'me' ? styles.messageLeft : styles.messageRight
	);
	const playerRef = useRef<ReactPlayer>(null);
	const onClickPreview = () => {
		playerRef.current?.showPreview();
	};

	const onOpenModal = (url: string) => {
		dispatch(setModalOpen());
		dispatch(setUrl(url));
	};

	if (title) {
		return (
			<Heading2 className={styles.title} theme={theme}>
				{title}
			</Heading2>
		);
	}
	if (link) {
		return (
			<TransparentButton type={'link'} href="/" className={styles.link}>
				{link}
			</TransparentButton>
		);
	}
	return (
		<div className={cx}>
			<LazyLoadImage
				className={styles.img}
				effect="blur"
				src={src}
				width={50}
				height={50}
			/>
			{!text && <MessageLoader />}
			<div className={styles.content}>
				<Body2 className={styles.text} theme={theme}>
					{text}
				</Body2>
				{image && (
					<LazyLoadImage
						className={styles.img}
						onClick={() => onOpenModal(image)}
						effect="blur"
						src={image}
						height={300}
					/>
				)}
				{video && (
					<ReactPlayer
						ref={playerRef}
						onClick={() => onOpenModal(video)}
						controls={true}
						height={300}
						url={video}
						previewTabIndex={1}
						light={true}
						onClickPreview={onClickPreview}
					/>
				)}
			</div>
		</div>
	);
};
