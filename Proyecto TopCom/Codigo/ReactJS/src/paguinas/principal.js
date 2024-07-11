import React from 'react';

import Carrusel from '../componentes/Principal/carrusel';
import Categorias from '../componentes/Principal/categorias';

import Cargando from '../componentes/cargando';
import ErrorCarga from '../componentes/errorCarga500';
import Consulta from '../hooks/consulta';

import {useVariablesContexto} from '../contexto';

function Principal({history}) {
    const {historial, setHistorial} = useVariablesContexto();
    if (Object.entries(historial).length === 0) {
        setHistorial(history);
    }
    
    const { datos, cargando, error} = Consulta('/informacion-paguina-principal');
    
    if(cargando)
        return <Cargando/>
    if(error)
        return <ErrorCarga/>

    if (datos[0] !== undefined && datos[1] !== undefined) {
        return (
            <div className='PaguinaPrincipal'>
                <Carrusel fotos={datos[0]}/>
                <div className='Categorias mt-5'>
                    {
                        datos[1].map((categorias, index) =>{
                            return(
                                <Categorias key={index} datos={categorias}/>
                            );
                        })
                    }
                </div>
            </div>
        );       
    } else{
        return <div></div>
    } 
}

export default Principal;