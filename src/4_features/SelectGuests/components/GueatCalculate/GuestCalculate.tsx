import React from 'react';
import styled from 'styled-components';
import { ButtonCalc } from './ButtonCulc';

type PropsType = {
	value: number;
	label: string;
	description: string;
	handleCount: (payload: number) => void;
	isMax: boolean;
};

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const LabelBlock = styled.div`
	line-height: 120%;
	font-feature-settings: 'pnum' on, 'lnum' on;
	color: #000000;
`;
const Label = styled.div`
	font-weight: 500;
	font-size: 20px;
	margin-bottom: 5px;
`;
const Description = styled.div`
	font-weight: 400;
	font-size: 18px;
`;
const ControlBlock = styled.div`
	min-width: 140px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Value = styled.div`
	text-align: center;
	width: 30px;
	font-weight: 500;
	font-size: 20px;
`;

export const GuestCalculate: React.FC<PropsType> = ({
	value,
	label,
	description,
	handleCount,
	isMax,
}) => {
	const handleDecrement = (): void => {
		if (value <= 0) {
			return;
		}
		handleCount(value - 1);
	};

	const handleIncrement = (): void => {
		if (isMax) {
			return;
		}
		handleCount(value + 1);
	};

	return (
		<Container>
			<LabelBlock>
				<Label>{label}</Label>
				<Description>{description}</Description>
			</LabelBlock>
			<ControlBlock>
				<ButtonCalc cb={handleDecrement} type={'minus'} disable={value <= 0} />
				<Value>{value || 0}</Value>
				<ButtonCalc cb={handleIncrement} type={'plus'} disable={isMax} />
			</ControlBlock>
		</Container>
	);
};
