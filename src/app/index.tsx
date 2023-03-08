import React from 'react';
import Header from 'widgets/header/ui';
import './style.scss';
import { Routes, Route } from "react-router-dom";
import Apartments from 'pages/Apartments';
import { Footer } from 'widgets/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Apartments/>

      <Footer />
    </div>
  );
}

export default App;
