import React from 'react';
import styles from './ButtonsOpenCalendar.module.scss';
import { InfoComponent } from 'shared/components/InfoComponent';

interface IProps {
	children?: React.ReactNode;
	dateInn: string;
	dateOut: string;
	handleClick: (e: React.MouseEvent) => void;
}

export const ButtonsOpenCalendar: React.FC<React.PropsWithChildren<IProps>> = (props) => {
	return (
		<div className={styles['block-buttons_selected-date']}>
			<div className={styles['block-buttons']} onClick={props.handleClick}>
				<InfoComponent value={props.dateInn} label="Въезд" />
				<InfoComponent value={props.dateOut} label="Прибытие" />
			</div>
			{props.children}
		</div>
	);
};
