import React, { FC } from 'react';
import styled from 'styled-components';

type PropsType = {
	phone: string;
	children?: React.ReactNode;
};

const Container = styled.a`
	text-decoration: none;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	font-feature-settings: 'pnum' on, 'lnum' on;
	color: #ffffff;

	&:hover {
		color: #5dccf4;
	}
`;

export const Phone: FC<PropsType> = (props) => {
	return <Container href={`tel:${props.phone}`}>{props.children}</Container>;
};
