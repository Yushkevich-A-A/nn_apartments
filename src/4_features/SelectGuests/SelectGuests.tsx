import React, { useState, useEffect } from 'react';
import styles from './SelectGuests.module.scss';
import { SelectComponent } from '6_shared/components/SelectComponent';
import { useOrderSelect } from 'store/useOrderSelect';
import { GuestCalculate } from '6_shared/components/GueatCalculate';
import { useApartmentStore } from 'store/useApartmentStore';
import { IApartmentModel } from '6_shared/types';
import cn from 'classnames';

export const SelectGuests: React.FC = () => {
	const { selectedAppartment, apartments } = useApartmentStore();
	const [capacity, setCapacity] = useState(0);
	const { selectedParameters, setOrderParameter } = useOrderSelect();
	const [isMax, setIsMax] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { guests } = selectedParameters;

	useEffect(() => {
		const closeCalcGuest = (e: MouseEvent) => {
			const element = e.target as HTMLElement;
			if (element.closest('.guest_calculate_block')) {
				return;
			}
			setIsOpen(false);
		};
		document.addEventListener('click', closeCalcGuest);
		return () => document.removeEventListener('click', closeCalcGuest);
	}, []);

	useEffect(() => {
		if (selectedAppartment === null) {
			return;
		}
		const apartCapacity = apartments.find(
			(apartment: IApartmentModel) => apartment.id === selectedAppartment,
		)?.capacity;
		setCapacity(apartCapacity || 0);
	}, [selectedAppartment]);

	useEffect(() => {
		const countGuests = guests.adult + guests.children;
		if (countGuests >= capacity) {
			setIsMax(true);
		} else {
			setIsMax(false);
		}
	}, [guests, capacity]);

	const handleCalc = (name: string, value: number): void => {
		const newCountGuests = { ...guests, [name]: value };
		const countGuests = newCountGuests.adult + newCountGuests.children;
		if (countGuests === 0) {
			newCountGuests.adult = 1;
		}
		setOrderParameter({ guests: newCountGuests });
	};

	const getAmountOfGuests = () => {
		const amount = guests.adult + guests.children;
		const stringAmount = amount.toString();
		if (
			stringAmount.endsWith('0') ||
			stringAmount.endsWith('5') ||
			stringAmount.endsWith('6') ||
			stringAmount.endsWith('7') ||
			stringAmount.endsWith('8') ||
			stringAmount.endsWith('9') ||
			stringAmount.endsWith('10') ||
			stringAmount.endsWith('11') ||
			stringAmount.endsWith('12') ||
			stringAmount.endsWith('13') ||
			stringAmount.endsWith('14')
		) {
			return `${stringAmount} гостей`;
		}
		if (stringAmount.endsWith('2') || stringAmount.endsWith('3') || stringAmount.endsWith('4')) {
			return `${stringAmount} гостя`;
		}
		if (stringAmount.endsWith('1')) {
			return `${stringAmount} гость`;
		}
		return `1 гость`;
	};

	const handleOpen = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsOpen(true);
	};
	return (
		<div className={styles['select-guests']} onClick={handleOpen}>
			<SelectComponent
				label="Для кого"
				value={getAmountOfGuests()}
				isOpen={isOpen}
				handleOpen={() => {
					return;
				}}
			/>
			{isOpen && (
				<div className={cn(styles['calculate'], 'guest_calculate_block')}>
					<GuestCalculate
						value={guests.adult}
						label="Взрослые"
						description="возраст 13 лет и старше"
						handleCount={(val: number): void => handleCalc('adult', val)}
						isMax={isMax}
					/>
					<GuestCalculate
						value={guests.children}
						label="Дети"
						description="возраст 3-12 лет"
						handleCount={(val: number): void => handleCalc('children', val)}
						isMax={isMax}
					/>
					<div className={styles['additional-info']}>
						{`Жильё рассчитано максимум на ${capacity} гостей, \nне считая младенцев. `}
						<span className={styles['important-info']}>
							{`Проживание \nс питомцами не разрешается`}
						</span>
					</div>
				</div>
			)}
		</div>
	);
};
