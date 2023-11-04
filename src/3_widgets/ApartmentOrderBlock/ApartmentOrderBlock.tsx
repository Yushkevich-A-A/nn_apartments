import React, { useContext, FC } from 'react';
import { WidthWrapperPage } from '6_shared/components/WidthWrapperPage/WidthWrapperPage';
import { IApartmentModel } from '6_shared/types';
import { OrderForm } from '4_features/OrderForm';
import { contextScreenSize } from '6_shared/context';
import { DescriptionDetailsBlock } from './components/DescriptionDetailsBlock';
import { LocationMap } from './components/LocationMap';
import { CharacteristicSection } from './components/CharacteristicSection';
import { SectionOfBlock } from './components/SectionOfBlock';
import { ComfortSection } from './components/ComfortSection';
import styled from 'styled-components';

type PropsType = {
	apartment: IApartmentModel;
};

const Container = styled.div`
	padding: 70px 0;
	background-color: #f7f5ee;
	@media (max-width: 640px) {
		padding: 35px 0;
	}
`;

const Section = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

export const ApartmentOrderBlock: FC<PropsType> = ({ apartment }) => {
	const sizeWindow = useContext(contextScreenSize);
	return (
		<Container>
			{/* TODO: продумать переключение режимов отображения при изменении размера экрана */}
			{/* TODO: отображение на desktop*/}
			{sizeWindow >= 960 && (
				<WidthWrapperPage>
					<Section>
						<DescriptionDetailsBlock apartment={apartment} />
						<OrderForm price={apartment.price} />
					</Section>
				</WidthWrapperPage>
			)}
			{/* TODO: отображение на tablet*/}
			{sizeWindow < 960 && (
				<>
					<WidthWrapperPage>
						<SectionOfBlock>
							<CharacteristicSection apartment={apartment} />
						</SectionOfBlock>
						<SectionOfBlock>
							<ComfortSection comforts={apartment.comfort} />
						</SectionOfBlock>
					</WidthWrapperPage>
					<LocationMap apartment={apartment} />
					<WidthWrapperPage>
						<OrderForm price={apartment.price} />
					</WidthWrapperPage>
				</>
			)}
		</Container>
	);
};
