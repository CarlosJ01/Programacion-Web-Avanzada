import React from 'react';
import erroCargarImagen from '../recursos/imagenes/500.png';
import '../css/error.css';

const ErrorCarga = () => (
    <div className="text-center Error">
        <img src={erroCargarImagen} alt="500 Error de Carga"/>
        <h1 className='TextoError'>Error: 500 Error de Carga del BackEnd</h1>
    </div>
);

export default ErrorCarga;