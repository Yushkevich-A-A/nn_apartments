import { FC } from 'react';
import styled from 'styled-components';

type PropsType = {
	title: string;
};

const Container = styled.h3`
	font-family: 'Forum';
	font-weight: 400;
	font-size: 50px;
	text-transform: uppercase;
	color: #000000;

	@media (max-width: 640px) {
		font-size: 28px;
	}
`;

export const TextH3: FC<PropsType> = ({ title }) => {
	return <Container>{title}</Container>;
};
