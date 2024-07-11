import React from 'react';

import Cargando from '../componentes/cargando';
import ErrorCarga from '../componentes/errorCarga500';
import Consulta from '../hooks/consulta';

import Titulos from '../recursos/json/titulos.json';

import Titulo from '../componentes/titulo';
import ListadoProductos from '../componentes/ListadoProductos';
import MensajeError from '../componentes/mensajeError';

import {useVariablesContexto} from '../contexto';

function Buscar({match, history}) {
    const {historial, setHistorial} = useVariablesContexto();
    if (Object.entries(historial).length === 0) {
        setHistorial(history);
    }

    const { datos, cargando, error} = Consulta('/busqueda/'+match.params.busqueda);
    
    if(cargando)
        return <Cargando/>
    if(error)
        return <ErrorCarga/>
    
    if (datos.length > 0) {
        return(
            <div className='Busqueda pt-5 pb-5'>
                <Titulo titulo={Titulos.Busqueda+match.params.busqueda}/>
                <ListadoProductos listas={datos}/>
            </div>
        );
    }else{
        return(
            <div className='Busqueda pt-5 pb-5'>
                <MensajeError mensaje={'No se encontraron productos con '+match.params.busqueda}/>
            </div>
        );
    }
}

export default Buscar;