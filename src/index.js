import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes,Route, } from "react-router-dom";
import Buscar from './routes/buscar';
import App from './App';
import Matricula from './routes/Matricula';
import PokemonesALL from './routes/PokemonesALL';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="pokemones" element={<PokemonesALL />} />
      <Route path="buscarID" element={<Buscar />} />
      <Route path="matricula" element={<Matricula />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);