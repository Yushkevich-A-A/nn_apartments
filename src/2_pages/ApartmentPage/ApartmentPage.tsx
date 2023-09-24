import React from 'react';
import { PageNav } from '3_widgets/PageNav/PageNav';
import { Apartment } from '3_widgets/Apartment';
import styled from 'styled-components';

const Container = styled.section``;

export const ApartmentPage: React.FC = () => {
	return (
		<Container>
			<PageNav />
			<Apartment />
		</Container>
	);
};
