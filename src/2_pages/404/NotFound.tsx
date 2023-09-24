import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
	height: 500px;
	margin-top: 55px;
`;

export const NotFound: React.FC = () => {
	return <Container>страница не найдена</Container>;
};
