import React from 'react';

import ImagenNosotros from '../componentes/AcercaNosotros/imagenAcerca';
import InformacionAcerca from '../componentes/AcercaNosotros/informacionAcerca';
import Valores from '../componentes/AcercaNosotros/valores';

import Cargando from '../componentes/cargando';
import ErrorCarga from '../componentes/errorCarga500';
import Consulta from '../hooks/consulta';

import '../css/AcercaNosotros.css';
import {useVariablesContexto} from '../contexto';

function AcercaNosotros({history}) {
    const {historial, setHistorial} = useVariablesContexto();
    if (Object.entries(historial).length === 0) {
        setHistorial(history);
    }

    const { datos, cargando, error} = Consulta('/acerca-de-nosotros');
    
    if(cargando)
        return <Cargando/>
    if(error)
        return <ErrorCarga/>
    
    if (datos[0] !== undefined && datos[1] !== undefined) {
        return (
            <div className='AcercaNosotros container pt-5 pb-5'>
                <ImagenNosotros/>
                <InformacionAcerca datos={datos[0]}/>
                <Valores datos={datos[1]}/>
            </div>
        );
    } else{
        return <div></div>
    }
}

export default AcercaNosotros;