import React from 'react';
import Logo from '../img/img1.jpeg';
export default function Matricula() {
    return (
        <>
      <main style={{ padding: "1rem 0" }}>
        <div className='img'>
        <img src={Logo} alt="logo" />
        <h1>Ilse Marisela Martin del Campo Ramos</h1>
        <h1>Matricula: 191442</h1>
        <h3>Carrera: ING. EN DESARROLLO Y GESTIÓN DE SOFTWARE</h3>
        <h3>IDGS 8-B</h3>
        <h2>Maestro: ALBERTO CAMPOS HERNANDEZ</h2>
        </div>
      </main>
        </>
    );
  }