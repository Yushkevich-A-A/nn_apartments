import React from 'react';
import styles from './InputComponent.module.scss';

interface IProps {
	onChange: (payload: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	name: string;
	label: string;
}

export const InputComponent: React.FC<IProps> = ({ onChange, value, name, label }: IProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e);
	};

	return (
		<div className={styles['input__block']}>
			<label htmlFor={name} className={styles['input_label']}>
				{name}
			</label>
			<input
				type="text"
				onChange={handleChange}
				name={name}
				id={name}
				value={value}
				className={styles['input-element']}
			/>
		</div>
	);
};
