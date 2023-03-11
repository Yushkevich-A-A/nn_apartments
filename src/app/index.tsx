import React from 'react';
import Header from 'widgets/header/ui';
import './style.scss';
import { Routes, Route } from "react-router-dom";
import Apartments from 'pages/Apartments';
import { Footer } from 'widgets/Footer';
import { InformationBlock } from 'widgets/InformationBlock';

function App() {
  return (
    <div className="App">
      <Header/>
      <Apartments/>
      <InformationBlock />
      <Footer />
    </div>
  );
}

export default App;
