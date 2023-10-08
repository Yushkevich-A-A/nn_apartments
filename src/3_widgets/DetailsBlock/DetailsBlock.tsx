import React, { useContext, FC } from 'react';
import { WidthWrapperPage } from '6_shared/components/WidthWrapperPage/WidthWrapperPage';
import { IApartmentModel } from '6_shared/types';
import { OrderForm } from '3_widgets/OrderForm';
import { contextScreenSize } from '6_shared/context';
import styled from 'styled-components';
import { DescriptionDetailsBlock } from './components';
import { LocationMap } from './components/LocationMap';

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

export const DetailsBlock: FC<PropsType> = ({ apartment }) => {
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
			{/* TODO: отображение на planshet*/}
			{
				// sizeWindow < 960 && (
				// 	<>
				// 		{/* <div className={styles['order-section__wrapper']}>
				// 			<div className={styles['order-section__description_block']}> */}
				// 		<WidthWrapperPage>
				// 			<div className={styles['order-section__block']}>
				// 				<TextH4 title="Апартаменты" />
				// 				<TextH3 title={apartment.name} />
				// 				<TextUnderTitle textArray={apartment.shortCharacteristic} />
				// 				<DetailedCharacteristic data={apartment.detailedCharacteristic} />
				// 			</div>
				// 			<div className={styles['order-section__block']}>
				// 				<TextH4 title="Удобства:" />
				// 				<ComfortsBlock comforts={apartment.comfort} />
				// 			</div>
				// 		</WidthWrapperPage>
				// 		<LocationMap apartment={apartment} />
				// 		<WidthWrapperPage>
				// 			<OrderForm price={apartment.price} />
				// 		</WidthWrapperPage>
				// 	</>
				// )
			}
		</Container>
	);
};
