import React from 'react';
import { MenuNavigation } from '3_widgets/MenuNavigation';
import { ApartmentDescriptionBlock } from '3_widgets/ApartmentDescriptionBlock';
import styled from 'styled-components';

const Container = styled.section``;

export const ApartmentPage: React.FC = () => {
	return (
		<Container>
			<MenuNavigation />
			<ApartmentDescriptionBlock />
		</Container>
	);
};
