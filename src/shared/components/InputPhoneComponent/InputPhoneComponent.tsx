import React from 'react';
import styles from './InputPhoneComponent.module.scss';
import MaskedTextInput from 'react-text-mask';
import { compareAsc, format, formatRelative, getDaysInMonth, parse } from 'date-fns';
import cn from 'classnames';
import classNames from 'classnames';

interface IProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: any;
	name: string;
	label: string;
	isError: boolean;
}

export const InputPhoneComponent: React.FC<IProps> = ({
	onChange,
	value,
	name,
	label,
	isError,
}: IProps) => {
	return (
		<div className={cn(styles['input__block'], isError && styles['input-element_error'])}>
			<MaskedTextInput
				mask={[
					'+',
					'7',
					'(',
					/[1-9]/,
					/\d/,
					/\d/,
					')',
					' ',
					/\d/,
					/\d/,
					/\d/,
					'-',
					/\d/,
					/\d/,
					/\d/,
					/\d/,
				]}
				onChange={onChange}
				name={name}
				keepCharPositions={true}
				value={value}
				placeholder={label}
			/>
		</div>
	);
};
