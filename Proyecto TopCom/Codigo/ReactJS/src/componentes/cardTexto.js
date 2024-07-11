import React from 'react';

import '../css/card.css';

const CardInformacion = ({titulo, texto}) => (
    <div className="card">
        <div className="card-header TituloCard">
            {titulo}
        </div>
        <div className="card-body TextoCard">
            <p className="card-text">{texto}</p>
        </div>
    </div>
);

export default CardInformacion;