import React from 'react';
import Header from 'widgets/header/ui';
//import logo from './logo.svg';
import './style.module.scss';
import { Routes, Route } from "react-router-dom";
import Apartaments from 'pages/Apartaments';

function App() {
  return (
    <div className="App">
      <Header/>
      <Apartaments/>
      <Routes>
      </Routes>
    </div>
  );
}

export default App;
