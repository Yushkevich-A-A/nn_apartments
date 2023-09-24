import { GreenButton } from '6_shared/components/GreenButton';
import React from 'react';
import styled from 'styled-components';
import { Rating } from '../Rating';
import { MainTitle } from '../MainTitle';
import { SubTitle } from '../SubTitle';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`;
const BlockButton = styled.div`
	width: 300px;

	@media (max-width: 640px) {
		width: 100%;
	}
`;

export const ContentHeader = () => {
	const handleClick = () => {
		const element = document.getElementById('order-section');
		if (element === null) {
			return;
		}
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<Container>
			<Rating />
			<MainTitle />
			<SubTitle />
			<BlockButton>
				<GreenButton title="Забронировать" handleClick={() => handleClick()} />
			</BlockButton>
		</Container>
	);
};
