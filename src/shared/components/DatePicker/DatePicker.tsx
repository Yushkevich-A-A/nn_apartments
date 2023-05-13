import React, { useState, useEffect } from 'react';
import styles from './DatePicker.module.scss';
import { InputComponent } from '../InputComponent';
import { CalendarWidget } from 'widgets/CalendarWidget';
import {
	addDays,
	compareAsc,
	differenceInCalendarDays,
	format,
	parse,
	setDefaultOptions,
} from 'date-fns';
import { InputDateComponent } from '../InputDateComponent';
import { ru } from 'date-fns/locale';
setDefaultOptions({ locale: ru });

export const DatePicker = () => {
	const [dateValues, setDateValues] = useState({
		start: parse(format(new Date(), 'dd.MM.yyyy'), 'dd.MM.yyyy', new Date()),
		end: parse(format(new Date(), 'dd.MM.yyyy'), 'dd.MM.yyyy', new Date()),
	});

	const [diffInDays, setDiffInDays] = useState('');

	useEffect(() => {
		if (dateValues.end < dateValues.start) {
			setDateValues({
				start: dateValues.end,
				end: dateValues.start,
			});
		}
	}, [dateValues]);

	useEffect(() => {
		const value = differenceInCalendarDays(addDays(dateValues.end, 1), dateValues.start);
		const stringValue = value.toString();
		console.log(stringValue);
		setDiffInDays('1 ночь');
		if (
			stringValue.endsWith('0') ||
			stringValue.endsWith('5') ||
			stringValue.endsWith('6') ||
			stringValue.endsWith('7') ||
			stringValue.endsWith('8') ||
			stringValue.endsWith('9') ||
			stringValue.endsWith('10') ||
			stringValue.endsWith('11') ||
			stringValue.endsWith('12') ||
			stringValue.endsWith('13') ||
			stringValue.endsWith('14')
		) {
			return setDiffInDays(`${stringValue} ночей`);
		}
		if (stringValue.endsWith('2') || stringValue.endsWith('3') || stringValue.endsWith('4')) {
			return setDiffInDays(`${stringValue} ночи`);
		}
		if (stringValue.endsWith('1')) {
			return setDiffInDays(`${stringValue} ночь`);
		}
	}, [dateValues]);

	return (
		<div className={styles['date-picker']}>
			<div className={styles['date-picker_info-block']}>
				<div className={styles['date-picker_info_dates']}>
					<div className={styles['date-picker_amount']}>{diffInDays}</div>
					<div className={styles['date-picker_dates']}>
						{format(dateValues.start, 'd MMM yyyy')} -{' '}
						{format(addDays(dateValues.end, 1), 'd MMM yyyy')}
					</div>
				</div>
				<div className={styles['date-picker_input-blocks']}>
					<div className={styles['input_component__wrapper']}>
						<InputDateComponent
							onChange={function (payload: string): void {
								setDateValues((state) => ({
									...state,
									start: parse(payload, 'dd.MM.yyyy', new Date()),
								}));
							}}
							value={format(dateValues.start, 'dd.MM.yyyy')}
							name={'Прибытие'}
							label={'Прибытие'}
						/>
					</div>
					<div className={styles['input_component__wrapper']}>
						<InputDateComponent
							onChange={function (payload: string): void {
								debugger;
								let dateEnd = parse(payload, 'dd.MM.yyyy', new Date());
								if (compareAsc(dateEnd, dateValues.start) !== 0) {
									dateEnd = addDays(dateEnd, -1);
								}
								setDateValues((state) => ({
									...state,
									end: dateEnd,
								}));
							}}
							value={format(addDays(dateValues.end, 1), 'dd.MM.yyyy')}
							name={'Выезд'}
							label={'Выезд'}
						/>
					</div>
				</div>
			</div>
			<div className={styles['date-picker_calendar-block']}>
				<CalendarWidget
					reservedDates={['2023.05.23', '2023.05.24', '2023.06.05', '2023.06.9']}
					multiMonth={true}
					value={[dateValues.start, dateValues.end, 1]}
					setChange={(e) => {
						if (!e) {
							return;
						}
						setDateValues({ start: e[0], end: e[1] });
					}}
				/>
			</div>
		</div>
	);
};
