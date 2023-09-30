import React from 'react';
import styled from 'styled-components';
import { OpenArrow } from '6_shared/components/OpenArrow';

const Container = styled.div`
	padding: 15px;
	width: 100%;
	background: rgba(212, 190, 158, 0.04);
	border: 1px solid #e3e3e3;
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;

	@media (max-width: 960px) {
		background: #ffffff;
		border-radius: 15px;
	}
`;

const SelectElement = styled.div`
	display: block;
	font-weight: 400;
	font-size: 18px;
	line-height: 130%;
	font-feature-settings: 'pnum' on, 'lnum' on;
	color: #000000;
`;

const Label = styled.div`
	display: block;
	font-weight: 400;
	font-size: 18px;
	line-height: 130%;
	color: #000000;
	opacity: 0.7;
`;

interface IProps {
	value: string;
	label: string;
	handleOpen: () => void;
	isOpen: boolean;
}

export const SelectComponent: React.FC<IProps> = ({ value, label, handleOpen, isOpen }) => {
	return (
		<Container onClick={handleOpen}>
			<div>
				<Label>{label}</Label>
				<SelectElement>{value}</SelectElement>
			</div>
			<OpenArrow open={isOpen} />
		</Container>
	);
};
