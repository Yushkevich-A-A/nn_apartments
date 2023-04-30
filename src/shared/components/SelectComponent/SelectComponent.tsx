import React, { useState } from 'react';
import cn from 'classnames';
import styles from './SelectComponent.module.scss';
interface IProps {
	value: string;
	label: string;
	capacity: number;
}

export const SelectComponent: React.FC<IProps> = ({ value, label, capacity }) => {
	const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
	const handleChange = () => {
		setDropdownOpen(true);
	};
	return (
		<>
			<div className={styles['select_block_wrapper']}>
				<div className={styles['select_block']}>
					<div className={styles['select_label']}>{label}</div>
					<div onChange={handleChange} className={styles['select-element']}>
						{value}
					</div>
				</div>
				<div className={cn(styles['arrow'], dropdownOpen && styles['arrow-down'])}></div>
			</div>
			{dropdownOpen && <div className="select_capacity">здесь будут калькуляторы</div>}
		</>
	);
};
