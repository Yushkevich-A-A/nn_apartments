import React, { useState } from 'react';
import styles from './WidgetFormModal.module.scss';
import { GreenButton } from 'shared/components/GreenButton';
import { InputTextForm } from 'shared/components/InputTextForm';
import cn from 'classnames';
import { InputPhoneComponent } from 'shared/components/InputPhoneComponent';

interface IProps {
	handleSubmit: () => void;
}

export const WidgetFormModal = ({ handleSubmit }) => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
	});

	const [errorArray, setErrorArray] = useState<string[]>([]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData((state) => ({ ...state, [name]: value }));
	};

	const onSubmit = () => {
		const validateEmailRegex = /^\S+@\S+\.\S+$/;
		const arrayError: string[] = [];
		if (formData.name.trim() === '') {
			arrayError.push('name');
		}
		if (formData.phone.includes('_') || formData.phone.trim() === '') {
			arrayError.push('phone');
		}
		if (!validateEmailRegex.test(formData.email)) {
			arrayError.push('email');
		}
		if (arrayError.length !== 0) {
			return setErrorArray([...arrayError]);
		}
		handleSubmit(formData);
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
					placeholder="Ваше имя*"
					handleChange={handleChange}
					name="name"
					isError={errorArray.includes('name')}
					className={cn(styles['form-modal__input'])}
				/>
				<InputPhoneComponent
					onChange={handleChange}
					value={formData.phone}
					name="phone"
					isError={errorArray.includes('phone')}
					label={'Номер телефона*'}
				/>
				<InputTextForm
					value={formData.email}
					placeholder="Электронная почта*"
					handleChange={handleChange}
					name="email"
					isError={errorArray.includes('email')}
					className={styles['form-modal__input']}
				/>
				<GreenButton title="забронировать" handleClick={onSubmit} />
			</div>
		</div>
	);
};
