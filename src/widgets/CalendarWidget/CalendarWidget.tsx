import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './CalendarWidget.scss';
import { formatDate } from 'react-calendar/dist/cjs/shared/dateFormatter';
import { format, parse, setDefaultOptions } from 'date-fns';
import { ru } from 'date-fns/locale';
import { LooseValue } from 'react-calendar/dist/cjs/shared/types';
setDefaultOptions({ locale: ru });

interface IProps {
	multiMonth: boolean;
	setChange: (e) => void;
	value: any;
	reservedDates: string[];
}
export const CalendarWidget: React.FC<IProps> = ({
	value,
	setChange,
	multiMonth,
	reservedDates,
}) => {
	const [haveAcross, setHaveAcross] = useState(false);
	const [monthOnCalendar, setMonthOnCalendar] = useState(format(new Date(), 'MMMM'));
	const [crossRange, setCrossRange] = useState<string[]>([]);

	// const reservedData = ['2023.05.23', '2023.05.24', '2023.06.05', '2023.06.9'];

	useEffect(() => {
		const calendar = document.getElementsByClassName('react-calendar__viewContainer')[0];
		const mutationObserver = new MutationObserver((e) => {
			let crossSelectedData = false;
			const arrCross: string[] = [];
			e.forEach((element) => {
				const targetElement = element.target as HTMLDivElement;
				if (!targetElement.getAttribute('data-reserved')) {
					return;
				}
				if (targetElement.classList.contains('react-calendar__tile--range')) {
					crossSelectedData = true;
					const reservedDataValue = targetElement.getAttribute('data-reserved-date');
					if (reservedDataValue) {
						arrCross.push(reservedDataValue);
					}
				}
			});
			setHaveAcross(crossSelectedData);
			setCrossRange(arrCross);
		});
		mutationObserver.observe(calendar, {
			subtree: true,
			attributes: true,
			attributeFilter: ['class'],
		});
	}, []);

	useEffect(() => {
		const tegArray = document.getElementsByTagName('abbr');
		const formattedDates = reservedDates.map((date) => {
			const parsedDate = parse(date, 'yyyy.MM.dd', new Date());
			return format(parsedDate, 'd MMMM yyyy г.');
		});

		Array.from(tegArray).forEach((element) => {
			const valueAttribute = element.getAttribute('aria-label');
			if (valueAttribute && formattedDates.includes(valueAttribute)) {
				const parentElement = element.closest('.react-calendar__month-view__days__day');
				if (!parentElement || parentElement.hasAttribute('disabled')) {
					return;
				}
				parentElement.setAttribute('data-reserved', 'true');
				parentElement.setAttribute(
					'data-reserved-date',
					format(parse(valueAttribute, 'd MMMM yyyy г.', new Date()), 'yyyy.MM.dd'),
				);
			}
		});
	}, [monthOnCalendar]);

	useEffect(() => {
		console.log('пришедшие данные', value);
	}, [value]);

	return (
		<div className="calendar_block">
			<Calendar
				selectRange={true}
				showNeighboringMonth={false}
				showFixedNumberOfWeeks={false}
				showDoubleView={true}
				minDetail="month"
				nextLabel={<span></span>}
				prevLabel={<span></span>}
				next2Label={null}
				prev2Label={null}
				// defaultValue={new Date()}
				value={value}
				onChange={(e) => {
					setChange(e);
				}}
				returnValue="range"
				minDate={new Date()}
				formatMonthYear={(locale, date) => {
					return format(date, 'LLLL').toLowerCase();
				}}
				onActiveStartDateChange={({ activeStartDate, view }) => {
					if (view !== 'month') {
						return;
					}
					setMonthOnCalendar(format(activeStartDate || new Date(), 'MMMM'));
				}}
			/>
			{haveAcross && (
				<div className="range-across">В выбранном диапазоне имеются зарезервированные даты</div>
			)}
		</div>
	);
};
