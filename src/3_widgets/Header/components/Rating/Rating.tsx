import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	font-weight: 300;
	font-size: 20px;
	line-height: 140%;
	margin-bottom: 25px;

	font-feature-settings: 'pnum' on, 'lnum' on;
	color: #ffffff;
	padding: 5px 25px;
	background: rgba(255, 255, 255, 0.12);
	backdrop-filter: blur(9.7595px);
	border-radius: 8px;
`;

// TODO: продумать выгрузку рейтинга с сайта букинг и кликабельную ссылку на описание рейтинга

export const Rating = () => {
	return <Container>Оценка 9.8 на booking </Container>;
};
