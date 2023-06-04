import React, { useEffect, useState } from 'react';
import styles from './OrderForm.module.scss';
import { GreenButton } from 'shared/components/GreenButton';
import { SelectGuests } from 'features/SelectGuests';
import { ModalWindow } from 'shared/components/ModalWindow';
import { WidgetFormModal } from 'widgets/WidgetFormModal';
import { WidgetSuccessSendData } from 'widgets/WidgetSuccessSendData';
import { ButtonsOpenCalendar } from 'features/ButtonsOpenCalendar';
import { DatePicker } from 'shared/components/DatePicker';
import { useOrderSelect } from 'store/useOrderSelect';
import { format } from 'date-fns';
import axios from 'axios';
import { useApartmentStore } from 'store/useApartmentStore';

interface IFormData {
	name: string;
	phone: string;
	email: string;
}

export const OrderForm: React.FC<{ price: number }> = ({ price }) => {
	const { selectedParameters, resetState } = useOrderSelect();
	const { setServedDates, selectedAppartment } = useApartmentStore();
	const [openModal, setOpenModal] = useState(false);
	const [sendData, setSendData] = useState(false);
	const [openCalendar, setOpenCalendar] = useState<boolean>(false);
	const [isMobil, setIsMobil] = useState(false);

	const handleSubmit = (data: IFormData): void => {
		const reqObject = {
			dateFrom: format(selectedParameters.date.start, 'yyyy-MM-dd'),
			dateTo: format(selectedParameters.date.end, 'yyyy-MM-dd'),
			name: data.name,
			phone: data.phone,
			email: data.email,
			guests: {
				adult: selectedParameters.guests.adult,
				children: selectedParameters.guests.children,
			},
			apartment: selectedAppartment,
			crossDates: selectedParameters.crossDates,
		};
		axios
			.post(`${process.env.REACT_APP_BASE_URL}/api/booking/`, reqObject)
			.then((res) => {
				axios
					.get(`${process.env.REACT_APP_BASE_URL}/api/dates/${res.data.apartment}/`)
					.then((dates) => {
						if (dates.data) {
							setServedDates(dates.data[0].dates ? dates.data[0].dates : []);
						}
						resetState();
						setSendData(true);
						setTimeout(handleClose, 3000);
					});
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const handleClose = (): void => {
		setOpenModal(false);
		setSendData(false);
	};

	useEffect(() => {
		const { width } = document.body.getBoundingClientRect();
		if (width < 950) {
			setIsMobil(true);
		}
	}, []);

	return (
		<div className={styles['order-section__order_block']}>
			<div className={styles['calculator-block']}>
				{!isMobil && (
					<form>
						<div className={styles['price-block']}>
							<span className={styles['price']}>от {price}₽</span>/сутки
						</div>
						<div className={styles['form-to-block']}>
							<ButtonsOpenCalendar
								dateInn={format(selectedParameters.date.start, 'dd.MM.yyyy')}
								dateOut={format(selectedParameters.date.end, 'dd.MM.yyyy')}
								handleClick={(): void => setOpenCalendar(true)}
							>
								{openCalendar && (
									<div className={styles['date-picker_wrapper']}>
										<DatePicker handleClick={(): void => setOpenCalendar(false)} />
									</div>
								)}
							</ButtonsOpenCalendar>
							<SelectGuests />
						</div>
						<GreenButton title="забронировать" handleClick={(): void => setOpenModal(true)} />
					</form>
				)}
				{isMobil && (
					<>
						<DatePicker isMobil={isMobil} handleClick={(): void => setOpenCalendar(false)} />
						<SelectGuests />
						<div className={styles['serve-button']}>
							<GreenButton title="забронировать" handleClick={(): void => setOpenModal(true)} />
						</div>
					</>
				)}
			</div>
			{openModal && (
				<ModalWindow handleClose={handleClose}>
					{!sendData && <WidgetFormModal handleSubmit={handleSubmit} />}
					{sendData && <WidgetSuccessSendData />}
				</ModalWindow>
			)}
			<div className={styles['info']}>бесплатная отмена за 14 дней</div>
		</div>
	);
};
