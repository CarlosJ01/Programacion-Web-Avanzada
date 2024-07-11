import React from 'react';

const InformacionProducto = ({nombre, descripcion, precio, inventario}) =>(
    <div className='InformacionProducto'>
        <div className='Nombre'>
            <h1>{nombre}</h1>
        </div>
        <div className='Descripcion'>
            <p>{descripcion}</p>
        </div>
        <div className='PrecioCantidad'>
            <h5>$ {precio}</h5>
            <h6>Solo queda(n) : {inventario}</h6>
        </div>
    </div>
);

export default InformacionProducto;