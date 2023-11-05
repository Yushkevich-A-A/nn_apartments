import React from 'react';
import cn from 'classnames';
import styles from './GuestCalculate.module.scss';

type PropsType = {
	value: number;
	label: string;
	description: string;
	handleCount: (payload: number) => void;
	isMax: boolean;
};

export const GuestCalculate: React.FC<PropsType> = ({
	value,
	label,
	description,
	handleCount,
	isMax,
}) => {
	const handleDecrement = (): void => {
		if (value <= 0) {
			return;
		}
		handleCount(value - 1);
	};

	const handleIncrement = (): void => {
		if (isMax) {
			return;
		}
		handleCount(value + 1);
	};

	return (
		<div className={styles['calculate__block']}>
			<div className={styles['block_description']}>
				<div className={styles['calc-label']}>{label}</div>
				<div className={styles['calc-description']}>{description}</div>
			</div>
			<div className={styles['block_control']}>
				<div
					onClick={handleDecrement}
					className={cn(styles['control_decrement'], value <= 0 && styles['control_disable'])}
				></div>
				<div className={styles['value']}>{value || 0}</div>
				<div
					onClick={handleIncrement}
					className={cn(styles['control_increment'], isMax && styles['control_disable'])}
				></div>
			</div>
		</div>
	);
};
