import React from 'react';

const MensajeError = ({mensaje}) => (
    <div className='Mensaje container'>
        <div className="alert alert-danger" role="alert">
            {mensaje}
        </div>
    </div>
);

export default MensajeError;