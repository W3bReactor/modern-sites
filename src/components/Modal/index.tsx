import React, { FC, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Modal.module.scss';
import { setModalClose } from '../../redux/slices/modalSlice/slice';
import { selectModalUrl } from '../../redux/slices/modalSlice/selectors';
import ReactPlayer from 'react-player';

export const Modal: FC = () => {
	const dispatch = useAppDispatch();
	const url = useAppSelector(selectModalUrl);
	const videoRef = useRef(null);
	const closeModal = () => {
		dispatch(setModalClose());
	};
	return (
		<div className={styles.background} onClick={closeModal}>
			<div className={styles.inner} onClick={(e) => e.stopPropagation()}>
				<ReactPlayer
					autoFocus={true}
					ref={videoRef}
					controls={true}
					volume={0.5}
					className={styles.video}
					url={url}
					width={1000}
					height={600}
				/>
			</div>
		</div>
	);
};
