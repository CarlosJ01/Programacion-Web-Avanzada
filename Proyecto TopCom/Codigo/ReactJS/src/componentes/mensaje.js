import React from 'react';

const Mensaje = ({mensaje}) => (
    <div className='Mensaje'>
        <div className="alert alert-dark" role="alert">
            {mensaje}
        </div>
    </div>
);

export default Mensaje;