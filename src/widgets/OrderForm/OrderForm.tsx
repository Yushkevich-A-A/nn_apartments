import React, { useState } from 'react';
import styles from './OrderForm.module.scss';
import { GreenButton } from 'shared/components/GreenButton';
import { SelectGuests } from 'features/SelectGuests';
import { ModalWindow } from 'shared/components/ModalWindow';
import { WidgetFormModal } from 'widgets/WidgetFormModal';
import { WidgetSuccessSendData } from 'widgets/WidgetSuccessSendData';
import { ButtonsOpenCalendar } from 'features/ButtonsOpenCalendar';
import { DatePicker } from 'shared/components/DatePicker';

interface IFormData {
	name: string;
	phone: string;
	email: string;
}

export const OrderForm: React.FC<{ price: number }> = ({ price }) => {
	const [openModal, setOpenModal] = useState(false);
	const [sendData, setSendData] = useState(false);
	const [openCalendar, setOpenCalendar] = useState<boolean>(false);

	const handleSubmit = (data: IFormData): void => {
		console.log(data);
		setSendData(true);
		setTimeout(handleClose, 3000);
	};

	const handleClose = (): void => {
		setOpenModal(false);
		setSendData(false);
	};

	return (
		<div className={styles['order-section__order_block']}>
			<div className={styles['calculator-block']}>
				<form>
					<div className={styles['price-block']}>
						<span className={styles['price']}>от {price}₽</span>/сутки
					</div>
					<div className={styles['form-to-block']}>
						<ButtonsOpenCalendar
							dateInn="13.02.2023"
							dateOut="16.02.2023"
							handleClick={(): void => setOpenCalendar(true)}
						>
							{true && (
								<div className={styles['date-picker_wrapper']}>
									<DatePicker />
								</div>
							)}
						</ButtonsOpenCalendar>
						<SelectGuests />
					</div>
					<div className="row-fields">
						<input type="text" />
					</div>
					<GreenButton title="забронировать" handleClick={(): void => setOpenModal(true)} />
				</form>
			</div>
			{openModal && (
				<ModalWindow handleClose={handleClose}>
					{!sendData && <WidgetFormModal handleSubmit={handleSubmit} />}
					{sendData && <WidgetSuccessSendData />}
				</ModalWindow>
			)}
			<div className={styles['info']}>бесплатная отмена втечение 48 часов</div>
		</div>
	);
};
