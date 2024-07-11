import React from 'react';

import Suscripcion from './Footer/suscripcion';
import RedesSociales from './Footer/redesSociales';
import CopyRight from './Footer/copyRight';
import datos from '../recursos/json/footer.json';

import '../css/footer.css';

const Footer = () => (
    <footer>
        <div className='Informacion'>
            <RedesSociales datos={datos}/>
            <Suscripcion/>
        </div>
        <CopyRight datos={datos}/>
    </footer>
);

export default Footer;