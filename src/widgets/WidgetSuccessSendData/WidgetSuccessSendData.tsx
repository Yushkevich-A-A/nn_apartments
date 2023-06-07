import React from 'react';
import styles from './WidgetSuccessSendData.module.scss';

export const WidgetSuccessSendData = () => {
	return (
		<div className={styles['widget-success-modal']}>
			<div className={styles['widget-success__icon']}></div>
			<div className={styles['widget-success__title']}>Спасибо!</div>
			<div className={styles['widget-success__under-title']}>
				Вы забронировали апартаменты на даты:{' '}
				<span className={styles['widget-success__selected-date']}>13 марта - 16 марта</span>
			</div>
			<div className={styles['widget-success__info']}>Наш менеджер скоро свяжется с вами.</div>
		</div>
	);
};
