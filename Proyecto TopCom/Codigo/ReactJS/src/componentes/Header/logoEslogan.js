import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import logo from '../../recursos/imagenes/logo.png';
import informacion from '../../recursos/json/header.json';

const LogoEslogan = () =>(
    <Fragment>
        <div className="Logo">
            <Link to="/">
                <img src={logo} alt="Logotipo de topcom."/>
            </Link>
        </div>
        <div className='Eslogan'>
            <p>{informacion.eslogan}</p>
        </div>
    </Fragment>
);

export default LogoEslogan;