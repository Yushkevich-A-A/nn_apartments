import React, { useEffect, useState } from 'react';
import { MenuNavigation } from '3_widgets/MenuNavigation';
import { ApartmentDescriptionBlock } from '3_widgets/ApartmentDescriptionBlock';
import styled from 'styled-components';
import { IApartmentModel } from '6_shared/types';
import { useApartmentStore } from 'store/useApartmentStore';
import { ApartmentOrderBlock } from '3_widgets/ApartmentOrderBlock';

const Container = styled.section``;

export const ApartmentPage: React.FC = () => {
	// TODO: переделать логику
	const [apartment, setApartment] = useState<IApartmentModel | null>(null);
	const { getApartment, selectedAppartment } = useApartmentStore();

	useEffect(() => {
		if (selectedAppartment === null) {
			return;
		}
		const data = getApartment(selectedAppartment);
		if (!data) {
			return;
		}
		setApartment(data);
	}, [selectedAppartment]);
	return (
		<Container>
			<MenuNavigation />
			{apartment && <ApartmentDescriptionBlock apartment={apartment} />}
			{apartment && <ApartmentOrderBlock apartment={apartment} />}
		</Container>
	);
};
