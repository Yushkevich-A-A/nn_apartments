import React, { useState, useEffect } from 'react';
import styles from './SelectGuests.module.scss';
import { SelectComponent } from 'shared/components/SelectComponent';
import { useOrderSelect } from 'store/useOrderSelect';
import { GuestCalculate } from 'shared/components/GueatCalculate';
import { useApartmentStore } from 'store/useApartmentStore';
import { IApartmentModel } from 'shared/types';
import cn from 'classnames';

export const SelectGuests: React.FC = () => {
	const { selectedAppartment, apartments } = useApartmentStore();
	const [capacity, setCapacity] = useState(0);
	const { selectedParameters, setOrderParameter } = useOrderSelect();
	const [isMax, setIsMax] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { guests } = selectedParameters;

	// useEffect(() => {
	// 	const handleClickListener = (e: MouseEvent): void => {
	// 		const element = e.target as HTMLElement;
	// 		if (!element.closest('guest_calculate_block') && isOpen) {
	// 			setIsOpen(false);
	// 		}
	// 	};
	// 	window.addEventListener('click', handleClickListener);
	// 	return () => window.removeEventListener('click', handleClickListener);
	// }, []);

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

	return (
		<div className={styles['select-guests']}>
			<SelectComponent
				label="Для кого"
				value="1 гость"
				isOpen={isOpen}
				handleOpen={(): void => setIsOpen(!isOpen)}
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
					<GuestCalculate
						value={guests.baby}
						label="Младенцы"
						description="Младше 3-х лет"
						handleCount={(val: number): void => handleCalc('baby', val)}
						isMax={guests.baby > 5}
					/>
					<div className={styles['additional-info']}>
						{`Жильё рассчитано максимум на 6 гостей, \nне считая младенцев.`}
						<span className={styles['important-info']}>
							{`Проживание \nс питомцами не разрешается`}
						</span>
					</div>
				</div>
			)}
		</div>
	);
};
