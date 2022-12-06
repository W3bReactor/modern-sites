import React from 'react';
import styles from './MessageLoader.module.scss';

export const MessageLoader = () => {
	return (
		<div className={styles.bubblingG}>
			<span id={styles.bubblingG_1}></span>
			<span id={styles.bubblingG_2}></span>
			<span id={styles.bubblingG_3}></span>
		</div>
	);
};
