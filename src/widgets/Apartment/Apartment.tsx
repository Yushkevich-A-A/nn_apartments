import React, { useState, useEffect } from 'react';
import { IApartmentModel } from 'shared/types';
import { useApartmentStore } from 'store/useApartmentStore';
import './style.scss';
import { OrderSection } from 'widgets/OrderSection';
import { WidthWrapperPage } from 'shared/components/WidthWrapperPage';
import { ApartmentsCarousel } from 'widgets/ApartamentsCarousel';

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
					<WidthWrapperPage>
						<div className="apartment__slider-section">
							<p className="apartaments-text__head">{apartment.title}</p>
							<p className="apartaments-text__adress">{apartment.address}</p>
							<div className="apartaments-text__about">{apartment.description}</div>
						</div>
						<ApartmentsCarousel images={apartment.images} />
					</WidthWrapperPage>
					<OrderSection apartment={apartment} />
				</div>
			)}
		</>
	);
}
