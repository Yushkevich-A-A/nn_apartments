import React, { useEffect } from 'react';
import './style.scss';
import { Footer } from 'widgets/Footer';
import { InformationBlock } from 'widgets/InformationBlock';
import { useApartmentStore } from 'store/useApartmentStore';
import axios, { AxiosResponse } from 'axios';
import { IApartmentModel } from 'shared/types';
import ApartmentPage from 'pages/ApartmentPage';
import { Header } from 'widgets/Header';

function App() {
	const { addApartments, selectApartment } = useApartmentStore.getState();

	const handleLoader = async (): Promise<AxiosResponse<IApartmentModel[]>> => {
		const url: string = process.env.REACT_APP_BASE_URL as string;
		const response = await axios.get(`${url}/api/apartments`);
		addApartments(response.data);
		selectApartment(response.data[1].id);
		return response;
	};

	useEffect(() => {
		handleLoader();
	}, []);

	return (
		<div className="App">
			<Header />
			<ApartmentPage />
			<InformationBlock />
			<Footer />
		</div>
	);
}

export default App;
