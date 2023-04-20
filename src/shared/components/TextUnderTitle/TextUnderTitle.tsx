import React from 'react';
import styles from './TextUnderTitle.module.scss';

interface IProps {
	textArray: string[];
}

export const TextUnderTitle: React.FC<IProps> = ({ textArray }) => {
	return (
		<div>
			{textArray.map((item) => (
				<span className={styles['text-under-header']} key={item}>
					{item}
				</span>
			))}
		</div>
	);
};
