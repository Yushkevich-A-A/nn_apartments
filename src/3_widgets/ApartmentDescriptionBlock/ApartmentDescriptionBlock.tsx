import React, { useState, useEffect, FC } from 'react';
import { IApartmentModel } from '6_shared/types';
import { useApartmentStore } from 'store/useApartmentStore';
import './style.scss';
import { WidthWrapperPage } from '6_shared/components/WidthWrapperPage/WidthWrapperPage';
import { ApartmentsCarousel } from '4_features/ApartamentsCarousel';

type PropsType = {
	apartment: IApartmentModel;
};

export const ApartmentDescriptionBlock: FC<PropsType> = ({ apartment }) => {
	return (
		<div className="apartment">
			{
				//TODO: раскомментрировать по завершение редактирования
			}
			<WidthWrapperPage>
				<div className="apartment__slider-section">
					<p className="apartaments-text__head">{apartment.title}</p>
					<p className="apartaments-text__adress">{apartment.address}</p>
					{/* <ul className="apartaments-text__about">{apartment.description}</ul> */}
					<ul className="apartaments-text__about">
						{apartment.description.split('.').map((desc, index) => (
							<li key={index}>{desc}</li>
						))}
					</ul>
				</div>
			</WidthWrapperPage>
			<ApartmentsCarousel images={apartment.images} />
		</div>
	);
};
