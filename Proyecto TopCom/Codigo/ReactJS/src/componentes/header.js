import React from 'react';

import LogoEslogan from './Header/logoEslogan';
import Buscador from './Header/buscador';
import Usuario from './Header/usuario';
import Carrito from './Header/carrito';
import BarraNavegacion from './Header/barraNavegacion';
import Modal from './modal';

import '../css/header.css';

import {useVariablesContexto} from '../contexto';

function Header() {
    const {usuario} = useVariablesContexto();
    if (Object.entries(usuario).length === 0) {
        return (
            <header>
                <LogoEslogan/>
                <Buscador/>
                <Usuario existeUsuario={false}/>
                <Carrito existeUsuario={false}/>
                <BarraNavegacion/>
                {/* <Modal
                    id={'noUsuarioCarrito'}
                    titulo={'Carrito de Compras'}
                    texto={'Necesitas tener un usuario para acceder a tu carrito'}
                /> */}
                <Modal
                    id={'modalSuscripcion'}
                    titulo={'Suscripcion'}
                    texto={'Ahora estas suscripto con tu correo electronico, resiviras ofertas a traves de este.'}
                />
            </header>
        );
    }
    return (
        <header>
            <LogoEslogan/>
            <Buscador/>
            <Usuario usuario={usuario} existeUsuario={true}/>
            <Carrito existeUsuario={true}/>
            <BarraNavegacion/>
            <Modal
                id={'modalSuscripcion'}
                titulo={'Suscripcion'}
                texto={'Ahora estas suscripto con tu correo electronico, resiviras ofertas a traves de este.'}
            />
        </header>
    );
}

export default Header;
