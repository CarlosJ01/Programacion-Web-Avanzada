import React from 'react';

const Mapa = ({url}) => (
    <div className='Mapa'>
        <iframe src={url} frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title='mapaUbicaion'/>
    </div>
);

export default Mapa;