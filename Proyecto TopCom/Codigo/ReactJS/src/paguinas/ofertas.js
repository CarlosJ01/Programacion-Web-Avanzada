import React from 'react';

import Cargando from '../componentes/cargando';
import ErrorCarga from '../componentes/errorCarga500';
import Consulta from '../hooks/consulta';

import OfertaImagen from '../componentes/ofertaImagen';
import ListadoProductos from '../componentes/ListadoProductos';
import MensajeError from '../componentes/mensajeError';

import '../css/ofertas.css';
import {useVariablesContexto} from '../contexto';

function Ofertas({history}) {
    const {historial, setHistorial} = useVariablesContexto();
    if (Object.entries(historial).length === 0) {
        setHistorial(history);
    }

    const { datos, cargando, error} = Consulta('/ofertas');
    
    if(cargando)
        return <Cargando/>
    if(error)
        return <ErrorCarga/>
    
    if (datos.length > 0) {
        return(
            <div className='Ofertas pb-5'>
                <OfertaImagen/>
                <ListadoProductos listas={datos}/>
            </div>
        );
    }else{
        return(
            <div className='Ofertas pb-5'>
                <OfertaImagen/>
                <MensajeError mensaje={'No se encontraron productos en oferta'}/>
            </div>
        );
    }
}

export default Ofertas;