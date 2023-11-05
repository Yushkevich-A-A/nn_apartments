import React from 'react';
import { LineBetweenText } from '6_shared/components/LineBetweenText/LineBetweenText';
import styled from 'styled-components';

interface ICharacteristic {
	name: string;
	data: string | number;
}

interface IProps {
	data: ICharacteristic[];
}

const Container = styled.div`
	margin-top: 45px;
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 15px;

	@media (max-width: 640px) {
		margin-top: 25px;
		flex-direction: column;
	}
`;

const ItemDetail = styled.div`
	width: 45%;
	display: flex;
	align-items: flex-end;
	@media (max-width: 640px) {
		width: 100%;
	}
`;

const Key = styled.div`
	white-space: nowrap;
	font-weight: 400;
	font-size: 18px;
	line-height: 21px;
	color: rgba(0, 0, 0, 0.7);
	@media (max-width: 640px) {
		font-size: 16px;
	}
`;

const Value = styled(Key)`
	font-weight: 700;
`;

const Measure = styled.span`
	position: relative;
	text-transform: uppercase;
	font-size: 12px;
	&::after {
		content: '2';
		position: absolute;
		top: -7px;
		font-size: 10px;
		font-weight: 400;
	}
`;

export const ApartmentCharacteristic: React.FC<IProps> = ({ data }) => {
	return (
		<Container>
			{data.map((item) => (
				<ItemDetail>
					<Key>{item.name}</Key>
					<LineBetweenText />
					<Value>
						{item.data}
						{item.name.toLocaleLowerCase() === 'общая площадь' ? <Measure> m</Measure> : ''}
					</Value>
				</ItemDetail>
			))}
		</Container>
	);
};
