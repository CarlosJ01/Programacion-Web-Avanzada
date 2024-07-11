import React from 'react';

import CardProducto from './cardProducto';

import '../css/listaProductos.css';

const ListaProductos = ({lista}) =>(
    <div className='ListaProductos card-deck'>
        {
            lista.map(producto =>{
                return <CardProducto key={producto.key} {...producto}/>
            })
        }
    </div>
);

export default ListaProductos;