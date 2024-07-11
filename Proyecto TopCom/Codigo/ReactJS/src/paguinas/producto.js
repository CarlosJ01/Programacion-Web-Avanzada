import React from 'react';

import Cargando from '../componentes/cargando';
import ErrorCarga from '../componentes/errorCarga500';
import Consulta from '../hooks/consulta';

import ImagenProducto from '../componentes/Producto/fotoProducto';
import InformacionProducto from '../componentes/Producto/informacionProducto';
import MensajeError from '../componentes/mensajeError';

import {useVariablesContexto} from '../contexto';

import '../css/producto.css';

function Buscar({match, history}) {
    const {historial, setHistorial} = useVariablesContexto();
    if (Object.entries(historial).length === 0) {
        setHistorial(history);
    }
    
    const { datos, cargando, error} = Consulta('/producto/'+match.params.idProducto);
    
    if(cargando)
        return <Cargando/>
    if(error)
        return <ErrorCarga/>
    
    if (Object.entries(datos).length > 0) {
        return(
            <div className='Producto pt-5 pb-5 container'>
                <ImagenProducto imagen={datos.imagen}/>
                <InformacionProducto {...datos}/>
            </div>
        );
    }else{
        return(
            <div className='Producto pt-5 pb-5 container'>
                <MensajeError mensaje={'No se encontro ningun producto'}/>
            </div>
        );
    }
}

export default Buscar;