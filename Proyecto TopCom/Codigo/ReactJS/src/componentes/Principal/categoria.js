import React from 'react';
import {Link} from 'react-router-dom';

import servidor from '../../backend';
import {useVariablesContexto} from '../../contexto';

function Categoria({id, nombre, descripcion, imagen, url}) {
    const {setidCategoria} = useVariablesContexto();

    const onclic = () =>{
        setidCategoria(id);
    }
    return(
        <div className="card" style={{width: 18 + 'rem'}}>
            <img className="card-img-top img-fluid" src={servidor+imagen} alt="Imagen de categoria"/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
                <Link to={url} onClick={onclic}>Ver más</Link>
            </div>
        </div>
    );
}

export default Categoria;