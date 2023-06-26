import React, { useState, useEffect } from 'react';
import styles from './DatePicker.module.scss';
import { CalendarWidget } from 'widgets/CalendarWidget';
import { addDays, differenceInCalendarDays, format, parse, setDefaultOptions } from 'date-fns';
import { InputDateComponent } from 'shared/components/InputDateComponent';
import { ru } from 'date-fns/locale';
import { useOrderSelect } from 'store/useOrderSelect';
import { useApartmentStore } from 'store/useApartmentStore';
setDefaultOptions({ locale: ru });

interface IProps {
	handleClick: () => void;
	isMobil?: boolean;
}

export const DatePicker: React.FC<IProps> = ({ handleClick, isMobil }) => {
	const { selectedParameters, setOrderParameter } = useOrderSelect();
	const { servedDates } = useApartmentStore();
	const [diffInDays, setDiffInDays] = useState('');

	const handleSetServeDate = (payload) => {
		if (format(payload.start, 'dd.MM.yyyy') === format(payload.end, 'dd.MM.yyyy')) {
			payload.end = addDays(payload.end, 1);
		}
		const date = { ...payload };
		setOrderParameter({ date });
	};

	useEffect(() => {
		if (selectedParameters.date.end < selectedParameters.date.start) {
			setOrderParameter({
				date: {
					start: selectedParameters.date.end,
					end: selectedParameters.date.start,
				},
			});
		}
	}, [selectedParameters]);

	useEffect(() => {
		const value = differenceInCalendarDays(
			selectedParameters.date.end,
			selectedParameters.date.start,
		);
		const stringValue = value.toString();
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
	}, [selectedParameters]);

	const handleCloseModal = () => {
		handleClick();
	};

	return (
		<div className={styles['date-picker']} onClick={(e) => e.stopPropagation()}>
			<div className={styles['date-picker_info-block']}>
				<div className={styles['date-picker_info-block-wrapper']}>
					<div className={styles['date-picker_info_dates']}>
						<div className={styles['date-picker_amount']}>{diffInDays}</div>
						<div className={styles['date-picker_dates']}>
							{format(selectedParameters.date.start, 'd MMM yyyy')} -{' '}
							{format(selectedParameters.date.end, 'd MMM yyyy')}
						</div>
					</div>
					{isMobil && (
						<div className="date-picker_info-block_button-reset">
							<div
								className={styles['calendar-block_buttons_reset-dates']}
								onClick={() => {
									handleSetServeDate({
										start: parse(format(new Date(), 'dd.MM.yyyy'), 'dd.MM.yyyy', new Date()),
										end: addDays(
											parse(format(new Date(), 'dd.MM.yyyy'), 'dd.MM.yyyy', new Date()),
											1,
										),
									});
								}}
							>
								Сбросить даты
							</div>
						</div>
					)}
				</div>
				{!isMobil && (
					<div className={styles['date-picker_input-blocks']}>
						<div className={styles['input_component__wrapper']}>
							<InputDateComponent
								onChange={function (payload: string): void {
									handleSetServeDate({
										...selectedParameters.date,
										start: parse(payload, 'dd.MM.yyyy', new Date()),
									});
								}}
								value={format(selectedParameters.date.start, 'dd.MM.yyyy')}
								name={'Прибытие'}
								label={'Прибытие'}
							/>
						</div>
						<div className={styles['input_component__wrapper']}>
							<InputDateComponent
								onChange={function (payload: string): void {
									handleSetServeDate({
										...selectedParameters.date,
										end: parse(payload, 'dd.MM.yyyy', new Date()),
									});
								}}
								value={format(selectedParameters.date.end, 'dd.MM.yyyy')}
								name={'Выезд'}
								label={'Выезд'}
							/>
						</div>
					</div>
				)}
			</div>
			<div className={styles['date-picker_calendar-block']}>
				<CalendarWidget
					reservedDates={servedDates}
					multiMonth={!isMobil}
					value={[selectedParameters.date.start, selectedParameters.date.end, 1]}
					setChange={(e) => {
						if (!e) {
							return;
						}
						handleSetServeDate({ start: e[0], end: e[1] });
					}}
				/>
				{!isMobil && (
					<div className={styles['calendar-block_buttons']}>
						<div
							className={styles['calendar-block_buttons_reset-dates']}
							onClick={() => {
								handleSetServeDate({
									start: parse(format(new Date(), 'dd.MM.yyyy'), 'dd.MM.yyyy', new Date()),
									end: addDays(
										parse(format(new Date(), 'dd.MM.yyyy'), 'dd.MM.yyyy', new Date()),
										1,
									),
								});
							}}
						>
							Сбросить даты
						</div>
						<div className={styles['calendar-block_buttons_close']} onClick={handleCloseModal}>
							Закрыть
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
