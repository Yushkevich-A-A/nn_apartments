import React, { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import data from './data.json';
import apart1 from './img/apart1.jpg';
import apart2 from './img/apart2.jpg';
import apart3 from './img/apart3.jpg';
import apart4 from './img/apart4.jpg';
import mobil1 from './img/mobil1.jpg';
import mobil2 from './img/mobil2.jpg';
import mobil3 from './img/mobil3.jpg';
import mobil4 from './img/mobil4.jpg';
import ICarouselData from 'shared/interfaces/ICarouselData';
import './style.scss';
import { contextViewSize } from 'shared/context/contextScreenSize';
import { useImagePreloader } from 'shared/hooks/useImagePreloader';

export function HeaderSlider() {
	const size = useContext(contextViewSize);
	const arrImg = [apart1, apart2, apart3, apart4];
	console.log(size);
	const arrImgMobil = [mobil1, mobil2, mobil3, mobil4];
	const imagesPreloaded = useImagePreloader([apart1, apart2, apart3, apart4]);
	const imagesPreloaded2 = useImagePreloader([mobil1, mobil2, mobil3, mobil4]);
	console.log(imagesPreloaded);
	console.log(imagesPreloaded2);

	return (
		<Carousel fade={true} controls={false} indicators={false} pause={false}>
			{data.map((item: ICarouselData, index: number) => (
				<Carousel.Item key={item.id}>
					{size < 480 && (
						<div
							className="carousel_img"
							style={{ backgroundImage: `url(${arrImgMobil[index]})` }}
						/>
					)}
					{size >= 480 && (
						<div className="carousel_img" style={{ backgroundImage: `url(${arrImg[index]})` }} />
					)}
				</Carousel.Item>
			))}
		</Carousel>
	);
}
