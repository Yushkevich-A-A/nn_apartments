import React, { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import apart1 from './img/apart1.jpg';
import apart2 from './img/apart2.jpg';
import apart3 from './img/apart3.jpg';
import apart4 from './img/apart4.jpg';
import mobil1 from './img/mobil1.jpg';
import mobil2 from './img/mobil2.jpg';
import mobil3 from './img/mobil3.jpg';
import mobil4 from './img/mobil4.jpg';
import { contextScreenSize } from '6_shared/context';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
	height: 100%;
	.carousel-inner,
	.carousel-item {
		height: 100%;
	}
`;

const ContainerImg = styled.div`
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

export const HeaderSlider = () => {
	const size = useContext(contextScreenSize);
	const [imgArr, setImgArr] = useState<string[]>([mobil1, mobil2, mobil3, mobil4]);

	useEffect(() => {
		if (size < 480) {
			setImgArr([mobil1, mobil2, mobil3, mobil4]);
		} else {
			setImgArr([apart1, apart2, apart3, apart4]);
		}
	}, [size]);

	return (
		<StyledCarousel fade={true} controls={false} indicators={false} pause={false}>
			{imgArr.map((item: string, index: number) => (
				<Carousel.Item key={index}>
					<ContainerImg style={{ backgroundImage: `url(${item})` }} />
				</Carousel.Item>
			))}
		</StyledCarousel>
	);
};
