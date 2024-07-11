import React from 'react';
import {Link} from 'react-router-dom';

import servidor from '../backend';

import '../css/cardProducto.css';

const CardProducto = ({nombre, descripcion, precio, imagen, url, precioAnterior}) =>(
    <div className='CardProducto'>
        <div className="card">
            <div className="card-header">
                {nombre}
            </div>
            <div className="card-body">
                <img className="card-img-top img-fluid" src={servidor+imagen} alt="Imagen de categoria"/>
                { precioAnterior ? 
                (<div className='Oferta'>
                    <div className='Solo'>
                        <p>Oferta</p>
                    </div>
                    <div className='PrecioAnterior'>
                        $ {precioAnterior}
                    </div>
                </div>) 
                : null }
                <h5 className="card-title">$ {precio}</h5>
                <p className="card-text">{descripcion}</p>
            </div>
            <div className="card-footer">
                <Link to={url} className='urlCard'>Ver más</Link>
            </div>
        </div>
    </div>
);

export default CardProducto;