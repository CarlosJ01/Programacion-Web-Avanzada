import React from 'react';
import RedSocial from './redSocial';
import {faFacebookSquare, faTwitterSquare, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

const RedesSociales = ({datos}) =>(
    <div className='RedesSociales'>
        <span>Síguenos: </span>
        <RedSocial
            url={datos.Facebook}
            icono={faFacebookSquare}
        />
        <RedSocial
            url={datos.Twitter}
            icono={faTwitterSquare}
        />
        <RedSocial
            url={datos.Youtube}
            icono={faYoutube}
        />
        <RedSocial
            url={datos.Instagram}
            icono={faInstagram}
        />
    </div>
);

export default RedesSociales;