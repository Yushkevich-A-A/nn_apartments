import React from 'react';
import styled from 'styled-components';

type PropsType = {
	textArray: string[];
};

const ContainerText = styled.div`
	padding-right: 15px;
	font-weight: 400;
	font-size: 18px;
	line-height: 160%;
	&:nth-child(n + 2) {
		padding-left: 15px;
		border-left: 1px solid #dbcaac;
	}
	&:last-child {
		padding-right: 0;
	}

	@media (max-width: 1200px) {
		font-size: 16px;
	}

	@media (max-width: 640px) {
		font-size: 14px;
	}
`;

export const TextUnderTitle: React.FC<PropsType> = ({ textArray }) => {
	return (
		<>
			{textArray.map((item) => (
				<ContainerText key={item}>{item}</ContainerText>
			))}
		</>
	);
};
