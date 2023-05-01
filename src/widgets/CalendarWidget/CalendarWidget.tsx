import React from 'react';
import Calendar from 'react-calendar';

interface IProps {
	multimonth: boolean;
}
export const CalendarWidget: React.FC<IProps> = ({ multimonth }) => {
	return <Calendar />;
};
