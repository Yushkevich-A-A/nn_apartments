import React, { useEffect, useState, useContext } from 'react';
import styles from './OrderForm.module.scss';
import { GreenButton } from '6_shared/components/GreenButton';
import { ModalWindow } from '6_shared/components/ModalWindow';
import { WidgetFormModal } from '4_features/WidgetFormModal';
import { WidgetSuccessSendData } from '4_features/WidgetSuccessSendData';
import { ButtonsOpenCalendar } from '4_features/ButtonsOpenCalendar';
import { DatePicker } from '4_features/DatePicker';
import { useOrderSelect } from 'store/useOrderSelect';
import { format } from 'date-fns';
import axios from 'axios';
import { useApartmentStore } from 'store/useApartmentStore';
import { contextScreenSize } from '6_shared/context';
import cn from 'classnames';
import { IApartmentModel } from '6_shared/types';
import { SelectGuests } from '4_features/SelectGuests';

type PropsType = {
	apartment: IApartmentModel;
};

interface IFormData {
	name: string;
	phone: string;
	email: string;
}

export const OrderForm: React.FC<PropsType> = ({ apartment }) => {
	const { selectedParameters, resetState } = useOrderSelect();
	const { setServedDates } = useApartmentStore();
	const [openModal, setOpenModal] = useState(false);
	const [sendData, setSendData] = useState(false);
	const [openCalendar, setOpenCalendar] = useState<boolean>(false);
	const sizeWindow = useContext(contextScreenSize);

	useEffect(() => {
		const closeModalCalendar = (e: MouseEvent) => {
			e.stopPropagation();
			const element = e.target as HTMLElement;
			const res = element.closest('.date-picker_wrapper');
			const res2 = element.closest('.calendar_block');
			if (res || res2) {
				return;
			}
			setOpenCalendar(false);
			return;
		};
		document.addEventListener('click', closeModalCalendar);
		return () => document.removeEventListener('click', closeModalCalendar);
	}, []);

	const handleOpenCalendar = (e: React.MouseEvent) => {
		e.stopPropagation();
		setOpenCalendar(true);
	};

	const handleCloseCalendar = () => {
		setOpenCalendar(false);
	};

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
			apartment: apartment.id,
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
						setSendData(true);
						setTimeout(() => {
							resetState();
							handleClose();
						}, 10000);
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

	return (
		<div className={styles['order-section__order_block']} id="order-section">
			<div className={styles['calculator-block']}>
				{sizeWindow >= 950 && (
					<form>
						<div className={styles['price-block']}>
							<span className={styles['price']}>от {apartment.price}₽</span>/сутки
						</div>
						<div className={styles['form-to-block']}>
							<ButtonsOpenCalendar
								dateInn={format(selectedParameters.date.start, 'dd.MM.yyyy')}
								dateOut={format(selectedParameters.date.end, 'dd.MM.yyyy')}
								handleClick={handleOpenCalendar}
							>
								{openCalendar && (
									<div className={cn(styles['date-picker_wrapper'], 'date-picker_wrapper')}>
										<DatePicker handleClick={handleCloseCalendar} />
									</div>
								)}
							</ButtonsOpenCalendar>
							<SelectGuests apartment={apartment} />
						</div>
						<GreenButton title="забронировать" handleClick={(): void => setOpenModal(true)} />
					</form>
				)}
				{sizeWindow < 950 && (
					<>
						<DatePicker isMobil={sizeWindow < 950} handleClick={handleCloseCalendar} />
						<SelectGuests apartment={apartment} />
						<div className={styles['serve-button']}>
							<GreenButton title="забронировать" handleClick={(): void => setOpenModal(true)} />
						</div>
					</>
				)}
			</div>
			{openModal && (
				<ModalWindow handleClose={handleClose}>
					{!sendData && <WidgetFormModal handleSubmit={handleSubmit} />}
					{sendData && (
						<WidgetSuccessSendData
							dateFrom={selectedParameters.date.start}
							dateTo={selectedParameters.date.end}
						/>
					)}
				</ModalWindow>
			)}
			<div className={styles['info']}>бесплатная отмена за 14 дней</div>
		</div>
	);
};
