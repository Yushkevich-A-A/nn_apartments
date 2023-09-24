import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	font-weight: 300;
	font-size: 25px;
	line-height: 130%;
	margin-bottom: 60px;
	color: #ffffff;

	@media (max-width: 960px) {
		font-size: 18px;
		margin-bottom: 75px;
	}

	@media (max-width: 640px) {
		font-size: 14px;
		margin-bottom: 225px;
	}
`;

const BoldText = styled.span`
	display: block;
	font-weight: 600;

	@media (max-width: 640px) {
		display: inline;
		&::before {
			content: ' ';
		}
	}
`;
export const SubTitle = () => {
	return (
		<Container>
			Безусловно, глубокий уровень погружения напрямую
			<BoldText>зависит от укрепления моральных ценностей.</BoldText>
		</Container>
	);
};
