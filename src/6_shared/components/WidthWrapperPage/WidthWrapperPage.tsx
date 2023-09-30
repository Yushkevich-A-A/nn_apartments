import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 1200px;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding: 0 10px;

	@media (max-width: 1200px) {
		max-width: 993px;
	}

	@media (max-width: 960px) {
		max-width: 653px;
		padding: 0 20px;
	}

	@media (max-width: 380px) {
		max-width: 360px;
	}
`;

export const WidthWrapperPage: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <Container>{children}</Container>;
};
