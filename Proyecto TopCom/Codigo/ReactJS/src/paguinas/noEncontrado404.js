import React from 'react';
import noEncontradoImagen from '../recursos/imagenes/404.png';
import '../css/error.css';

const NoEncontrado = () => (
    <div className="text-center Error">
        <img src={noEncontradoImagen} alt="404 Paguina No Encontrada"/>
        <h1 className='TextoError'>Error: 404 Paguina No Encontrada</h1>
    </div>
);

export default NoEncontrado;