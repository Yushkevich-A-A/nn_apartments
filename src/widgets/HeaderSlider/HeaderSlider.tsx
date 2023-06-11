import React, { useEffect, useState } from 'react';
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

export function HeaderSlider() {
	const arrImg = [apart1, apart2, apart3, apart4];
	const arrImgMobil = [mobil1, mobil2, mobil3, mobil4];
	const [isMobil, setIsMobil] = useState<boolean>(false);

	useEffect(() => {
		const checkSize = () => {
			const { width } = document.body.getBoundingClientRect();
			if (width < 640) {
				return setIsMobil(true);
			}
			setIsMobil(false);
		};
		window.addEventListener('resize', checkSize);
		return () => {
			window.removeEventListener('resize', checkSize);
		};
	}, []);

	return (
		<Carousel fade={true} controls={false} indicators={false} pause={false}>
			{data.map((item: ICarouselData, index: number) => (
				<Carousel.Item key={item.id}>
					<div
						className="carousel_img"
						style={{ backgroundImage: `url(${isMobil ? arrImgMobil[index] : arrImg[index]})` }}
					/>
				</Carousel.Item>
			))}
		</Carousel>
	);
}
