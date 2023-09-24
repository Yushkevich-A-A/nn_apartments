import React from 'react';
import { InfoComponent } from '6_shared/components/InfoComponent';
import styled from 'styled-components';

interface IProps {
	children?: React.ReactNode;
	dateInn: string;
	dateOut: string;
	handleClick: (e: React.MouseEvent) => void;
}

// TODO: продумать названия стилизованных блоков, возможно как-то универсировать названия
const Container = styled.div`
	position: relative;
`;

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	cursor: pointer;
`;

export const ButtonsOpenCalendar: React.FC<React.PropsWithChildren<IProps>> = (props) => {
	return (
		<Container>
			<ButtonsContainer onClick={props.handleClick}>
				<InfoComponent value={props.dateInn} label="Въезд" />
				<InfoComponent value={props.dateOut} label="Прибытие" />
			</ButtonsContainer>
			{props.children}
		</Container>
	);
};
