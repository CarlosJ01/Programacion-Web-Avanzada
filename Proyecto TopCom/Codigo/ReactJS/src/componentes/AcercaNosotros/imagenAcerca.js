import React from 'react';

import imagen from '../../recursos/imagenes/acerca_de.jpg';

const ImagenNosotros = () =>(
    <div className='Imagen'>
        <img src={imagen} className='img-fluid' alt="Acerca de TopCom."/>
    </div>
);

export default ImagenNosotros;