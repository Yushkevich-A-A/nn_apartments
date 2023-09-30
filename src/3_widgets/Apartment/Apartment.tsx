import React, { useState, useEffect } from 'react';
import { IApartmentModel } from '6_shared/types';
import { useApartmentStore } from 'store/useApartmentStore';
import './style.scss';
import { DetailsBlock } from '3_widgets/DetailsBlock';
import { WidthWrapperPage } from '6_shared/components/WidthWrapperPage/WidthWrapperPage';
import { ApartmentsCarousel } from '3_widgets/ApartamentsCarousel';

export function Apartment() {
	const [apartment, setApartment] = useState<IApartmentModel | null>(null);
	const { getApartment, selectedAppartment } = useApartmentStore();

	useEffect(() => {
		if (selectedAppartment === null) {
			return;
		}
		const data = getApartment(selectedAppartment);
		if (!data) {
			return;
		}
		setApartment(data);
	}, [selectedAppartment]);

	return (
		<>
			{!!apartment && (
				<div className="apartment">
					{
						//TODO: раскомментрировать по завершение редактирования
					}
					<WidthWrapperPage>
						<div className="apartment__slider-section">
							<p className="apartaments-text__head">{apartment.title}</p>
							<p className="apartaments-text__adress">{apartment.address}</p>
							<ul className="apartaments-text__about">{apartment.description}</ul>
						</div>
					</WidthWrapperPage>
					<ApartmentsCarousel images={apartment.images} />
					<DetailsBlock apartment={apartment} />
				</div>
			)}
		</>
	);
}
