import { FC } from 'react';
import styled from 'styled-components';

type PropsType = {
	title: string;
};

const Container = styled.h4`
	font-weight: 400;
	font-size: 24px;
	color: #90856b;

	@media (max-width: 640px) {
		font-size: 18px;
	}
`;

export const TextH4: FC<PropsType> = ({ title }) => {
	return <Container>{title}</Container>;
};
