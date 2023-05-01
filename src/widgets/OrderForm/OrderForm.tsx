import React, { useState } from 'react';
import styles from './OrderForm.module.scss';
import { GreenButton } from 'shared/components/GreenButton';
import { SelectDate } from 'features/SelectDate';
import { SelectGuests } from 'features/SelectGuests';
import { ModalWindow } from 'shared/components/ModalWindow';
import { WidgetFormModal } from 'widgets/WidgetFormModal';
import { WidgetSuccessSendData } from 'widgets/WidgetSuccessSendData';

export const OrderForm = ({ price }) => {
	const [openModal, setOpenModal] = useState(false);
	const [sendData, setSendData] = useState(false);

	// const handleSubmit = (e) => {};

	const handleClose = (): void => setOpenModal(false);
	return (
		<div className={styles['order-section__order_block']}>
			<div className={styles['calculator-block']}>
				<form>
					<div className={styles['price-block']}>
						<span className={styles['price']}>от {price}₽</span>/сутки
					</div>
					<div className={styles['form-to-block']}>
						<SelectDate />
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
					{false && <WidgetFormModal />}
					{true && <WidgetSuccessSendData />}
				</ModalWindow>
			)}
			<div className={styles['info']}>бесплатная отмена втечение 48 часов</div>
		</div>
	);
};
