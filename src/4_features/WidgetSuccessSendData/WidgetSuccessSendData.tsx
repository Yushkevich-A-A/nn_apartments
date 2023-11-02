import React from 'react';
import styles from './WidgetSuccessSendData.module.scss';
import { format } from 'date-fns';
type PropsType = {
	dateFrom: Date;
	dateTo: Date;
};
export const WidgetSuccessSendData = ({ dateFrom, dateTo }: PropsType) => {
	return (
		<div className={styles['widget-success-modal']}>
			<div className={styles['widget-success__icon']}></div>
			<div className={styles['widget-success__title']}>Спасибо!</div>
			<div className={styles['widget-success__under-title']}>
				Вы забронировали апартаменты на даты:{' '}
				<span className={styles['widget-success__selected-date']}>
					{format(dateFrom, 'd MMMM')} - {format(dateTo, 'd MMMM')}
				</span>
			</div>
			<div className={styles['widget-success__info']}>Наш менеджер скоро свяжется с вами.</div>
		</div>
	);
};
