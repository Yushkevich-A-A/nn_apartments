import React from 'react';
import styles from './GreenButton.module.scss';

type PropsType = {
	title: string;
	handleClick?: () => void;
};

export const GreenButton: React.FC<PropsType> = ({ title, handleClick }) => {
	return (
		<div className={styles['green-button']} onClick={handleClick}>
			{title}
		</div>
	);
};
