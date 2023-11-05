import React, { useState, useEffect } from 'react';
import { SelectComponent } from '6_shared/components/SelectComponent';
import { useOrderSelect } from 'store/useOrderSelect';
import { GuestCalculate } from '4_features/SelectGuests/components/GueatCalculate';
import { useApartmentStore } from 'store/useApartmentStore';
import { IApartmentModel } from '6_shared/types';
import { CloseBTN } from './CloseButton';
import styled from 'styled-components';

type PropsType = {
	apartment: IApartmentModel;
};

const Container = styled.div`
	position: relative;
	margin-bottom: 10px;
	@media (max-width: 960px) {
		margin-top: 10px;
	}
`;

const Calculator = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	background: #ffffff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
	border-radius: 8px;
	padding: 35px 25px;
`;

const InfoBlock = styled.div`
	color: #000000;
	opacity: 0.7;
	margin-top: 20px;
`;

export const SelectGuests: React.FC<PropsType> = ({ apartment }) => {
	// const { selectedAppartment, apartments } = useApartmentStore();
	const { selectedParameters, setOrderParameter } = useOrderSelect();
	const [isMax, setIsMax] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { guests } = selectedParameters;

	useEffect(() => {
		const countGuests = guests.adult + guests.children;
		if (countGuests >= apartment.capacity) {
			setIsMax(true);
		} else {
			setIsMax(false);
		}
	}, [guests, apartment]);

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

	const handleOpen = () => {
		setIsOpen(true);
	};
	return (
		<Container>
			<SelectComponent
				label="Для кого"
				value={getAmountOfGuests()}
				isOpen={isOpen}
				handleOpen={handleOpen}
			/>
			{isOpen && (
				<Calculator className="guest_calculate_block">
					<CloseBTN cb={() => setIsOpen(false)} />
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
					<InfoBlock>
						{`Жильё рассчитано максимум на ${apartment.capacity} гостей, \nне считая младенцев. `}
						<span style={{ textDecoration: 'underline' }}>
							{`Проживание \nс питомцами не разрешается`}
						</span>
					</InfoBlock>
				</Calculator>
			)}
		</Container>
	);
};
