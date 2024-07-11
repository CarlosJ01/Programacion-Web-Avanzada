import React from 'react';

import Enlace from './enlace'

import datos from '../../recursos/json/header.json';

import {useVariablesContexto} from '../../contexto';

function BarraNavegacion() {
    const {idPaguina, setIdPaguina} = useVariablesContexto();
    
    return(
        <div className='BarraNavegacion'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <Enlace {...datos.Principal} activo={idPaguina === 1? true : false} setIdPaguina={setIdPaguina}/>
                    <Enlace {...datos.Acerca} activo={idPaguina === 2 ? true : false} setIdPaguina={setIdPaguina}/>
                    <Enlace {...datos.Mapa} activo={idPaguina === 3 ? true : false} setIdPaguina={setIdPaguina}/>
                    <Enlace {...datos.Catalogo} url={datos.Catalogo.url} activo={idPaguina === 4 ? true : false} setIdPaguina={setIdPaguina}/>
                    <Enlace {...datos.Noticias} activo={idPaguina === 5 ? true : false} setIdPaguina={setIdPaguina}/>
                </ul>
            </nav>
        </div>
    );
}

export default BarraNavegacion;
