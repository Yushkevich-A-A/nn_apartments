import React from 'react';
import styled from 'styled-components';

type PropsType = {
	open: boolean;
};

const Container = styled.div<any>`
	width: 20px;
	height: 10px;
	background-image: url('./assert/drop-down-arrow.svg');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
	transition: transform 0.2s;
`;

export const OpenArrow: React.FC<PropsType> = ({ open }) => {
	return <Container isOpen={open} />;
};
