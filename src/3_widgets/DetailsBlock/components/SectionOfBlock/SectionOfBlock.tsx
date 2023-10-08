import React, { FC } from 'react';
import styled from 'styled-components';

type PropsTypes = {
	children?: React.ReactNode;
};

const Container = styled.div`
	position: relative;
	padding: 55px 0;
	border-top: 1px solid #d2d2d2;
	&:first-child {
		padding-top: 0;
		border-top: none;
	}
	&:last-child {
		padding-bottom: 0;
	}

	@media (max-width: 640px) {
		position: relative;
		padding: 30px 0;
		border-top: 1px solid #d2d2d2;
	}
`;

export const SectionOfBlock: FC<PropsTypes> = ({ children }) => {
	return <Container>{children}</Container>;
};
