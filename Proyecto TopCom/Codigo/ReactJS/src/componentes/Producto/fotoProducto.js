import React from 'react';
import servidor from '../../backend';

const ImagenProducto = ({imagen}) =>(
    <div className='ImagenProducto'>
        <img src={servidor+imagen} alt={'Imagen del producto'}/>
    </div>
);

export default ImagenProducto;