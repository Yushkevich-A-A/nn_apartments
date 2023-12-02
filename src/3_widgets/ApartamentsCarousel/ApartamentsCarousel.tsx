// import './style.scss';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { useRef, useState } from 'react';
// import ButtonSvg from './ButtonSvg';
// import { current } from '@reduxjs/toolkit';

// export function ApartmentsCarousel({ images }: { images: string[] }) {
// 	const [slider, setSlider] = useState<any>(null);
// 	const sliderRef = useRef(null);
// 	const windowSize = useRef(window.innerWidth);
// 	// const [selectedImage, setSelectedImage] = useState(null);
// 	const [selectedImage, setSelectedImage] = useState({ photo: '' });
// 	const [isModalOpen, setIsModalOpen] = useState(false);
// 	const [expandedImageIndex, setExpandedImageIndex] = useState(null);

// 	const settings = {
// 		className: 'slider variable-width',
// 		centerMode: windowSize.current <= 540 ? false : true,
// 		infinite: true, // Changed from false to true, enabling looped slider
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		arrows: false,
// 		variableWidth: windowSize.current <= 540 ? false : true,
// 	};
// 	const openModal = (img) => {
// 		setSelectedImage(img);
// 		console.log(selectedImage);
// 		setIsModalOpen(true);
// 	};
// 	const closeModal = () => {
// 		setIsModalOpen(false);
// 	};

// 	const prev = () => {
// 		slider?.slickPrev();
// 	};

// 	const next = () => {
// 		slider?.slickNext();
// 	};

// 	const imagesGroupList = Object.entries(images).map((e) => {
// 		return { name: e[0], imagesList: e[1] };
// 	});

// 	return (
// 		<div className="apartments-carousel">
// 			<Slider ref={(c: any) => setSlider(c)} {...settings}>
// 				{imagesGroupList.map((item: any) =>
// 					item.imagesList.map((img, index) => (
// 						<img
// 							className={`apartments-carousel__item ${
// 								expandedImageIndex === index ? 'expanded' : ''
// 							}`}
// 							key={`${item.name}-${index}`}
// 							src={img.photo}
// 							onClick={() => openModal(img)}
// 							alt="Apartment"
// 						></img>
// 					)),
// 				)}
// 			</Slider>
// 			{isModalOpen && (
// 				<div className="modal">
// 					<img src={selectedImage.photo} alt="Expanded Apartment" />
// 					<button onClick={closeModal}>Закрыть</button>
// 				</div>
// 			)}
// 			<div className="apartments-carousel__button-section">
// 				<button onClick={prev} className="apartments-carousel__button">
// 					<ButtonSvg />
// 				</button>
// 				<button onClick={next} className="apartments-carousel__button forward">
// 					<ButtonSvg />
// 				</button>
// 			</div>
// 		</div>
// 	);
// }
export {};