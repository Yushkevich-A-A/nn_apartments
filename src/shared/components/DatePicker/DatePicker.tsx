import React from 'react';
import styles from './DatePicker.module.scss';
import { InputComponent } from '../InputComponent';

export const DatePicker = () => {
	return (
		<div className={styles['date-picker']}>
			<div className={styles['date-picker_info-block']}>
				<div className={styles['date-picker_info_dates']}>
					<div className={styles['date-picker_amount']}>3 ночи</div>
					<div className={styles['date-picker_dates']}>13 фев. 2023 - 16 фев. 2023</div>
				</div>
				<div className={styles['date-picker_input-blocks']}>
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
			</div>
			<div className={styles['date-picker_calendar-block']}>
				<div className={styles['calendar-header']}>
					<div className={styles['arrow-left']}></div>
					<div className={styles['arrow-months']}>
						<div className={styles['month']}></div>
						<div className={styles['month']}></div>
					</div>
					<div className={styles['arrow-right']}></div>
				</div>
				<div className={styles['calendar-body']}>
					<div className={styles['month-dates']}></div>
					<div className={styles['month-dates']}></div>
				</div>
			</div>
		</div>
	);
};
