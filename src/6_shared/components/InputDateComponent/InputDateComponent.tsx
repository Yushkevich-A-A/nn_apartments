import React from 'react';
import styles from './InputDateComponent.module.scss';
import MaskedTextInput from 'react-text-mask';
import { compareAsc, format, formatRelative, getDaysInMonth, parse } from 'date-fns';

interface IProps {
	onChange: (payload: string) => void;
	value: any;
	name: string;
	label: string;
}

export const InputDateComponent: React.FC<IProps> = ({ onChange, value, name, label }: IProps) => {
	return (
		<div className={styles['input__block']}>
			<label htmlFor={name} className={styles['input_label']}>
				{name}
			</label>
			<MaskedTextInput
				id="my-input-id"
				guide={false}
				mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
				onBlur={(e) => {
					const value = e.target.value;
					const arrDate = value.split('.').map((item) => Number(item));
					const year =
						arrDate[2] < new Date().getFullYear()
							? new Date().getFullYear()
							: arrDate[2] > new Date().getFullYear() + 5
							? new Date().getFullYear() + 5
							: arrDate[2];
					const month = arrDate[1] > 12 ? 11 : arrDate[1] - 1;
					const day =
						arrDate[0] > getDaysInMonth(new Date(year, month))
							? getDaysInMonth(new Date(year, month))
							: arrDate[0] < 1
							? 1
							: arrDate[0];
					const compareDates = compareAsc(new Date(year, month, day), new Date());
					if (compareDates === -1) {
						onChange(format(new Date(), 'dd.MM.yyyy'));
						return;
					}
					console.log(new Date(year, month, day));
					onChange(format(new Date(year, month, day), 'dd.MM.yyyy'));
				}}
				value={value}
			/>
		</div>
	);
};
