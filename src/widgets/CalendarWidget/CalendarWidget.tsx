import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './CalendarWidget.scss';
import { formatDate } from 'react-calendar/dist/cjs/shared/dateFormatter';
import { format, parse, setDefaultOptions } from 'date-fns';
import { ru } from 'date-fns/locale';
setDefaultOptions({ locale: ru });

interface IProps {
	multiMonth: boolean;
}
export const CalendarWidget: React.FC<IProps> = ({ multiMonth = true }) => {
	const [value, setChange] = useState<any>(new Date());
	const [haveAcross, setHaveAcross] = useState(false);

	const reservedData = ['2023.05.23', '2023.05.24', '2023.06.05', '2023.06.9'];

	useEffect(() => {
		const calendar = document.getElementsByClassName('react-calendar__viewContainer')[0];
		const mutationObserver = new MutationObserver((e) => {
			let crossSelectedData = false;
			e.forEach((element) => {
				const targetElement = element.target as HTMLDivElement;
				if (!targetElement.getAttribute('data-reserved')) {
					return;
				}
				if (targetElement.classList.contains('react-calendar__tile--range')) {
					crossSelectedData = true;
				}
			});
			setHaveAcross(crossSelectedData);
		});
		mutationObserver.observe(calendar, {
			subtree: true,
			attributes: true,
			attributeFilter: ['class'],
		});
	}, []);

	useEffect(() => {
		const tegArray = document.getElementsByTagName('abbr');
		const formattedDates = reservedData.map((date) => {
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
			}
		});
	}, []);

	return (
		<div className="calendar_block">
			<Calendar
				selectRange={true}
				showNeighboringMonth={false}
				showFixedNumberOfWeeks={false}
				showDoubleView={true}
				minDetail="month"
				next2Label={null}
				prev2Label={null}
				value={value}
				onChange={(e) => setChange(e)}
				returnValue="range"
				minDate={new Date()}
				formatMonthYear={(locale, date) => {
					return format(date, 'LLLL').toLowerCase();
				}}
			/>
			{haveAcross && (
				<div className="range-across">В выбранном диапазоне имеются зарезервированные даты</div>
			)}
		</div>
	);
};
