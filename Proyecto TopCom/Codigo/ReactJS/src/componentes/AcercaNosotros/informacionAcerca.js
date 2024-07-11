import React from 'react';

import CardTexto from '../cardTexto';

function InformacionAcerca({datos}) {
    return (
        <div className='Informacion'>
            {datos.map( dato => {
                return(
                        <CardTexto
                            key
                            {...dato}
                        />
                    );
                })
            }
        </div>
    );
}

export default InformacionAcerca;