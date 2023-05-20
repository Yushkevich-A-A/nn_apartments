import React from 'react';
import styles from './InputTextForm.module.scss';
import cn from 'classnames';
interface IProps {
	placeholder: string;
	value: string;
	name: string;
	className?: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isError: boolean;
}

export const InputTextForm: React.FC<IProps> = ({
	value,
	placeholder,
	handleChange,
	name,
	className,
	isError,
}) => {
	return (
		<input
			type="text"
			className={cn(
				styles['input_element'],
				className && className,
				isError && styles['input-element_error'],
			)}
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
			name={name}
		/>
	);
};
