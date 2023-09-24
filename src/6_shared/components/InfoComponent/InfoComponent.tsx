import React from 'react';
import styles from './InfoComponent.module.scss';

interface IProps {
	value: string;
	label: string;
}

export const InfoComponent: React.FC<IProps> = ({ value, label }: IProps) => {
	return (
		<div className={styles['info__block']}>
			<div className={styles['info_label']}>{label}</div>
			<div className="info_element">{value}</div>
		</div>
	);
};
