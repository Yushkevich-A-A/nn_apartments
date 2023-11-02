import React from 'react';
import { MenuNavigation } from '3_widgets/MenuNavigation';
import { Apartment } from '3_widgets/Apartment';
import styled from 'styled-components';

const Container = styled.section``;

export const ApartmentPage: React.FC = () => {
	return (
		<Container>
			<MenuNavigation />
			<Apartment />
		</Container>
	);
};
