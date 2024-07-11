import React from 'react';

import Categoria from './categoria';

const Categorias = ({datos}) => (
    <div className='container pb-5'>
        <div className='card-deck'>
            {datos.map( categoria => {
            return(
                    <Categoria
                        key={categoria.id}
                        {...categoria}
                    />
                );
            })}
        </div>
    </div>
);

export default Categorias;