import React from 'react';

import Cargando from '../componentes/cargando';
import ErrorCarga from '../componentes/errorCarga500';
import Consulta from '../hooks/consulta';

import Titulos from '../recursos/json/titulos.json';

import Titulo from '../componentes/titulo';
import ListadoProductos from '../componentes/ListadoProductos';
import MensajeError from '../componentes/mensajeError';

import {useVariablesContexto} from '../contexto';

function Categoria({match, history}) {
    const {historial, setHistorial, idCategoria} = useVariablesContexto();
    if (Object.entries(historial).length === 0) {
        setHistorial(history);
    }

    const { datos, cargando, error} = Consulta('/categoria/'+idCategoria);
    
    if(cargando)
        return <Cargando/>
    if(error)
        return <ErrorCarga/>
    
    if (datos.length > 0) {
        return(
            <div className='Categoria pt-5 pb-5'>
                <Titulo titulo={Titulos.Categoria+match.params.nombreCategoria}/>
                <ListadoProductos listas={datos}/>
            </div>
        );
    }else{
        return(
            <div className='Categoria pt-5 pb-5'>
                <MensajeError mensaje={'No se encontraron productos de esta categoria'}/>
            </div>
        );
    }
}

export default Categoria;