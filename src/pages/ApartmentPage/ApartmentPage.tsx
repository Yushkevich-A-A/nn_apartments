import React from 'react';
import { PageNav } from 'widgets/PageNav/PageNav';
import { Apartment } from 'widgets/Apartment';
import styled from 'styled-components';

const Container = styled.section`
	height: 500px;
	margin-top: 55px;
`;

export const ApartmentPage: React.FC = () => {
	return (
		<Container>
			<PageNav />
			<Apartment />
		</Container>
	);
};
