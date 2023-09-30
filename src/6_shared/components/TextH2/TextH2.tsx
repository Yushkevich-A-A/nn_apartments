import { FC } from 'react';
import styled from 'styled-components';

type PropsType = {
	title: string;
};

const Container = styled.h2`
	font-family: 'Forum';
	font-style: normal;
	font-weight: 400;
	font-size: 40px;
	line-height: 44px;
	text-transform: uppercase;

	@media (max-width: 960px) {
		font-size: 40px;
		line-height: 44px;
	}
	@media (max-width: 480px) {
		font-size: 28px;
		line-height: 32px;
	}
`;

export const TextH2: FC<PropsType> = ({ title }) => {
	return <Container>{title}</Container>;
};
