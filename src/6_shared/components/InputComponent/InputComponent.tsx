import React from 'react';
import styles from './InputComponent.module.scss';

interface IProps {
	onChange: (payload: React.ChangeEvent<HTMLInputElement>) => void;
	value: any;
	name: string;
	label: string;
	type: string;
}

export const InputComponent: React.FC<IProps> = ({
	onChange,
	value,
	name,
	label,
	type = 'text',
}: IProps) => {
	return (
		<div className={styles['input__block']}>
			<label htmlFor={name} className={styles['input_label']}>
				{name}
			</label>
			<input
				type={type}
				onChange={onChange}
				name={name}
				id={name}
				value={value}
				className={styles['input-element']}
			/>
		</div>
	);
};
