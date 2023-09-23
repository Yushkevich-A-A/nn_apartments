import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
	padding: 20px 55px;
	width: 259px;
	height: 60px;
	background: linear-gradient(180deg, #29a727 0%, #117432 100%);
	box-shadow: 0px 2px 7px rgba(0, 25, 39, 0.35);
	border-radius: 8px;
`;

const Text = styled.span`
	font-weight: 700;
	font-size: 17px;
	line-height: 20px;
	/* identical to box height */
	text-transform: uppercase;
	color: #ffffff;
	text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
`;

export const OrderButton: React.FC = () => {
	return (
		<Container>
			<Text>Забронировать</Text>
		</Container>
	);
};
