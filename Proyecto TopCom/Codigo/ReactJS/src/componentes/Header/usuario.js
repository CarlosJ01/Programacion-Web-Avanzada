import React from 'react';
import {Link} from 'react-router-dom';

function Usuario({usuario, existeUsuario}) {

    if (!existeUsuario) {
        return (
            <div className="Usuario">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary">Usuario</button>
                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <p className="dropdown-item">Registro</p>
                        <p className="dropdown-item">Login</p>
                        {/* <Link to="/nuevo-usuario" className="dropdown-item">Registro</Link>
                        <Link to="/login" className="dropdown-item">Login</Link> */}
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="Usuario">
            <div className="btn-group">
                <button type="button" className="btn btn-primary UsuarioNombre">Hola: {usuario.nombre}</button>
                <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                    <Link to="/compras" className="dropdown-item">Compras</Link>
                    <Link to="/configuracion" className="dropdown-item">Configuracion</Link>
                    <Link to="/salir" className="dropdown-item Salir">Salir</Link>
                </div>
            </div>
        </div>
    );
}

export default Usuario;