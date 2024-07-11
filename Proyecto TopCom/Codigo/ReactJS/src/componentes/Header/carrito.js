import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function Carrito({existeUsuario}) {
    if (!existeUsuario) {
        return (
            <div className="Carrito">
                <button type="button" /* data-toggle="modal" data-target="#noUsuarioCarrito" */>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        );
    }

    return (
        <div className="Carrito">
            <Link to="/carrito">
                <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
        </div>
    );
}

export default Carrito;