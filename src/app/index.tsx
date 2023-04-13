import React, { useEffect } from 'react';
import Header from 'widgets/header/ui';
import './style.scss';
import { Routes, Route } from "react-router-dom";
import Apartments from 'pages/ApartmentPage';
import { Footer } from 'widgets/Footer';
import { InformationBlock } from 'widgets/InformationBlock';
import { useApartmentStore } from 'store/useApartmentStore';
import axios, { AxiosResponse } from 'axios';
import { IApartmentModel } from 'shared/types';
import ApartmentPage from 'pages/ApartmentPage';

function App() {
  const { addApartments } = useApartmentStore.getState();
  const handleLoader = async (): Promise<AxiosResponse<IApartmentModel[]>> => {
    const url: string = (process.env.REACT_APP_BASE_URL as string);
    const response = await axios.get(`${url}/api/apartments`);
    addApartments(response.data);
    return response;
  }

  useEffect(() => {
    handleLoader();
  }, [])

  return (
    <div className="App">
      <Header/>
      <ApartmentPage/>
      <InformationBlock />
      <Footer />
    </div>
  );
}

export default App;
