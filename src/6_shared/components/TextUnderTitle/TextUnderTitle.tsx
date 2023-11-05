import React from 'react';
import styled from 'styled-components';

type PropsType = {
	textArray: string[];
};

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const ContentText = styled.div`
	padding: 0 15px;
	font-weight: 400;
	font-size: 18px;
	line-height: 160%;
	border-right: 1px solid #dbcaac;
	&:last-child {
		border-right: none;
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
		<Container>
			{textArray.map((item) => (
				<ContentText key={item}>{item}</ContentText>
			))}
		</Container>
	);
};
