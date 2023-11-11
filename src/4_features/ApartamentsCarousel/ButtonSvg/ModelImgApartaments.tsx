import { useRef, useState } from 'react';

export function ModelImgApartaments() {
	const [isImageExpanded, setIsImageExpanded] = useState(false); // State to track the image expansion
	const [selectedImage, setSelectedImage] = useState({ photo: '' });
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (img) => {
		setSelectedImage(img);
		console.log(selectedImage);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<>
			{isModalOpen && (
				<div className="modal">
					<img src={selectedImage.photo} alt="Expanded Apartment" />
					<button onClick={closeModal}>Закрыть</button>
				</div>
			)}
		</>
	);
}
