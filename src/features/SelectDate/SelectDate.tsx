import React, { useState } from 'react';
import styles from './SelectDate.module.scss';
import { InputComponent } from 'shared/components/InputComponent';
import { DatePicker } from 'shared/components/DatePicker';

export const SelectDate = () => {
	const [openCalendar, setOpenCalendar] = useState<boolean>(false);
	return (
		<div className={styles['select-date_wrapper']}>
			<div className={styles['form_date']}>
				<div className={styles['input_component__wrapper']}>
					<InputComponent
						onChange={function (payload: React.ChangeEvent<HTMLInputElement>): void {
							console.log(payload);
						}}
						value={'13.02.2023'}
						name={'Прибытие'}
						label={'Прибытие'}
					/>
				</div>
				<div className={styles['input_component__wrapper']}>
					<InputComponent
						onChange={function (payload: React.ChangeEvent<HTMLInputElement>): void {
							console.log(payload);
						}}
						value={'16.02.2023'}
						name={'Выезд'}
						label={'Выезд'}
					/>
				</div>
			</div>
			{true && (
				<div className={styles['date-picker_wrapper']}>
					<DatePicker />
				</div>
			)}
		</div>
	);
};
