import React from 'react';
import {Link} from 'react-router-dom';

function Enlace({id, nombre, url, activo, setIdPaguina}) {
    
    const CambioIdPaguina = () => {
        setIdPaguina(id)
    }

    if (activo) {
        return (
            <li className="nav-item">
                <Link className="nav-link active" to={url}>{nombre}</Link>
            </li>
        );
    } else {
        return (
            <li className="nav-item" onClick={CambioIdPaguina}>
                <Link className="nav-link" to={url}>{nombre}</Link>
            </li>
        );
    }
    
}

export default Enlace;