import React, { FC } from 'react';
import { TextH4 } from '6_shared/components';
import styled from 'styled-components';
import { getComfortIcon } from '4_features/DetailsBlock/lib/getConfortIcon';

interface IProps {
	type: string;
	description: string;
}

type PropTypes = {
	comforts: IProps[];
};

type StyleProps = {
	icon: string;
};

const List = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.div`
	display: flex;
	width: 50%;
	margin-top: 15px;

	@media (max-width: 1200px) {
		width: 50%;
		&:nth-child(2n) {
			padding-left: 20px;
		}
	}

	@media (max-width: 640px) {
		flex-direction: column;
	}
`;
const Icon = styled.div`
	width: 30px;
	height: 30px;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;

	@media (max-width: 640px) {
		width: 40px;
		height: 40px;
		margin-bottom: 5px;
	}
`;
const Description = styled.div`
	width: 100%;
	font-weight: 400;
	font-size: 18px;
	line-height: 120%;
	padding-left: 15px;

	@media (max-width: 640px) {
		font-size: 14px;
		padding-left: 0;
	}
`;

export const ComfortSection: FC<PropTypes> = ({ comforts }) => {
	return (
		<>
			<TextH4 title="Удобства:" />
			<List>
				{comforts.map((item: IProps, i) => (
					<ListItem key={i}>
						<Icon style={{ backgroundImage: `url(${getComfortIcon(item.type)})` }} />
						<Description>{item.description}</Description>
					</ListItem>
				))}
			</List>
		</>
	);
};
