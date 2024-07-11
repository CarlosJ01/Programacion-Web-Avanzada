import React from 'react';

import ListaProductos from './listaProductos'

const ListadoProductos = ({listas}) =>(
    <div className='ListadoProductos'>
        {
            listas.map((lista, index) =>{
                return <ListaProductos key={index} lista={lista}/>
            })
        }
    </div>
);

export default ListadoProductos;