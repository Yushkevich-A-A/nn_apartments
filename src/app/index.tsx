import React, { useEffect } from 'react';
import './style.scss';
import { Footer } from 'widgets/Footer';
import { InformationBlock } from 'widgets/InformationBlock';
import { useApartmentStore } from 'store/useApartmentStore';
import axios, { AxiosResponse } from 'axios';
import { IApartmentModel } from 'shared/types';
import ApartmentPage from 'pages/ApartmentPage';
import { Header } from 'widgets/Header';
import { useOrderSelect } from 'store/useOrderSelect';

function App() {
	const { addApartments, selectApartment, setServedDates } = useApartmentStore.getState();
	const { setOrderParameter } = useOrderSelect.getState();

	const handleLoader = async (): Promise<AxiosResponse<IApartmentModel[]>> => {
		const url: string = process.env.REACT_APP_BASE_URL as string;
		const response = await axios.get(`${url}/api/apartments`);
		addApartments(response.data);
		selectApartment(response.data[1].id);
		setOrderParameter({ apartment: response.data[1].id });
		const serverDate = await axios.get(`${url}/api/dates/${response.data[1].id}/`);
		if (serverDate.data[0]) {
			setServedDates(serverDate.data[0].dates ? serverDate.data[0].dates : []);
		}
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
