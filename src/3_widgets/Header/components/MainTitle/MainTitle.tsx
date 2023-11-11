import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 660px;
	font-family: 'Forum';
	font-style: normal;
	font-weight: 400;
	font-size: 63px;
	line-height: 110%;
	margin-bottom: 25px;
	text-transform: uppercase;
	color: #ffffff;

	@media (max-width: 960px) {
		width: 420px;
		font-size: 40px;
		margin-bottom: 15px;
	}

	@media (max-width: 640px) {
		width: 300px;
		font-size: 28px;
		margin-bottom: 25px;
	}
`;

export const MainTitle = () => {
	return <Container>Аренда апартаментов в Нижнем Новгороде ntcn</Container>;
};
