import React from 'react';
import styles from './InputTextForm.module.scss';
import cn from 'classnames';
interface IProps {
	placeholder: string;
	value: string;
	name: string;
	className?: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputTextForm: React.FC<IProps> = ({
	value,
	placeholder,
	handleChange,
	name,
	className,
}) => {
	return (
		<input
			type="text"
			className={cn(styles['input_element'], className && className)}
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
			name={name}
		/>
	);
};
