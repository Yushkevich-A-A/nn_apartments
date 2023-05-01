import React, { useState } from 'react';
import styles from './WidgetFormModal.module.scss';
import { GreenButton } from 'shared/components/GreenButton';
import { InputTextForm } from 'shared/components/InputTextForm';

export const WidgetFormModal = () => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData((state) => ({ ...state, [name]: value }));
	};

	return (
		<div className={styles['widget-form-modal']}>
			<div className={styles['form-modal__title']}>Поздравляем!</div>
			<div className={styles['form-modal__under-title']}>
				Вы уже стали на шаг ближе к отпуску, осталось совсем чуть-чуть.
			</div>
			<div className={styles['form-modal__form']}>
				<InputTextForm
					value={formData.name}
					placeholder="Ваше имя"
					handleChange={handleChange}
					name="name"
					className={styles['form-modal__input']}
				/>
				<InputTextForm
					value={formData.phone}
					placeholder="Номер телефона"
					handleChange={handleChange}
					name="phone"
					className={styles['form-modal__input']}
				/>
				<InputTextForm
					value={formData.email}
					placeholder="Электронная почта"
					handleChange={handleChange}
					name="email"
					className={styles['form-modal__input']}
				/>
				<GreenButton title="забронировать" handleClick={(): void => console.log('click')} />
			</div>
		</div>
	);
};
