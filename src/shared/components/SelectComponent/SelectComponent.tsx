import React, { useState } from 'react';
import cn from 'classnames';
import styles from './SelectComponent.module.scss';
interface IProps {
	value: string;
	label: string;
	handleOpen: () => void;
	isOpen: boolean;
}

export const SelectComponent: React.FC<IProps> = ({ value, label, handleOpen, isOpen }) => {
	return (
		<div onClick={handleOpen} className={styles['select_block_wrapper']}>
			<div className={styles['select_block']}>
				<div className={styles['select_label']}>{label}</div>
				<div className={styles['select-element']}>{value}</div>
			</div>
			<div className={cn(styles['arrow'], isOpen && styles['arrow-down'])}></div>
		</div>
	);
};
