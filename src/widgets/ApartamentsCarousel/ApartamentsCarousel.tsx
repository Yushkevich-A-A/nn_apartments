import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from 'react';
import ButtonSvg from './ButtonSvg';
import { current } from '@reduxjs/toolkit';
export function ApartmentsCarousel({ images }: { images: string[] }) {
	const [slider, setSlider] = useState<any>(null);
	const sliderRef = useRef(null);
	const windowSize = useRef(window.innerWidth);
	const settings = {
		className: 'slider variable-width',
		centerMode: windowSize.current <= 540 ? false : true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		variableWidth: windowSize.current <= 540 ? false : true,
	};
	const prev = () => {
		slider?.slickPrev();
	};
	const next = () => {
		slider?.slickNext();
	};
	const imagesGroupList = Object.entries(images).map((e) => {
		return { name: e[0], imagesList: e[1] };
	});
	return (
		<div className="apartments-carousel">
			<Slider ref={(c: any) => setSlider(c)} {...settings}>
				{imagesGroupList.map((item: any) =>
					item.imagesList.map((img) => (
						<img className="apartments-carousel__item" key={item.name} src={img.photo}></img>
					)),
				)}
			</Slider>
			<div className="apartments-carousel__button-section">
				<button onClick={prev} className="apartments-carousel__button">
					<ButtonSvg />
				</button>
				<button onClick={next} className="apartments-carousel__button forward">
					<ButtonSvg />
				</button>
			</div>
		</div>
	);
}
