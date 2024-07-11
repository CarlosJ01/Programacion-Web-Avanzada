import React from 'react';

import '../../css/card.css';

const Valores = ({datos}) => (
    <div className='Valores'>
        <div className="card text-center">
            <div className="card-header TituloCard">
                Valores
            </div>
            <div className="card-body TextosCard">
                {
                    datos.map(valor =>{
                        return(
                            <div className='Valor' key={valor.key}>
                                <h5 className="card-title">{valor.valor}</h5>
                                <p className="card-text">{valor.texto}</p>
                            </div>
                        );
                    })
                }
            </div>
            <div className="card-footer text-muted FooderCard"></div>
        </div>
    </div>
);

export default Valores;