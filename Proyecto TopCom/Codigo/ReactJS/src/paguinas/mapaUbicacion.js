import React from 'react';

import Cargando from '../componentes/cargando';
import ErrorCarga from '../componentes/errorCarga500';
import Consulta from '../hooks/consulta';

import Mapa from '../componentes/mapa';
import Mensaje from '../componentes/mensaje';

import '../css/mapa.css';
import {useVariablesContexto} from '../contexto';

function MapaUbicacion({history}) {
    const {historial, setHistorial} = useVariablesContexto();
    if (Object.entries(historial).length === 0) {
        setHistorial(history);
    }

    const { datos, cargando, error} = Consulta('/mapa-ubicacion');
    
    if(cargando)
        return <Cargando/>
    if(error)
        return <ErrorCarga/>

    return (
        <div className='MapaUbicacion container pt-5 pb-5'>
            <Mapa url={datos.urlMapa}/>
            <Mensaje mensaje={datos.Mensaje}/>
        </div>
    );
}

export default MapaUbicacion;