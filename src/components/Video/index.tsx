import React, { FC, useRef } from 'react';
import ReactPlayer from 'react-player';
import { setModalOpen, setUrl } from '../../redux/slices/modalSlice/slice';
import { useAppDispatch } from '../../redux/hooks';
import styles from './Video.module.scss';
interface VideoProps {
	src: string;
}

export const Video: FC<VideoProps> = ({ src }) => {
	const dispatch = useAppDispatch();

	const playerRef = useRef<ReactPlayer>(null);

	const onClickPreview = () => {
		playerRef.current?.showPreview();
	};

	const onOpenModal = (url: string) => {
		dispatch(setModalOpen());
		dispatch(setUrl(url));
	};

	return (
		<ReactPlayer
			className={styles.video}
			ref={playerRef}
			onClick={() => onOpenModal(src)}
			controls={true}
			width={'auto'}
			height={230}
			url={src}
			previewTabIndex={1}
			light={true}
			onClickPreview={onClickPreview}
		/>
	);
};
